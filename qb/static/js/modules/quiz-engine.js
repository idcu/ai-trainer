class QuizEngine {
    constructor() {
        this.questions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.currentType = '';
        this.selectedAnswers = new Set();
        this.isAnswered = false;
    }

    reset() {
        this.currentIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.selectedAnswers.clear();
        this.isAnswered = false;
    }

    loadQuestions(questions, type) {
        this.questions = questions;
        this.currentType = type;
        this.reset();
    }

    sliceQuestions(count) {
        const actualCount = Math.min(count, this.questions.length);
        this.questions = this.questions.slice(0, actualCount);
    }

    getCurrentQuestion() {
        return this.questions[this.currentIndex];
    }

    getProgress() {
        return {
            current: this.currentIndex + 1,
            total: this.questions.length,
            percentage: Math.round((this.currentIndex / this.questions.length) * 100)
        };
    }

    getScore() {
        return {
            score: this.score,
            correct: this.correctCount,
            wrong: this.wrongCount,
            accuracy: this.questions.length > 0 
                ? Math.round((this.correctCount / this.questions.length) * 100) 
                : 0
        };
    }

    selectAnswer(value) {
        if (this.isAnswered) return false;
        this.selectedAnswers.clear();
        this.selectedAnswers.add(value);
        return true;
    }

    toggleAnswer(value) {
        if (this.isAnswered) return false;
        if (this.selectedAnswers.has(value)) {
            this.selectedAnswers.delete(value);
        } else {
            this.selectedAnswers.add(value);
        }
        return true;
    }

    hasSelectedAnswer() {
        return this.selectedAnswers.size > 0;
    }

    submitAnswer() {
        if (this.isAnswered) return null;

        const question = this.getCurrentQuestion();
        const correctAnswer = question.answer;
        const userAnswer = Array.from(this.selectedAnswers).sort().join('');
        const isCorrect = userAnswer === correctAnswer;

        this.isAnswered = true;

        if (isCorrect) {
            this.score += CONFIG.POINTS_PER_CORRECT;
            this.correctCount++;
        } else {
            this.wrongCount++;
        }

        return {
            isCorrect,
            correctAnswer,
            userAnswer,
            analysis: question.analysis
        };
    }

    nextQuestion() {
        this.currentIndex++;
        if (this.currentIndex >= this.questions.length) {
            return false;
        }
        this.selectedAnswers.clear();
        this.isAnswered = false;
        return true;
    }

    isLastQuestion() {
        return this.currentIndex === this.questions.length - 1;
    }
}
