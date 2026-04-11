class WrongBook {
    constructor() {
        this.STORAGE_KEY = 'wrong_questions';
        this.wrongQuestions = this.load();
    }

    load() {
        return Storage.get(this.STORAGE_KEY, []);
    }

    save() {
        Storage.set(this.STORAGE_KEY, this.wrongQuestions);
    }

    add(question) {
        const existingIndex = this.wrongQuestions.findIndex(q => q.id === question.id && q.type === question.type);
        
        if (existingIndex >= 0) {
            this.wrongQuestions[existingIndex].wrongCount++;
            this.wrongQuestions[existingIndex].wrongAt = new Date().toISOString();
        } else {
            this.wrongQuestions.push({
                id: question.id,
                type: question.type,
                wrongAt: new Date().toISOString(),
                wrongCount: 1
            });
        }
        
        this.save();
    }

    remove(questionId, type) {
        this.wrongQuestions = this.wrongQuestions.filter(q => !(q.id === questionId && q.type === type));
        this.save();
    }

    clear() {
        this.wrongQuestions = [];
        this.save();
    }

    getAll() {
        return [...this.wrongQuestions];
    }

    getByType(type) {
        return this.wrongQuestions.filter(q => q.type === type);
    }

    getCount() {
        return this.wrongQuestions.length;
    }

    getCountByType(type) {
        return this.getByType(type).length;
    }

    has(questionId, type) {
        return this.wrongQuestions.some(q => q.id === questionId && q.type === type);
    }

    getQuestionsWithDetails(allQuestionsByType) {
        return this.wrongQuestions.map(wrongQ => {
            const questions = allQuestionsByType[wrongQ.type] || [];
            const fullQuestion = questions.find(q => q.id === wrongQ.id);
            return {
                ...wrongQ,
                question: fullQuestion
            };
        }).filter(item => item.question !== undefined);
    }
}
