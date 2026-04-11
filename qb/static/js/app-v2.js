class QuizApp {
    constructor() {
        this.engine = new QuizEngine();
        this.ui = new UIRenderer();
        this.wrongBook = new WrongBook();
        this.favorites = new Favorites();
        this.history = new History();
        this.searchFilter = new SearchFilter();
        this.progressSaver = new ProgressSaver();
        this.dataIO = new DataIO();
        this.statistics = new Statistics();
        this.currentType = '';
        this.allQuestions = {
            judge: [],
            single: [],
            multi: []
        };
        this.isWrongQuizMode = false;
        this.isFavoriteQuizMode = false;
        this.isMixedQuizMode = false;
        this.isInQuiz = false;
        
        this.quizMode = 'practice';
        this.examTimeLimit = 30;
        this.timerInterval = null;
        this.remainingTime = 0;
        
        this.selectedMixedTypes = ['judge', 'single', 'multi'];
        this.mixedQuestionCount = 50;
        
        this.initEventListeners();
        this.checkForSavedProgress();
    }

    initEventListeners() {
        this.ui.bindTypeButtons((type) => this.startQuiz(type));
        this.ui.bindOptionClick((optionEl, value) => this.handleOptionClick(optionEl, value));
        this.ui.bindActionButtons({
            onBack: () => this.showMenu(),
            onRetry: () => this.startQuiz(this.currentType),
            onMenu: () => this.showMenu(),
            onSubmit: () => this.submitAnswer(),
            onNext: () => this.nextQuestion()
        });
        this.ui.bindWrongBookButtons({
            onOpenWrongBook: () => this.openWrongBook(),
            onBackFromWrongBook: () => this.showMenu(),
            onStartWrongQuiz: () => this.startWrongQuiz(),
            onClearWrongBook: () => this.clearWrongBook(),
            onRemoveWrongQuestion: (id, type) => this.removeWrongQuestion(id, type)
        });
        this.ui.bindFavoriteButtons({
            onOpenFavorite: () => this.openFavorite(),
            onBackFromFavorite: () => this.showMenu(),
            onStartFavoriteQuiz: () => this.startFavoriteQuiz(),
            onClearFavorite: () => this.clearFavorite(),
            onRemoveFavoriteQuestion: (id, type) => this.removeFavoriteQuestion(id, type)
        });
        this.ui.bindHistoryButtons({
            onOpenHistory: () => this.openHistory(),
            onBackFromHistory: () => this.showMenu(),
            onClearHistory: () => this.clearHistory(),
            onRemoveHistoryRecord: (id) => this.removeHistoryRecord(id)
        });
        this.ui.bindModeButtons((mode) => this.setQuizMode(mode));
        this.ui.bindTimeButtons((minutes) => this.setExamTime(minutes));
        this.ui.bindSearchButtons({
            onOpenSearch: () => this.openSearch(),
            onBackFromSearch: () => this.showMenu(),
            onSearchInput: (keyword) => this.handleSearchInput(keyword),
            onFilterChange: (filter) => this.handleFilterChange(filter),
            onViewAnswer: (id, type) => this.viewAnswer(id, type),
            onPracticeFrom: (id, type) => this.practiceFrom(id, type)
        });
        this.ui.bindMixedButtons({
            onOpenMixed: () => this.openMixed(),
            onBackFromMixed: () => this.showMenu(),
            onStartMixedQuiz: () => this.startMixedQuiz(),
            onTypeToggle: (type) => this.toggleMixedType(type)
        });
        this.ui.bindProgressButtons({
            onRestoreProgress: () => this.restoreProgress(),
            onNewQuiz: () => this.discardProgress()
        });
        this.ui.bindDataIOButtons({
            onExport: () => this.exportData(),
            onImportFile: (file) => this.importData(file),
            onClear: () => this.clearAllData(),
            onCloseImportModal: () => this.ui.hideImportModal()
        });
        this.ui.bindStatisticsButtons({
            onOpenStatistics: () => this.openStatistics(),
            onCloseStatistics: () => this.ui.hideStatisticsModal()
        });
    }

    checkForSavedProgress() {
        if (this.progressSaver.hasProgress()) {
            const age = this.progressSaver.getProgressAge();
            const ageText = this.progressSaver.formatAge(age);
            this.ui.showProgressPrompt(ageText);
        }
    }

    restoreProgress() {
        const progressData = this.progressSaver.load();
        if (progressData && this.progressSaver.restore(this, progressData)) {
            this.ui.hideProgressPrompt();
            this.isInQuiz = true;
            this.ui.totalQuestionsEl.textContent = this.engine.questions.length;
            this.ui.showQuiz();
            this.ui.addQuizModeBadge(this.quizMode);
            
            if (this.quizMode === 'exam' && this.remainingTime > 0) {
                this.startTimer();
            } else {
                this.ui.hideTimer();
            }
            
            this.progressSaver.startAutoSave(this);
            this.displayQuestion();
        }
    }

    discardProgress() {
        this.progressSaver.clear();
        this.ui.hideProgressPrompt();
    }

    setQuizMode(mode) {
        this.quizMode = mode;
        this.ui.updateModeSelection(mode);
        this.ui.showModeToast(mode === 'practice' ? '已切换到练习模式' : '已切换到考试模式');
    }

    setExamTime(minutes) {
        this.examTimeLimit = minutes;
        this.ui.updateTimeSelection(minutes);
    }

    async loadAllQuestions() {
        try {
            for (const type of ['judge', 'single', 'multi']) {
                this.allQuestions[type] = await DataLoader.loadQuestions(type);
            }
        } catch (error) {
            console.error('加载所有题目失败:', error);
        }
    }

    async loadStats() {
        try {
            const stats = await DataLoader.loadStats();
            this.ui.updateStats(stats);
            this.updateWrongCountBadge();
            this.updateFavoriteCountBadge();
            this.updateHistoryCountBadge();
            this.ui.updateModeSelection(this.quizMode);
            this.ui.updateTimeSelection(this.examTimeLimit);
        } catch (error) {
            console.error('加载统计数据失败:', error);
        }
    }

    async loadQuestions(type) {
        try {
            const questions = await DataLoader.loadQuestions(type);
            return Helpers.shuffleArray(questions);
        } catch (error) {
            console.error('加载题目失败:', error);
            alert('加载题目失败，请检查网络连接');
            throw error;
        }
    }

    async startQuiz(type) {
        this.currentType = type;
        this.isWrongQuizMode = false;
        this.isFavoriteQuizMode = false;
        this.isMixedQuizMode = false;
        this.isInQuiz = true;

        try {
            const questions = await this.loadQuestions(type);

            if (questions.length === 0) {
                alert('暂无题目');
                return;
            }

            this.engine.loadQuestions(questions, type);

            const questionCount = this.ui.getQuestionCount();
            this.engine.sliceQuestions(questionCount);

            this.ui.totalQuestionsEl.textContent = this.engine.questions.length;
            this.ui.showQuiz();
            this.ui.addQuizModeBadge(this.quizMode);
            
            if (this.quizMode === 'exam') {
                this.startTimer();
            } else {
                this.ui.hideTimer();
            }
            
            this.progressSaver.startAutoSave(this);
            this.displayQuestion();
        } catch (error) {
            console.error('开始答题失败:', error);
        }
    }

    async startWrongQuiz() {
        this.isWrongQuizMode = true;
        this.isFavoriteQuizMode = false;
        this.isMixedQuizMode = false;
        this.isInQuiz = true;
        
        const wrongQuestions = this.wrongBook.getQuestionsWithDetails(this.allQuestions);
        
        if (wrongQuestions.length === 0) {
            alert('错题本为空');
            return;
        }

        const questions = wrongQuestions.map(item => item.question);
        const shuffledQuestions = Helpers.shuffleArray(questions);
        
        this.engine.loadQuestions(shuffledQuestions, 'wrong');
        this.ui.totalQuestionsEl.textContent = this.engine.questions.length;
        this.ui.showQuiz();
        this.ui.addQuizModeBadge(this.quizMode);
        
        if (this.quizMode === 'exam') {
            this.startTimer();
        } else {
            this.ui.hideTimer();
        }
        
        this.progressSaver.startAutoSave(this);
        this.displayQuestion();
    }

    async startFavoriteQuiz() {
        this.isWrongQuizMode = false;
        this.isFavoriteQuizMode = true;
        this.isMixedQuizMode = false;
        this.isInQuiz = true;
        
        const favoriteQuestions = this.favorites.getQuestionsWithDetails(this.allQuestions);
        
        if (favoriteQuestions.length === 0) {
            alert('收藏夹为空');
            return;
        }

        const questions = favoriteQuestions.map(item => item.question);
        const shuffledQuestions = Helpers.shuffleArray(questions);
        
        this.engine.loadQuestions(shuffledQuestions, 'favorite');
        this.ui.totalQuestionsEl.textContent = this.engine.questions.length;
        this.ui.showQuiz();
        this.ui.addQuizModeBadge(this.quizMode);
        
        if (this.quizMode === 'exam') {
            this.startTimer();
        } else {
            this.ui.hideTimer();
        }
        
        this.progressSaver.startAutoSave(this);
        this.displayQuestion();
    }

    openMixed() {
        this.ui.updateMixedTypeSelection(this.selectedMixedTypes);
        this.ui.setMixedQuestionCount(this.mixedQuestionCount);
        this.ui.showMixedList();
    }

    toggleMixedType(type) {
        const index = this.selectedMixedTypes.indexOf(type);
        if (index > -1) {
            if (this.selectedMixedTypes.length > 1) {
                this.selectedMixedTypes.splice(index, 1);
            } else {
                alert('至少需要选择一种题型');
                return;
            }
        } else {
            this.selectedMixedTypes.push(type);
        }
        this.ui.updateMixedTypeSelection(this.selectedMixedTypes);
    }

    async startMixedQuiz() {
        this.isWrongQuizMode = false;
        this.isFavoriteQuizMode = false;
        this.isMixedQuizMode = true;
        this.isInQuiz = true;
        this.mixedQuestionCount = this.ui.getMixedQuestionCount();
        
        let allMixedQuestions = [];
        
        this.selectedMixedTypes.forEach(type => {
            const questions = this.allQuestions[type] || [];
            questions.forEach(q => {
                allMixedQuestions.push({ ...q, type: type });
            });
        });
        
        if (allMixedQuestions.length === 0) {
            alert('暂无题目');
            return;
        }
        
        const shuffledQuestions = Helpers.shuffleArray(allMixedQuestions);
        
        let selectedQuestions = shuffledQuestions;
        if (shuffledQuestions.length > this.mixedQuestionCount) {
            selectedQuestions = shuffledQuestions.slice(0, this.mixedQuestionCount);
        }
        
        this.engine.loadQuestions(selectedQuestions, 'mixed');
        this.ui.totalQuestionsEl.textContent = this.engine.questions.length;
        this.ui.showQuiz();
        this.ui.addQuizModeBadge(this.quizMode);
        
        if (this.quizMode === 'exam') {
            this.startTimer();
        } else {
            this.ui.hideTimer();
        }
        
        this.progressSaver.startAutoSave(this);
        this.displayQuestion();
    }

    openSearch() {
        this.searchFilter.reset();
        this.ui.updateFilterSelection('all');
        this.performSearch();
        this.ui.showSearchList();
    }

    handleSearchInput(keyword) {
        this.searchFilter.setKeyword(keyword);
        this.performSearch();
    }

    handleFilterChange(filter) {
        this.searchFilter.setFilter(filter);
        this.ui.updateFilterSelection(filter);
        this.performSearch();
    }

    performSearch() {
        const results = this.searchFilter.searchAndFilter(this.allQuestions);
        this.ui.renderSearchResults(
            results, 
            this.searchFilter.getKeyword(), 
            this.searchFilter.getFilter()
        );
    }

    viewAnswer(id, type) {
        const questions = this.allQuestions[type] || [];
        const question = questions.find(q => q.id === id);
        
        if (!question) {
            alert('未找到题目');
            return;
        }

        const typeNames = {
            'judge': '判断题',
            'single': '单选题',
            'multi': '多选题'
        };

        let message = `【${typeNames[type]}】\n\n${question.question}\n\n`;
        message += `正确答案：${question.answer}`;
        if (question.analysis) {
            message += `\n\n解析：${question.analysis}`;
        }
        
        alert(message);
    }

    practiceFrom(id, type) {
        this.currentType = type;
        this.isWrongQuizMode = false;
        this.isFavoriteQuizMode = false;
        this.isMixedQuizMode = false;
        this.isInQuiz = true;

        const questions = [...(this.allQuestions[type] || [])];
        
        if (questions.length === 0) {
            alert('暂无题目');
            return;
        }

        const startIndex = questions.findIndex(q => q.id === id);
        if (startIndex > 0) {
            const before = questions.slice(0, startIndex);
            const after = questions.slice(startIndex);
            questions.length = 0;
            questions.push(...after, ...before);
        }

        this.engine.loadQuestions(questions, type);

        const questionCount = this.ui.getQuestionCount();
        this.engine.sliceQuestions(questionCount);

        this.ui.totalQuestionsEl.textContent = this.engine.questions.length;
        this.ui.showQuiz();
        this.ui.addQuizModeBadge(this.quizMode);
        
        if (this.quizMode === 'exam') {
            this.startTimer();
        } else {
            this.ui.hideTimer();
        }
        
        this.progressSaver.startAutoSave(this);
        this.displayQuestion();
    }

    startTimer() {
        this.stopTimer();
        this.remainingTime = this.examTimeLimit * 60;
        this.ui.showTimer();
        this.ui.updateTimerDisplay(this.remainingTime);
        
        this.timerInterval = setInterval(() => {
            this.remainingTime--;
            this.ui.updateTimerDisplay(this.remainingTime);
            
            if (this.remainingTime <= 0) {
                this.stopTimer();
                this.autoSubmit();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    autoSubmit() {
        alert('时间到！');
        this.finishQuiz();
    }

    finishQuiz() {
        this.stopTimer();
        this.progressSaver.stopAutoSave();
        this.progressSaver.clear();
        this.isInQuiz = false;
        
        while (!this.engine.isLastQuestion()) {
            this.engine.nextQuestion();
        }
        
        this.ui.progressFillEl.style.width = '100%';
        this.saveHistory();
        this.showResult();
    }

    showMenu() {
        this.stopTimer();
        this.progressSaver.stopAutoSave();
        if (this.isInQuiz) {
            this.progressSaver.save(this);
        }
        this.isInQuiz = false;
        this.ui.showMenu();
        this.updateWrongCountBadge();
        this.updateFavoriteCountBadge();
        this.updateHistoryCountBadge();
    }

    openWrongBook() {
        const wrongQuestions = this.wrongBook.getQuestionsWithDetails(this.allQuestions);
        this.ui.updateWrongBookStats(this.wrongBook.getCount());
        this.ui.renderWrongQuestions(wrongQuestions);
        this.ui.showWrongBookList();
    }

    openFavorite() {
        const favoriteQuestions = this.favorites.getQuestionsWithDetails(this.allQuestions);
        this.ui.updateFavoriteStats(this.favorites.getCount());
        this.ui.renderFavoriteQuestions(favoriteQuestions);
        this.ui.showFavoriteList();
    }

    openHistory() {
        const historyRecords = this.history.getAll();
        const historyStats = this.history.getStats();
        this.ui.updateHistoryStats(historyStats);
        this.ui.renderHistoryRecords(historyRecords);
        this.ui.showHistoryList();
    }

    updateWrongCountBadge() {
        this.ui.updateWrongCountBadge(this.wrongBook.getCount());
    }

    updateFavoriteCountBadge() {
        this.ui.updateFavoriteCountBadge(this.favorites.getCount());
    }

    updateHistoryCountBadge() {
        this.ui.updateHistoryCountBadge(this.history.getCount());
    }

    removeWrongQuestion(id, type) {
        if (confirm('确定要移除此错题吗？')) {
            this.wrongBook.remove(id, type);
            this.openWrongBook();
            this.updateWrongCountBadge();
        }
    }

    removeFavoriteQuestion(id, type) {
        if (confirm('确定要取消收藏吗？')) {
            this.favorites.remove(id, type);
            this.openFavorite();
            this.updateFavoriteCountBadge();
        }
    }

    removeHistoryRecord(id) {
        if (confirm('确定要删除此记录吗？')) {
            this.history.remove(id);
            this.openHistory();
            this.updateHistoryCountBadge();
        }
    }

    clearWrongBook() {
        if (confirm('确定要清空错题本吗？此操作不可恢复！')) {
            this.wrongBook.clear();
            this.openWrongBook();
            this.updateWrongCountBadge();
        }
    }

    clearFavorite() {
        if (confirm('确定要清空收藏夹吗？此操作不可恢复！')) {
            this.favorites.clear();
            this.openFavorite();
            this.updateFavoriteCountBadge();
        }
    }

    clearHistory() {
        if (confirm('确定要清空历史记录吗？此操作不可恢复！')) {
            this.history.clear();
            this.openHistory();
            this.updateHistoryCountBadge();
        }
    }

    toggleCurrentQuestionFavorite() {
        const question = this.engine.getCurrentQuestion();
        const isFavorited = this.favorites.toggle(question);
        this.ui.renderQuestionFavoriteButton(!isFavorited);
        this.updateFavoriteCountBadge();
    }

    displayQuestion() {
        const question = this.engine.getCurrentQuestion();
        const progress = this.engine.getProgress();
        const score = this.engine.getScore();

        if (this.isMixedQuizMode) {
            this.ui.renderQuestionWithTypeIndicator(question, progress.current);
        } else {
            this.ui.renderQuestion(question, progress.current);
        }
        this.ui.updateProgress(progress, score);
        
        const isFavorited = this.favorites.has(question.id, question.type);
        this.ui.renderQuestionFavoriteButton(isFavorited);
        this.ui.bindQuestionFavoriteButton(() => this.toggleCurrentQuestionFavorite());
        
        this.clearOptionSelections();
    }

    handleOptionClick(optionEl, value) {
        const question = this.engine.getCurrentQuestion();
        let selected = false;

        if (question.type === 'multi') {
            selected = this.engine.toggleAnswer(value);
            if (selected) {
                optionEl.classList.toggle('selected');
            }
        } else {
            selected = this.engine.selectAnswer(value);
            if (selected) {
                this.clearOptionSelections();
                optionEl.classList.add('selected');
            }
        }

        if (selected) {
            this.ui.setSubmitButtonState(this.engine.hasSelectedAnswer());
        }
    }

    clearOptionSelections() {
        this.ui.optionsEl.querySelectorAll('.option').forEach(el => {
            el.classList.remove('selected');
        });
    }

    submitAnswer() {
        const result = this.engine.submitAnswer();
        if (!result) return;

        const question = this.engine.getCurrentQuestion();

        if (!result.isCorrect && !this.isWrongQuizMode && !this.isFavoriteQuizMode && !this.isMixedQuizMode) {
            this.wrongBook.add(question);
            this.updateWrongCountBadge();
        }

        if (this.quizMode === 'practice') {
            this.ui.showFeedback(result.isCorrect, result.correctAnswer, result.analysis);
            this.ui.highlightAnswers(result.correctAnswer, this.engine.selectedAnswers);
            this.ui.showNextButton(this.engine.isLastQuestion());
        } else {
            if (this.engine.isLastQuestion()) {
                this.stopTimer();
                this.progressSaver.stopAutoSave();
                this.progressSaver.clear();
                this.isInQuiz = false;
                this.saveHistory();
                this.showResult();
            } else {
                this.nextQuestion();
            }
        }

        this.updateScoreDisplay();
    }

    updateScoreDisplay() {
        const progress = this.engine.getProgress();
        const score = this.engine.getScore();
        this.ui.updateProgress(progress, score);
    }

    nextQuestion() {
        const hasMore = this.engine.nextQuestion();

        if (!hasMore) {
            this.stopTimer();
            this.progressSaver.stopAutoSave();
            this.progressSaver.clear();
            this.isInQuiz = false;
            this.ui.progressFillEl.style.width = '100%';
            this.saveHistory();
            this.showResult();
            return;
        }

        this.displayQuestion();
    }

    saveHistory() {
        const scoreData = this.engine.getScore();
        this.history.add({
            type: this.engine.currentType || this.currentType,
            score: scoreData.score,
            correct: scoreData.correct,
            wrong: scoreData.wrong,
            total: this.engine.questions.length,
            accuracy: scoreData.accuracy
        });
        this.updateHistoryCountBadge();
    }

    showResult() {
        const scoreData = this.engine.getScore();
        this.ui.updateResult(scoreData);
        this.ui.showResult();
    }

    exportData() {
        try {
            const fileName = this.dataIO.exportToFile();
            alert(`数据已成功导出为: ${fileName}`);
        } catch (error) {
            alert('导出失败: ' + error.message);
            console.error('导出失败:', error);
        }
    }

    async importData(file) {
        try {
            this.ui.showImportModal();
            const result = await this.dataIO.importFromFile(file);
            const summary = this.dataIO.getExportSummary(result.data);
            this.ui.showImportSuccess(summary);
        } catch (error) {
            this.ui.showImportError(error.message);
            console.error('导入失败:', error);
        }
    }

    clearAllData() {
        if (!confirm('确定要清空所有数据吗？\n\n此操作将删除：\n- 错题本\n- 收藏夹\n- 历史记录\n- 答题进度\n- 用户设置\n\n此操作不可恢复！')) {
            return;
        }

        try {
            this.dataIO.clearAllData();
            alert('所有数据已清空！\n\n页面将刷新以应用更改。');
            location.reload();
        } catch (error) {
            alert('清空数据失败: ' + error.message);
            console.error('清空数据失败:', error);
        }
    }

    openStatistics() {
        const overview = this.statistics.getOverview();
        const performanceLevel = this.statistics.getPerformanceLevel();
        const typePerformance = this.statistics.getPerformanceByType();
        const recommendations = this.statistics.getRecommendations();

        this.ui.renderStatistics({
            overview,
            performanceLevel,
            typePerformance,
            recommendations
        });

        this.ui.showStatisticsModal();
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await CONFIG.load();
    const app = new QuizApp();
    await app.loadAllQuestions();
    app.loadStats();
    
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
});
