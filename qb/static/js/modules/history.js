class History {
    constructor() {
        this.STORAGE_KEY = 'quiz_history';
        this.history = this.load();
    }

    load() {
        return Storage.get(this.STORAGE_KEY, []);
    }

    save() {
        Storage.set(this.STORAGE_KEY, this.history);
    }

    add(record) {
        const newRecord = {
            id: Date.now(),
            type: record.type,
            score: record.score,
            correct: record.correct,
            wrong: record.wrong,
            total: record.total,
            accuracy: record.accuracy,
            completedAt: new Date().toISOString()
        };
        
        this.history.unshift(newRecord);
        
        if (this.history.length > 100) {
            this.history = this.history.slice(0, 100);
        }
        
        this.save();
        return newRecord;
    }

    remove(id) {
        const initialLength = this.history.length;
        this.history = this.history.filter(h => h.id !== id);
        const removed = this.history.length < initialLength;
        if (removed) {
            this.save();
        }
        return removed;
    }

    clear() {
        this.history = [];
        this.save();
    }

    getAll() {
        return [...this.history];
    }

    getByType(type) {
        return this.history.filter(h => h.type === type);
    }

    getCount() {
        return this.history.length;
    }

    getStats() {
        if (this.history.length === 0) {
            return {
                totalQuizzes: 0,
                totalScore: 0,
                averageScore: 0,
                averageAccuracy: 0,
                bestScore: 0,
                bestAccuracy: 0
            };
        }

        const totalQuizzes = this.history.length;
        const totalScore = this.history.reduce((sum, h) => sum + h.score, 0);
        const averageScore = Math.round(totalScore / totalQuizzes);
        const totalAccuracy = this.history.reduce((sum, h) => sum + h.accuracy, 0);
        const averageAccuracy = Math.round(totalAccuracy / totalQuizzes);
        const bestScore = Math.max(...this.history.map(h => h.score));
        const bestAccuracy = Math.max(...this.history.map(h => h.accuracy));

        return {
            totalQuizzes,
            totalScore,
            averageScore,
            averageAccuracy,
            bestScore,
            bestAccuracy
        };
    }
}
