class Favorites {
    constructor() {
        this.STORAGE_KEY = 'favorite_questions';
        this.favorites = this.load();
    }

    load() {
        return Storage.get(this.STORAGE_KEY, []);
    }

    save() {
        Storage.set(this.STORAGE_KEY, this.favorites);
    }

    add(question) {
        if (this.has(question.id, question.type)) {
            return false;
        }
        
        this.favorites.push({
            id: question.id,
            type: question.type,
            addedAt: new Date().toISOString()
        });
        
        this.save();
        return true;
    }

    remove(questionId, type) {
        const initialLength = this.favorites.length;
        this.favorites = this.favorites.filter(f => !(f.id === questionId && f.type === type));
        const removed = this.favorites.length < initialLength;
        if (removed) {
            this.save();
        }
        return removed;
    }

    toggle(question) {
        if (this.has(question.id, question.type)) {
            this.remove(question.id, question.type);
            return false;
        } else {
            this.add(question);
            return true;
        }
    }

    clear() {
        this.favorites = [];
        this.save();
    }

    getAll() {
        return [...this.favorites];
    }

    getByType(type) {
        return this.favorites.filter(f => f.type === type);
    }

    getCount() {
        return this.favorites.length;
    }

    getCountByType(type) {
        return this.getByType(type).length;
    }

    has(questionId, type) {
        return this.favorites.some(f => f.id === questionId && f.type === type);
    }

    getQuestionsWithDetails(allQuestionsByType) {
        return this.favorites.map(fav => {
            const questions = allQuestionsByType[fav.type] || [];
            const fullQuestion = questions.find(q => q.id === fav.id);
            return {
                ...fav,
                question: fullQuestion
            };
        }).filter(item => item.question !== undefined);
    }
}
