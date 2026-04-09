class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.currentType = '';
        this.selectedAnswers = new Set();
        this.isAnswered = false;

        this.initElements();
        this.initEventListeners();
        this.loadStats();
    }

    initElements() {
        this.menuEl = document.getElementById('menu');
        this.quizEl = document.getElementById('quiz');
        this.resultEl = document.getElementById('result');

        this.currentQuestionEl = document.getElementById('current-question');
        this.totalQuestionsEl = document.getElementById('total-questions');
        this.scoreEl = document.getElementById('score');
        this.progressFillEl = document.getElementById('progress-fill');

        this.questionEl = document.getElementById('question');
        this.optionsEl = document.getElementById('options');

        this.submitBtn = document.getElementById('submit-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.feedbackEl = document.getElementById('feedback');

        this.finalScoreValueEl = document.getElementById('final-score-value');
        this.correctCountEl = document.getElementById('correct-count');
        this.wrongCountEl = document.getElementById('wrong-count');
        this.accuracyEl = document.getElementById('accuracy');

        this.questionCountInput = document.getElementById('question-count');
        this.totalJudgeEl = document.getElementById('total-judge');
        this.totalSingleEl = document.getElementById('total-single');
        this.totalMultiEl = document.getElementById('total-multi');
    }

    loadStats() {
        this.totalJudgeEl.textContent = QUESTION_DATA.judge ? QUESTION_DATA.judge.length : 0;
        this.totalSingleEl.textContent = QUESTION_DATA.single ? QUESTION_DATA.single.length : 0;
        this.totalMultiEl.textContent = QUESTION_DATA.multi ? QUESTION_DATA.multi.length : 0;
    }

    initEventListeners() {
        document.querySelectorAll('.type-btn').forEach(btn => {
            btn.addEventListener('click', () => this.startQuiz(btn.dataset.type));
        });

        document.getElementById('back-btn').addEventListener('click', () => this.showMenu());
        document.getElementById('retry-btn').addEventListener('click', () => this.startQuiz(this.currentType));
        document.getElementById('menu-btn').addEventListener('click', () => this.showMenu());

        this.submitBtn.addEventListener('click', () => this.submitAnswer());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
    }

    loadQuestions(type) {
        this.questions = QUESTION_DATA[type] || [];
        this.shuffleQuestions();
    }

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }

    startQuiz(type) {
        this.currentType = type;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.wrongCount = 0;

        this.loadQuestions(type);

        if (this.questions.length === 0) {
            alert('暂无题目');
            return;
        }

        // 获取用户配置的题目数量
        const questionCount = parseInt(this.questionCountInput.value) || CONFIG.QUESTIONS_PER_QUIZ;
        // 每次只取配置的题目数量
        this.questions = this.questions.slice(0, questionCount);
        this.totalQuestionsEl.textContent = this.questions.length;
        this.showQuiz();
        this.displayQuestion();
    }

    showMenu() {
        this.menuEl.classList.remove('hidden');
        this.quizEl.classList.add('hidden');
        this.resultEl.classList.add('hidden');
    }

    showQuiz() {
        this.menuEl.classList.add('hidden');
        this.quizEl.classList.remove('hidden');
        this.resultEl.classList.add('hidden');
    }

    showResult() {
        this.menuEl.classList.add('hidden');
        this.quizEl.classList.add('hidden');
        this.resultEl.classList.remove('hidden');

        this.finalScoreValueEl.textContent = this.score;
        this.correctCountEl.textContent = this.correctCount;
        this.wrongCountEl.textContent = this.wrongCount;
        this.accuracyEl.textContent = Math.round((this.correctCount / this.questions.length) * 100) + '%';
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.isAnswered = false;
        this.selectedAnswers.clear();

        this.currentQuestionEl.textContent = this.currentQuestionIndex + 1;
        this.scoreEl.textContent = this.score;
        this.progressFillEl.style.width = ((this.currentQuestionIndex) / this.questions.length * 100) + '%';

        this.questionEl.textContent = `${this.currentQuestionIndex + 1}. ${question.question}`;

        this.renderOptions(question);

        this.feedbackEl.classList.add('hidden');
        this.feedbackEl.className = 'feedback hidden';

        this.submitBtn.classList.remove('hidden');
        this.submitBtn.disabled = true;
        this.nextBtn.classList.add('hidden');
    }

    renderOptions(question) {
        this.optionsEl.innerHTML = '';

        if (question.type === 'judge') {
            this.renderJudgeOptions();
        } else if (question.type === 'single') {
            this.renderSingleOptions(question.options);
        } else if (question.type === 'multi') {
            this.renderMultiOptions(question.options);
        }
    }

    renderJudgeOptions() {
        const options = [
            { letter: '对', text: '正确' },
            { letter: '错', text: '错误' }
        ];

        options.forEach(opt => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.dataset.value = opt.letter;
            optionEl.innerHTML = `
                <span class="option-letter">${opt.letter}</span>
                <span class="option-text">${opt.text}</span>
            `;
            optionEl.addEventListener('click', () => this.selectOption(optionEl, opt.letter));
            this.optionsEl.appendChild(optionEl);
        });
    }

    renderSingleOptions(options) {
        options.forEach(opt => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.dataset.value = opt.letter;
            optionEl.innerHTML = `
                <span class="option-letter">${opt.letter}</span>
                <span class="option-text">${opt.text}</span>
            `;
            optionEl.addEventListener('click', () => this.selectOption(optionEl, opt.letter));
            this.optionsEl.appendChild(optionEl);
        });
    }

    renderMultiOptions(options) {
        options.forEach(opt => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.dataset.value = opt.letter;
            optionEl.innerHTML = `
                <span class="option-letter">${opt.letter}</span>
                <span class="option-text">${opt.text}</span>
            `;
            optionEl.addEventListener('click', () => this.toggleOption(optionEl, opt.letter));
            this.optionsEl.appendChild(optionEl);
        });
    }

    selectOption(optionEl, value) {
        if (this.isAnswered) return;

        this.optionsEl.querySelectorAll('.option').forEach(el => {
            el.classList.remove('selected');
        });

        optionEl.classList.add('selected');
        this.selectedAnswers.clear();
        this.selectedAnswers.add(value);
        this.submitBtn.disabled = false;
    }

    toggleOption(optionEl, value) {
        if (this.isAnswered) return;

        if (optionEl.classList.contains('selected')) {
            optionEl.classList.remove('selected');
            this.selectedAnswers.delete(value);
        } else {
            optionEl.classList.add('selected');
            this.selectedAnswers.add(value);
        }

        this.submitBtn.disabled = this.selectedAnswers.size === 0;
    }

    submitAnswer() {
        if (this.isAnswered) return;

        const question = this.questions[this.currentQuestionIndex];
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

        this.showFeedback(isCorrect, correctAnswer);
        this.highlightAnswers(correctAnswer);

        this.submitBtn.classList.add('hidden');
        this.nextBtn.classList.remove('hidden');

        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.nextBtn.textContent = '查看结果';
        }
    }

    showFeedback(isCorrect, correctAnswer) {
        this.feedbackEl.classList.remove('hidden');
        if (isCorrect) {
            this.feedbackEl.classList.add('correct');
            this.feedbackEl.textContent = '✓ 回答正确！';
        } else {
            this.feedbackEl.classList.add('wrong');
            this.feedbackEl.textContent = `✗ 回答错误！正确答案：${correctAnswer}`;
        }
    }

    highlightAnswers(correctAnswer) {
        const correctSet = new Set(correctAnswer.split(''));

        this.optionsEl.querySelectorAll('.option').forEach(el => {
            el.classList.add('disabled');
            const value = el.dataset.value;

            if (correctSet.has(value)) {
                el.classList.add('correct');
            } else if (this.selectedAnswers.has(value)) {
                el.classList.add('wrong');
            }
        });
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex >= this.questions.length) {
            this.progressFillEl.style.width = '100%';
            this.showResult();
            return;
        }

        this.nextBtn.textContent = '下一题';
        this.displayQuestion();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
