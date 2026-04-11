const Storage = {
    PREFIX: 'quiz_app_',
    cache: new Map(),
    pendingWrites: new Map(),
    writeTimeout: null,
    DEBOUNCE_DELAY: 500,

    getKey(key) {
        return this.PREFIX + key;
    },

    get(key, defaultValue = null) {
        const cacheKey = this.getKey(key);
        
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        try {
            const stored = localStorage.getItem(cacheKey);
            if (stored === null) {
                this.cache.set(cacheKey, defaultValue);
                return defaultValue;
            }
            const value = JSON.parse(stored);
            this.cache.set(cacheKey, value);
            return value;
        } catch (e) {
            console.error('Storage get error:', e);
            this.cache.set(cacheKey, defaultValue);
            return defaultValue;
        }
    },

    set(key, value) {
        const cacheKey = this.getKey(key);
        
        this.cache.set(cacheKey, value);
        this.pendingWrites.set(cacheKey, value);
        this.scheduleWrite();
        
        return true;
    },

    scheduleWrite() {
        if (this.writeTimeout) {
            clearTimeout(this.writeTimeout);
        }
        
        this.writeTimeout = setTimeout(() => {
            this.flushPendingWrites();
        }, this.DEBOUNCE_DELAY);
    },

    flushPendingWrites() {
        if (this.pendingWrites.size === 0) {
            return;
        }

        const writes = new Map(this.pendingWrites);
        this.pendingWrites.clear();

        try {
            writes.forEach((value, key) => {
                localStorage.setItem(key, JSON.stringify(value));
            });
        } catch (e) {
            console.error('Storage batch write error:', e);
        }
    },

    remove(key) {
        const cacheKey = this.getKey(key);
        
        this.cache.delete(cacheKey);
        this.pendingWrites.delete(cacheKey);
        
        try {
            localStorage.removeItem(cacheKey);
            return true;
        } catch (e) {
            console.error('Storage remove error:', e);
            return false;
        }
    },

    clear() {
        this.flushPendingWrites();
        this.cache.clear();
        this.pendingWrites.clear();
        
        try {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith(this.PREFIX)) {
                    localStorage.removeItem(key);
                }
            });
            return true;
        } catch (e) {
            console.error('Storage clear error:', e);
            return false;
        }
    },

    clearCache() {
        this.cache.clear();
    },

    syncFromStorage() {
        try {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith(this.PREFIX) && !this.cache.has(key)) {
                    try {
                        const value = JSON.parse(localStorage.getItem(key));
                        this.cache.set(key, value);
                    } catch (e) {
                        console.warn('Failed to sync key from storage:', key, e);
                    }
                }
            });
        } catch (e) {
            console.error('Storage sync error:', e);
        }
    },

    forceSync() {
        this.flushPendingWrites();
    }
};

window.addEventListener('beforeunload', () => {
    Storage.forceSync();
});
