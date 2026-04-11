class ProgressSaver {
    constructor() {
        this.STORAGE_KEY = 'quiz_progress';
        this.AUTO_SAVE_INTERVAL = 5000;
        this.autoSaveTimer = null;
    }

    save(app) {
        const progressData = {
            timestamp: Date.now(),
            currentType: app.currentType,
            isWrongQuizMode: app.isWrongQuizMode,
            isFavoriteQuizMode: app.isFavoriteQuizMode,
            isMixedQuizMode: app.isMixedQuizMode,
            quizMode: app.quizMode,
            examTimeLimit: app.examTimeLimit,
            remainingTime: app.remainingTime,
            
            engine: {
                questions: app.engine.questions,
                currentQuestionIndex: app.engine.currentQuestionIndex,
                selectedAnswers: app.engine.selectedAnswers,
                answers: app.engine.answers,
                score: app.engine.score,
                currentType: app.engine.currentType
            }
        };
        
        Storage.set(this.STORAGE_KEY, progressData);
        return progressData;
    }

    load() {
        return Storage.get(this.STORAGE_KEY, null);
    }

    hasProgress() {
        const progress = this.load();
        return progress !== null && progress.timestamp;
    }

    getProgressAge() {
        const progress = this.load();
        if (!progress) return null;
        return Date.now() - progress.timestamp;
    }

    clear() {
        Storage.remove(this.STORAGE_KEY);
    }

    startAutoSave(app) {
        this.stopAutoSave();
        this.autoSaveTimer = setInterval(() => {
            this.save(app);
        }, this.AUTO_SAVE_INTERVAL);
    }

    stopAutoSave() {
        if (this.autoSaveTimer) {
            clearInterval(this.autoSaveTimer);
            this.autoSaveTimer = null;
        }
    }

    restore(app, progressData) {
        if (!progressData) return false;

        try {
            app.currentType = progressData.currentType;
            app.isWrongQuizMode = progressData.isWrongQuizMode;
            app.isFavoriteQuizMode = progressData.isFavoriteQuizMode;
            app.isMixedQuizMode = progressData.isMixedQuizMode;
            app.quizMode = progressData.quizMode;
            app.examTimeLimit = progressData.examTimeLimit;
            app.remainingTime = progressData.remainingTime;

            const engineData = progressData.engine;
            app.engine.questions = engineData.questions;
            app.engine.currentQuestionIndex = engineData.currentQuestionIndex;
            app.engine.selectedAnswers = engineData.selectedAnswers;
            app.engine.answers = engineData.answers;
            app.engine.score = engineData.score;
            app.engine.currentType = engineData.currentType;

            return true;
        } catch (error) {
            console.error('恢复进度失败:', error);
            return false;
        }
    }

    formatAge(ageMs) {
        const seconds = Math.floor(ageMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} 天前`;
        if (hours > 0) return `${hours} 小时前`;
        if (minutes > 0) return `${minutes} 分钟前`;
        return '刚刚';
    }
}
