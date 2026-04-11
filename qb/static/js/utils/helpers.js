const Helpers = {
    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    },

    formatDate(date) {
        const d = new Date(date);
        return d.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    calculateAccuracy(correct, total) {
        if (total === 0) return 0;
        return Math.round((correct / total) * 100);
    },

    debounce(func, wait, immediate = false) {
        let timeout;
        return function executedFunction(...args) {
            const context = this;
            const later = () => {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    memoize(func, resolver) {
        const cache = new Map();
        return function(...args) {
            const key = resolver ? resolver(...args) : args[0];
            if (cache.has(key)) {
                return cache.get(key);
            }
            const result = func.apply(this, args);
            cache.set(key, result);
            return result;
        };
    },

    createBatchProcessor(batchSize = 50, delay = 100) {
        const queue = [];
        let isProcessing = false;

        return {
            add(item) {
                queue.push(item);
                if (!isProcessing) {
                    this.process();
                }
            },

            async process() {
                if (queue.length === 0) {
                    isProcessing = false;
                    return;
                }
                isProcessing = true;
                const batch = queue.splice(0, batchSize);
                await new Promise(resolve => setTimeout(resolve, delay));
                this.process();
            }
        };
    },

    deepFreeze(obj) {
        Object.keys(obj).forEach(name => {
            const prop = obj[name];
            if (typeof prop === 'object' && prop !== null) {
                this.deepFreeze(prop);
            }
        });
        return Object.freeze(obj);
    },

    safeJSONParse(str, defaultValue = null) {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.warn('JSON parse error:', e);
            return defaultValue;
        }
    },

    cloneDeep(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        if (obj instanceof Date) return new Date(obj.getTime());
        if (obj instanceof Array) return obj.map(item => this.cloneDeep(item));
        if (obj instanceof Object) {
            const clonedObj = {};
            Object.keys(obj).forEach(key => {
                clonedObj[key] = this.cloneDeep(obj[key]);
            });
            return clonedObj;
        }
        return obj;
    }
};
