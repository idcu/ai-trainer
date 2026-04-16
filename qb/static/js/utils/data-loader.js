const DataLoader = {
    cache: new Map(),
    cacheTimeout: 5 * 60 * 1000,

    getCacheKey(url) {
        return `data_${url}`;
    },

    isCacheValid(cacheKey) {
        if (!this.cache.has(cacheKey)) return false;
        const { timestamp } = this.cache.get(cacheKey);
        return Date.now() - timestamp < this.cacheTimeout;
    },

    async loadJSON(url) {
        const cacheKey = this.getCacheKey(url);
        
        if (this.isCacheValid(cacheKey)) {
            return this.cache.get(cacheKey).data;
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            
            this.cache.set(cacheKey, {
                data,
                timestamp: Date.now()
            });
            
            return data;
        } catch (error) {
            console.error('Failed to load JSON:', url, error);
            throw error;
        }
    },

    clearCache() {
        this.cache.clear();
    },

    removeCache(url) {
        const cacheKey = this.getCacheKey(url);
        this.cache.delete(cacheKey);
    },

    async loadQuestions(type) {
        const dataPath = CONFIG.DATA_PATHS[type];
        if (!dataPath) {
            throw new Error(`Unknown question type: ${type}`);
        }
        return await this.loadJSON(dataPath);
    },

    async loadStats() {
        const stats = {};
        for (const type of ['judge', 'single', 'multi', 'fill', 'essay']) {
            try {
                const questions = await this.loadQuestions(type);
                stats[type] = questions.length;
            } catch (e) {
                stats[type] = 0;
            }
        }
        return stats;
    }
};
