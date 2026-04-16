class UIRenderer {
    constructor() {
        this.initElements();
        this.elementCache = new Map();
        this.pendingUpdates = [];
        this.animationFrameId = null;
    }

    getCachedElement(selector) {
        if (!this.elementCache.has(selector)) {
            this.elementCache.set(selector, document.querySelector(selector));
        }
        return this.elementCache.get(selector);
    }

    getCachedElements(selector) {
        const cacheKey = `all_${selector}`;
        if (!this.elementCache.has(cacheKey)) {
            this.elementCache.set(cacheKey, document.querySelectorAll(selector));
        }
        return this.elementCache.get(cacheKey);
    }

    clearElementCache() {
        this.elementCache.clear();
    }

    requestFrameUpdate(callback) {
        this.pendingUpdates.push(callback);
        if (!this.animationFrameId) {
            this.animationFrameId = requestAnimationFrame(() => this.processPendingUpdates());
        }
    }

    processPendingUpdates() {
        const updates = [...this.pendingUpdates];
        this.pendingUpdates = [];
        this.animationFrameId = null;
        updates.forEach(callback => callback());
    }

    initElements() {
        this.menuEl = document.getElementById('menu');
        this.quizEl = document.getElementById('quiz');
        this.resultEl = document.getElementById('result');

        this.currentQuestionEl = document.getElementById('current-question');
        this.totalQuestionsEl = document.getElementById('total-questions');
        this.correctCountDisplayEl = document.getElementById('correct-count-display');
        this.wrongCountDisplayEl = document.getElementById('wrong-count-display');
        this.progressFillEl = document.getElementById('progress-fill');

        this.questionEl = document.getElementById('question');
        this.optionsEl = document.getElementById('options');

        this.submitBtn = document.getElementById('submit-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.feedbackEl = document.getElementById('feedback');
        this.analysisEl = document.getElementById('analysis');

        this.finalScoreValueEl = document.getElementById('final-score-value');
        this.correctCountEl = document.getElementById('correct-count');
        this.wrongCountEl = document.getElementById('wrong-count');
        this.accuracyEl = document.getElementById('accuracy');

        this.questionCountInput = document.getElementById('question-count');
        this.totalJudgeEl = document.getElementById('total-judge');
        this.totalSingleEl = document.getElementById('total-single');
        this.totalMultiEl = document.getElementById('total-multi');
        
        this.timerSectionEl = document.getElementById('timer-section');
        this.timerDisplayEl = document.getElementById('timer-display');
        this.timeConfigEl = document.getElementById('time-config');
        
        this.searchInputEl = document.getElementById('search-input');
        this.searchResultsContainerEl = document.getElementById('search-results-container');
    }

    showMenu() {
        this.menuEl.classList.remove('hidden');
        this.quizEl.classList.add('hidden');
        this.resultEl.classList.add('hidden');
        document.getElementById('wrong-book-list').classList.add('hidden');
        document.getElementById('favorite-list').classList.add('hidden');
        document.getElementById('history-list').classList.add('hidden');
        document.getElementById('search-list').classList.add('hidden');
        document.getElementById('mixed-list').classList.add('hidden');
        
        this.menuEl.style.animation = 'fadeInUp 0.4s ease';
    }

    showQuiz() {
        this.menuEl.classList.add('hidden');
        this.quizEl.classList.remove('hidden');
        this.resultEl.classList.add('hidden');
        document.getElementById('wrong-book-list').classList.add('hidden');
        document.getElementById('favorite-list').classList.add('hidden');
        document.getElementById('history-list').classList.add('hidden');
        document.getElementById('search-list').classList.add('hidden');
        document.getElementById('mixed-list').classList.add('hidden');
        
        this.quizEl.style.animation = 'fadeInUp 0.4s ease';
    }

    showResult() {
        this.menuEl.classList.add('hidden');
        this.quizEl.classList.add('hidden');
        this.resultEl.classList.remove('hidden');
        document.getElementById('wrong-book-list').classList.add('hidden');
        document.getElementById('favorite-list').classList.add('hidden');
        document.getElementById('history-list').classList.add('hidden');
        document.getElementById('search-list').classList.add('hidden');
        document.getElementById('mixed-list').classList.add('hidden');
        
        this.resultEl.style.animation = 'fadeInUp 0.4s ease';
    }

    updateStats(stats) {
        this.totalJudgeEl.textContent = stats.judge || 0;
        this.totalSingleEl.textContent = stats.single || 0;
        this.totalMultiEl.textContent = stats.multi || 0;
        const totalFillEl = document.getElementById('total-fill');
        const totalEssayEl = document.getElementById('total-essay');
        if (totalFillEl) totalFillEl.textContent = stats.fill || 0;
        if (totalEssayEl) totalEssayEl.textContent = stats.essay || 0;
    }

    updateProgress(progress, score) {
        this.currentQuestionEl.textContent = progress.current;
        this.totalQuestionsEl.textContent = progress.total;
        this.correctCountDisplayEl.textContent = score.correct;
        this.wrongCountDisplayEl.textContent = score.wrong;
        this.progressFillEl.style.width = `${progress.percentage}%`;
    }

    updateResult(scoreData) {
        this.correctCountEl.textContent = scoreData.correct;
        this.wrongCountEl.textContent = scoreData.wrong;
        this.accuracyEl.textContent = scoreData.accuracy + '%';
    }

    getQuestionCount() {
        return parseInt(this.questionCountInput.value) || CONFIG.QUESTIONS_PER_QUIZ;
    }

    renderQuestion(question, questionNumber) {
        this.questionEl.textContent = `${questionNumber}. ${question.question}`;
        this.renderOptions(question);
        this.resetQuestionUI();
    }

    renderOptions(question) {
        this.optionsEl.innerHTML = '';

        if (question.type === 'judge') {
            this.renderJudgeOptions();
        } else if (question.type === 'single') {
            this.renderSingleOptions(question.options);
        } else if (question.type === 'multi') {
            this.renderMultiOptions(question.options);
        } else if (question.type === 'fill') {
            this.renderFillOptions(question);
        } else if (question.type === 'essay') {
            this.renderEssayOptions(question);
        }
    }

    renderJudgeOptions() {
        const options = [
            { letter: '对', text: '正确', value: '正确' },
            { letter: '错', text: '错误', value: '错误' }
        ];

        const fragment = document.createDocumentFragment();
        options.forEach(opt => {
            const optionEl = this.createOptionElement(opt.letter, opt.text, opt.value);
            fragment.appendChild(optionEl);
        });
        this.optionsEl.appendChild(fragment);
    }

    renderSingleOptions(options) {
        const fragment = document.createDocumentFragment();
        options.forEach(opt => {
            const optionEl = this.createOptionElement(opt.letter, opt.text, opt.letter);
            fragment.appendChild(optionEl);
        });
        this.optionsEl.appendChild(fragment);
    }

    renderMultiOptions(options) {
        const fragment = document.createDocumentFragment();
        options.forEach(opt => {
            const optionEl = this.createOptionElement(opt.letter, opt.text, opt.letter);
            fragment.appendChild(optionEl);
        });
        this.optionsEl.appendChild(fragment);
    }

    createOptionElement(letter, text, value) {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.dataset.value = value;
        optionEl.innerHTML = `
            <span class="option-letter">${letter}</span>
            <span class="option-text">${text}</span>
        `;
        return optionEl;
    }

    resetQuestionUI() {
        this.feedbackEl.classList.add('hidden');
        this.feedbackEl.className = 'feedback hidden';
        this.analysisEl.classList.add('hidden');
        this.analysisEl.className = 'analysis hidden';

        this.submitBtn.classList.remove('hidden');
        this.submitBtn.disabled = true;
        this.nextBtn.classList.add('hidden');
        this.nextBtn.textContent = '下一题';
    }

    showFeedback(isCorrect, correctAnswer, analysis) {
        this.feedbackEl.classList.remove('hidden');
        if (isCorrect === null) {
            // 简答题情况
            this.feedbackEl.classList.add('correct');
            this.feedbackEl.textContent = '📝 参考答案已显示';
        } else if (isCorrect) {
            this.feedbackEl.classList.add('correct');
            this.feedbackEl.textContent = '✓ 回答正确！';
        } else {
            this.feedbackEl.classList.add('wrong');
            this.feedbackEl.textContent = `✗ 回答错误！正确答案：${correctAnswer}`;
        }

        if (analysis) {
            this.analysisEl.classList.remove('hidden');
            this.analysisEl.innerHTML = `
                <div class="analysis-title">📖 答案解析</div>
                <div class="analysis-content">${analysis}</div>
            `;
        }
    }

    highlightAnswers(correctAnswer, selectedAnswers) {
        const correctSet = new Set();
        if (correctAnswer === '正确' || correctAnswer === '错误') {
            correctSet.add(correctAnswer);
        } else {
            correctAnswer.split('').forEach(c => correctSet.add(c));
        }

        this.optionsEl.querySelectorAll('.option').forEach(el => {
            el.classList.add('disabled');
            const value = el.dataset.value;

            if (correctSet.has(value)) {
                el.classList.add('correct');
            } else if (selectedAnswers.has(value)) {
                el.classList.add('wrong');
            }
        });
    }

    setSubmitButtonState(enabled) {
        this.submitBtn.disabled = !enabled;
    }

    showNextButton(isLastQuestion) {
        this.submitBtn.classList.add('hidden');
        this.nextBtn.classList.remove('hidden');
        if (isLastQuestion) {
            this.nextBtn.textContent = '查看结果';
        }
    }

    bindOptionClick(callback) {
        this.optionsEl.addEventListener('click', (e) => {
            const optionEl = e.target.closest('.option');
            if (optionEl) {
                callback(optionEl, optionEl.dataset.value);
            }
        });
    }

    bindTypeButtons(callback) {
        document.querySelectorAll('.type-btn').forEach(btn => {
            btn.addEventListener('click', () => callback(btn.dataset.type));
        });
    }

    bindActionButtons(callbacks) {
        document.getElementById('back-btn').addEventListener('click', callbacks.onBack);
        document.getElementById('retry-btn').addEventListener('click', callbacks.onRetry);
        document.getElementById('menu-btn').addEventListener('click', callbacks.onMenu);
        this.submitBtn.addEventListener('click', callbacks.onSubmit);
        this.nextBtn.addEventListener('click', callbacks.onNext);
    }

    showWrongBookList() {
        this.menuEl.classList.add('hidden');
        this.quizEl.classList.add('hidden');
        this.resultEl.classList.add('hidden');
        document.getElementById('wrong-book-list').classList.remove('hidden');
    }

    updateWrongCountBadge(count) {
        const badge = document.getElementById('wrong-count-badge');
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }

    updateWrongBookStats(total) {
        document.getElementById('wrong-total').textContent = total;
    }

    renderWrongQuestions(wrongQuestions) {
        const container = document.getElementById('wrong-questions-container');
        container.innerHTML = '';

        if (wrongQuestions.length === 0) {
            container.innerHTML = '<p style="color: #666; text-align: center; padding: 40px;">暂无错题</p>';
            return;
        }

        const typeNames = {
            'judge': '判断题',
            'single': '单选题',
            'multi': '多选题'
        };

        const fragment = document.createDocumentFragment();
        wrongQuestions.forEach((item, index) => {
            const q = item.question;
            const div = document.createElement('div');
            div.className = 'wrong-question-item';
            
            div.innerHTML = `
                <div class="wrong-question-header">
                    <span class="wrong-question-type ${q.type}">${typeNames[q.type]}</span>
                    <span class="wrong-question-meta">
                        错误 ${item.wrongCount} 次 · ${Helpers.formatDate(item.wrongAt)}
                    </span>
                </div>
                <div class="wrong-question-text">${index + 1}. ${q.question}</div>
                <div class="wrong-question-answer">
                    <strong>正确答案：</strong>${q.answer}
                    ${q.analysis ? `<br><br><strong>解析：</strong>${q.analysis}` : ''}
                </div>
                <button class="remove-wrong-btn" data-id="${q.id}" data-type="${q.type}">移除错题</button>
            `;
            
            fragment.appendChild(div);
        });
        
        container.appendChild(fragment);
    }

    bindWrongBookButtons(callbacks) {
        document.getElementById('wrong-book-btn').addEventListener('click', callbacks.onOpenWrongBook);
        document.getElementById('back-from-wrong-btn').addEventListener('click', callbacks.onBackFromWrongBook);
        document.getElementById('start-wrong-quiz-btn').addEventListener('click', callbacks.onStartWrongQuiz);
        document.getElementById('clear-wrong-btn').addEventListener('click', callbacks.onClearWrongBook);
        
        document.getElementById('wrong-questions-container').addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-wrong-btn');
            if (removeBtn) {
                callbacks.onRemoveWrongQuestion(
                    parseInt(removeBtn.dataset.id),
                    removeBtn.dataset.type
                );
            }
        });
    }

    showFavoriteList() {
        this.menuEl.classList.add('hidden');
        this.quizEl.classList.add('hidden');
        this.resultEl.classList.add('hidden');
        document.getElementById('wrong-book-list').classList.add('hidden');
        document.getElementById('favorite-list').classList.remove('hidden');
    }

    updateFavoriteCountBadge(count) {
        const badge = document.getElementById('favorite-count-badge');
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }

    updateFavoriteStats(total) {
        document.getElementById('favorite-total').textContent = total;
    }

    renderFavoriteQuestions(favoriteQuestions) {
        const container = document.getElementById('favorite-questions-container');
        container.innerHTML = '';

        if (favoriteQuestions.length === 0) {
            container.innerHTML = '<p style="color: #666; text-align: center; padding: 40px;">暂无收藏</p>';
            return;
        }

        const typeNames = {
            'judge': '判断题',
            'single': '单选题',
            'multi': '多选题'
        };

        const fragment = document.createDocumentFragment();
        favoriteQuestions.forEach((item, index) => {
            const q = item.question;
            const div = document.createElement('div');
            div.className = 'favorite-question-item';
            
            div.innerHTML = `
                <div class="favorite-question-header">
                    <span class="favorite-question-type ${q.type}">${typeNames[q.type]}</span>
                    <span class="favorite-question-meta">
                        收藏于 ${Helpers.formatDate(item.addedAt)}
                    </span>
                </div>
                <div class="favorite-question-text">${index + 1}. ${q.question}</div>
                <div class="favorite-question-answer">
                    <strong>答案：</strong>${q.answer}
                    ${q.analysis ? `<br><br><strong>解析：</strong>${q.analysis}` : ''}
                </div>
                <button class="remove-favorite-btn" data-id="${q.id}" data-type="${q.type}">取消收藏</button>
            `;
            
            fragment.appendChild(div);
        });
        
        container.appendChild(fragment);
    }

    bindFavoriteButtons(callbacks) {
        document.getElementById('favorite-btn').addEventListener('click', callbacks.onOpenFavorite);
        document.getElementById('back-from-favorite-btn').addEventListener('click', callbacks.onBackFromFavorite);
        document.getElementById('start-favorite-quiz-btn').addEventListener('click', callbacks.onStartFavoriteQuiz);
        document.getElementById('clear-favorite-btn').addEventListener('click', callbacks.onClearFavorite);
        
        document.getElementById('favorite-questions-container').addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-favorite-btn');
            if (removeBtn) {
                callbacks.onRemoveFavoriteQuestion(
                    parseInt(removeBtn.dataset.id),
                    removeBtn.dataset.type
                );
            }
        });
    }

    renderQuestionFavoriteButton(isFavorited) {
        const favoriteBtn = document.getElementById('question-favorite-btn');
        if (favoriteBtn) {
            favoriteBtn.textContent = isFavorited ? '❤️' : '🤍';
            favoriteBtn.classList.toggle('favorited', isFavorited);
        }
    }

    bindQuestionFavoriteButton(callback) {
        const favoriteBtn = document.getElementById('question-favorite-btn');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', callback);
        }
    }

    renderResultWrongQuestions(wrongQuestions) {
        const section = document.getElementById('wrong-questions-section');
        const container = document.getElementById('wrong-questions-container-result');

        if (wrongQuestions.length === 0) {
            section.classList.add('hidden');
            return;
        }

        section.classList.remove('hidden');
        container.innerHTML = '';

        const typeNames = {
            'judge': '判断题',
            'single': '单选题',
            'multi': '多选题'
        };

        const fragment = document.createDocumentFragment();
        wrongQuestions.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'wrong-question-item-result';

            div.innerHTML = `
                <div class="wrong-question-header-result">
                    <span class="wrong-question-type-result ${item.type}">${typeNames[item.type]}</span>
                </div>
                <div class="wrong-question-text-result">${index + 1}. ${item.question}</div>
                <div class="wrong-question-answer-result">
                    <strong>正确答案：</strong>${item.answer}
                    ${item.analysis ? `<br><br><strong>解析：</strong>${item.analysis}` : ''}
                </div>
            `;

            fragment.appendChild(div);
        });

        container.appendChild(fragment);
    }

    showHistoryList() {
        this.menuEl.classList.add('hidden');
        this.quizEl.classList.add('hidden');
        this.resultEl.classList.add('hidden');
        document.getElementById('wrong-book-list').classList.add('hidden');
        document.getElementById('favorite-list').classList.add('hidden');
        document.getElementById('history-list').classList.remove('hidden');
    }

    updateHistoryCountBadge(count) {
        const badge = document.getElementById('history-count-badge');
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }

    updateHistoryStats(stats) {
        document.getElementById('history-total-quizzes').textContent = stats.totalQuizzes;
        document.getElementById('history-average-score').textContent = stats.averageScore;
        document.getElementById('history-average-accuracy').textContent = stats.averageAccuracy + '%';
        document.getElementById('history-best-score').textContent = stats.bestScore;
    }

    renderHistoryRecords(historyRecords) {
        const container = document.getElementById('history-records-container');
        container.innerHTML = '';

        if (historyRecords.length === 0) {
            container.innerHTML = `
                <div class="empty-history">
                    <div class="empty-history-icon">📊</div>
                    <div class="empty-history-text">暂无答题记录</div>
                </div>
            `;
            return;
        }

        const typeNames = {
            'judge': '判断题',
            'single': '单选题',
            'multi': '多选题',
            'wrong': '错题练习',
            'favorite': '收藏练习'
        };

        const fragment = document.createDocumentFragment();
        historyRecords.forEach((record, index) => {
            const div = document.createElement('div');
            div.className = 'history-record-item';
            
            div.innerHTML = `
                <button class="remove-history-btn" data-id="${record.id}">删除</button>
                <div class="history-record-header">
                    <span class="history-record-type ${record.type}">${typeNames[record.type] || record.type}</span>
                    <span class="history-record-date">${Helpers.formatDate(record.completedAt)}</span>
                </div>
                <div class="history-record-stats">
                    <div class="history-record-stat">
                        <div class="history-record-stat-value score">${record.score}</div>
                        <div class="history-record-stat-label">得分</div>
                    </div>
                    <div class="history-record-stat">
                        <div class="history-record-stat-value correct">${record.correct}</div>
                        <div class="history-record-stat-label">正确</div>
                    </div>
                    <div class="history-record-stat">
                        <div class="history-record-stat-value wrong">${record.wrong}</div>
                        <div class="history-record-stat-label">错误</div>
                    </div>
                    <div class="history-record-stat">
                        <div class="history-record-stat-value accuracy">${record.accuracy}%</div>
                        <div class="history-record-stat-label">正确率</div>
                    </div>
                </div>
            `;
            
            fragment.appendChild(div);
        });
        
        container.appendChild(fragment);
    }

    bindHistoryButtons(callbacks) {
        document.getElementById('history-btn').addEventListener('click', callbacks.onOpenHistory);
        document.getElementById('back-from-history-btn').addEventListener('click', callbacks.onBackFromHistory);
        document.getElementById('clear-history-btn').addEventListener('click', callbacks.onClearHistory);
        
        document.getElementById('history-records-container').addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-history-btn');
            if (removeBtn) {
                callbacks.onRemoveHistoryRecord(parseInt(removeBtn.dataset.id));
            }
        });
    }

    updateModeSelection(mode) {
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });
        
        if (mode === 'exam') {
            this.timeConfigEl?.classList.remove('hidden');
        } else {
            this.timeConfigEl?.classList.add('hidden');
        }
    }

    updateTimeSelection(minutes) {
        document.querySelectorAll('.time-option').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.minutes) === minutes);
        });
    }

    showTimer() {
        this.timerSectionEl?.classList.remove('hidden');
    }

    hideTimer() {
        this.timerSectionEl?.classList.add('hidden');
    }

    updateTimerDisplay(seconds) {
        if (!this.timerDisplayEl) return;
        
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        this.timerDisplayEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        
        if (seconds <= 60) {
            this.timerDisplayEl.classList.add('warning');
        } else {
            this.timerDisplayEl.classList.remove('warning');
        }
    }

    setFeedbackVisibility(visible) {
        if (visible) {
            this.feedbackEl.classList.remove('hidden');
            this.analysisEl.classList.remove('hidden');
        } else {
            this.feedbackEl.classList.add('hidden');
            this.analysisEl.classList.add('hidden');
        }
    }

    setSubmitButtonText(text) {
        this.submitBtn.textContent = text;
    }

    setNextButtonText(text) {
        this.nextBtn.textContent = text;
    }

    addQuizModeBadge(mode) {
        const quizHeader = document.querySelector('.quiz-header');
        if (!quizHeader) return;
        
        let badge = document.querySelector('.quiz-mode-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'quiz-mode-badge';
            quizHeader.insertBefore(badge, quizHeader.firstChild);
        }
        
        badge.className = `quiz-mode-badge ${mode}`;
        badge.textContent = mode === 'practice' ? '📝 练习模式' : '⏱️ 考试模式';
    }

    showModeToast(message) {
        const existingToast = document.querySelector('.mode-info-toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        const toast = document.createElement('div');
        toast.className = 'mode-info-toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    bindModeButtons(callback) {
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => callback(btn.dataset.mode));
        });
    }

    bindTimeButtons(callback) {
        document.querySelectorAll('.time-option').forEach(btn => {
            btn.addEventListener('click', () => callback(parseInt(btn.dataset.minutes)));
        });
    }

    showSearchList() {
        this.menuEl.classList.add('hidden');
        this.quizEl.classList.add('hidden');
        this.resultEl.classList.add('hidden');
        document.getElementById('wrong-book-list').classList.add('hidden');
        document.getElementById('favorite-list').classList.add('hidden');
        document.getElementById('history-list').classList.add('hidden');
        document.getElementById('search-list').classList.remove('hidden');
    }

    updateFilterSelection(filter) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
    }

    renderSearchResults(results, searchKeyword, searchFilter) {
        const container = document.getElementById('search-results-container');
        const titleEl = document.getElementById('search-results-title');
        const countEl = document.getElementById('search-results-count');
        
        const typeNames = {
            'judge': '判断题',
            'single': '单选题',
            'multi': '多选题'
        };

        if (results.length === 0) {
            titleEl.textContent = '搜索结果';
            countEl.textContent = '';
            container.innerHTML = `
                <div class="empty-search">
                    <div class="empty-search-icon">🔍</div>
                    <div class="empty-search-text">未找到匹配的题目</div>
                    <div class="empty-search-hint">试试其他关键词或调整筛选条件</div>
                </div>
            `;
            return;
        }

        let filterText = searchFilter === 'all' ? '全部题型' : typeNames[searchFilter];
        titleEl.textContent = searchKeyword ? `搜索: "${searchKeyword}"` : filterText;
        countEl.textContent = `共 ${results.length} 道题目`;

        container.innerHTML = '';
        
        const fragment = document.createDocumentFragment();
        results.forEach((question, index) => {
            const div = document.createElement('div');
            div.className = 'search-question-item';
            
            const displayText = searchKeyword 
                ? this.highlightText(question.question, searchKeyword)
                : question.question;
            
            div.innerHTML = `
                <div class="search-question-header">
                    <span class="search-question-type ${question.type}">${typeNames[question.type]}</span>
                    <span class="search-question-meta">ID: ${question.id}</span>
                </div>
                <div class="search-question-text">${index + 1}. ${displayText}</div>
                <div class="search-question-actions">
                    <button class="search-question-btn secondary" data-action="view" data-id="${question.id}" data-type="${question.type}">查看答案</button>
                    <button class="search-question-btn primary" data-action="practice" data-id="${question.id}" data-type="${question.type}">开始练习</button>
                </div>
            `;
            
            fragment.appendChild(div);
        });
        
        container.appendChild(fragment);
    }

    highlightText(text, keyword) {
        if (!keyword) return text;
        
        const regex = new RegExp(`(${this.escapeRegex(keyword)})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    bindSearchButtons(callbacks) {
        document.getElementById('search-btn').addEventListener('click', callbacks.onOpenSearch);
        document.getElementById('back-from-search-btn').addEventListener('click', callbacks.onBackFromSearch);
        
        document.getElementById('search-input').addEventListener('input', Helpers.debounce((e) => {
            callbacks.onSearchInput(e.target.value);
        }, 300));
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => callbacks.onFilterChange(btn.dataset.filter));
        });
        
        document.getElementById('search-results-container').addEventListener('click', (e) => {
            const btn = e.target.closest('.search-question-btn');
            if (btn) {
                const action = btn.dataset.action;
                const id = parseInt(btn.dataset.id);
                const type = btn.dataset.type;
                
                if (action === 'view') {
                    callbacks.onViewAnswer(id, type);
                } else if (action === 'practice') {
                    callbacks.onPracticeFrom(id, type);
                }
            }
        });
    }

    showMixedList() {
        this.menuEl.classList.add('hidden');
        this.quizEl.classList.add('hidden');
        this.resultEl.classList.add('hidden');
        document.getElementById('wrong-book-list').classList.add('hidden');
        document.getElementById('favorite-list').classList.add('hidden');
        document.getElementById('history-list').classList.add('hidden');
        document.getElementById('search-list').classList.add('hidden');
        document.getElementById('mixed-list').classList.remove('hidden');
    }

    updateMixedTypeSelection(types) {
        document.querySelectorAll('.mixed-type-option').forEach(option => {
            const type = option.dataset.type;
            option.classList.toggle('active', types.includes(type));
            const checkbox = option.querySelector('.mixed-type-checkbox');
            if (checkbox) {
                checkbox.checked = types.includes(type);
            }
        });
    }

    getMixedQuestionCount() {
        const input = document.getElementById('mixed-question-count');
        return input ? parseInt(input.value) || 50 : 50;
    }

    setMixedQuestionCount(count) {
        const input = document.getElementById('mixed-question-count');
        if (input) {
            input.value = count;
        }
    }

    renderQuestionWithTypeIndicator(question, currentNum) {
        this.renderQuestion(question, currentNum);
        
        const questionContainer = document.querySelector('.question-container');
        if (!questionContainer) return;
        
        let indicator = document.querySelector('.question-type-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'question-type-indicator';
            const questionEl = document.getElementById('question');
            if (questionEl && questionEl.parentNode) {
                questionEl.parentNode.insertBefore(indicator, questionEl);
            }
        }
        
        const typeNames = {
            'judge': '判断题',
            'single': '单选题',
            'multi': '多选题'
        };
        
        indicator.textContent = typeNames[question.type] || question.type;
        indicator.className = `question-type-indicator ${question.type}`;
    }

    bindMixedButtons(callbacks) {
        document.getElementById('mixed-mode-btn').addEventListener('click', callbacks.onOpenMixed);
        document.getElementById('back-from-mixed-btn').addEventListener('click', callbacks.onBackFromMixed);
        document.getElementById('start-mixed-quiz-btn').addEventListener('click', callbacks.onStartMixedQuiz);
        
        document.querySelectorAll('.mixed-type-option').forEach(option => {
            option.addEventListener('click', () => {
                const type = option.dataset.type;
                callbacks.onTypeToggle(type);
            });
        });
    }

    showProgressPrompt(ageText) {
        const prompt = document.getElementById('progress-prompt');
        const timeEl = document.getElementById('progress-prompt-time');
        if (timeEl) {
            timeEl.textContent = ageText;
        }
        if (prompt) {
            prompt.classList.remove('hidden');
        }
    }

    hideProgressPrompt() {
        const prompt = document.getElementById('progress-prompt');
        if (prompt) {
            prompt.classList.add('hidden');
        }
    }

    showSavingIndicator() {
        const indicator = document.getElementById('saving-indicator');
        if (indicator) {
            indicator.classList.remove('hidden');
            indicator.innerHTML = '<span class="saving-spinner"></span><span>保存中...</span>';
        }
    }

    showSavedIndicator() {
        const indicator = document.getElementById('saving-indicator');
        if (indicator) {
            indicator.innerHTML = '<span class="saving-check">✓</span><span>已保存</span>';
            setTimeout(() => {
                this.hideSavingIndicator();
            }, 2000);
        }
    }

    hideSavingIndicator() {
        const indicator = document.getElementById('saving-indicator');
        if (indicator) {
            indicator.classList.add('hidden');
        }
    }

    bindProgressButtons(callbacks) {
        const restoreBtn = document.getElementById('restore-progress-btn');
        const newQuizBtn = document.getElementById('new-quiz-btn');
        
        if (restoreBtn) {
            restoreBtn.addEventListener('click', callbacks.onRestoreProgress);
        }
        if (newQuizBtn) {
            newQuizBtn.addEventListener('click', callbacks.onNewQuiz);
        }
    }

    showImportModal() {
        const modal = document.getElementById('import-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    hideImportModal() {
        const modal = document.getElementById('import-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    showImportSuccess(summary) {
        const modalContent = document.querySelector('.import-modal-card');
        if (!modalContent) return;
        
        modalContent.innerHTML = `
            <div class="import-modal-icon">✅</div>
            <div class="import-modal-title import-success">导入成功！</div>
            <div class="import-summary">
                <div class="import-summary-item">
                    <span class="import-summary-label">错题本</span>
                    <span class="import-summary-value">${summary.wrongBookCount} 条</span>
                </div>
                <div class="import-summary-item">
                    <span class="import-summary-label">收藏夹</span>
                    <span class="import-summary-value">${summary.favoritesCount} 条</span>
                </div>
                <div class="import-summary-item">
                    <span class="import-summary-label">历史记录</span>
                    <span class="import-summary-value">${summary.historyCount} 条</span>
                </div>
            </div>
            <button class="import-modal-btn primary" onclick="document.getElementById('import-modal').classList.add('hidden'); location.reload();">
                确定
            </button>
        `;
    }

    showImportError(error) {
        const modalContent = document.querySelector('.import-modal-card');
        if (!modalContent) return;
        
        modalContent.innerHTML = `
            <div class="import-modal-icon">❌</div>
            <div class="import-modal-title import-error">导入失败</div>
            <div class="import-modal-text">${error}</div>
            <div class="import-modal-buttons">
                <button class="import-modal-btn primary" onclick="location.reload();">重试</button>
                <button class="import-modal-btn secondary" onclick="document.getElementById('import-modal').classList.add('hidden');">取消</button>
            </div>
        `;
    }

    bindDataIOButtons(callbacks) {
        const exportBtn = document.getElementById('export-data-btn');
        const importBtn = document.getElementById('import-data-btn');
        const clearBtn = document.getElementById('clear-data-btn');
        const fileInput = document.getElementById('import-file-input');
        const dropZone = document.getElementById('import-drop-zone');
        const closeModalBtn = document.getElementById('close-import-modal-btn');
        
        if (exportBtn) {
            exportBtn.addEventListener('click', callbacks.onExport);
        }
        if (importBtn) {
            importBtn.addEventListener('click', () => {
                if (fileInput) fileInput.click();
            });
        }
        if (clearBtn) {
            clearBtn.addEventListener('click', callbacks.onClear);
        }
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                if (e.target.files && e.target.files[0]) {
                    callbacks.onImportFile(e.target.files[0]);
                }
            });
        }
        if (dropZone) {
            dropZone.addEventListener('click', () => {
                if (fileInput) fileInput.click();
            });
            
            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropZone.classList.add('dragover');
            });
            
            dropZone.addEventListener('dragleave', () => {
                dropZone.classList.remove('dragover');
            });
            
            dropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropZone.classList.remove('dragover');
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    callbacks.onImportFile(e.dataTransfer.files[0]);
                }
            });
        }
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', callbacks.onCloseImportModal);
        }
    }

    showStatisticsModal() {
        const modal = document.getElementById('statistics-modal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    hideStatisticsModal() {
        const modal = document.getElementById('statistics-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    renderStatistics(data) {
        const container = document.getElementById('statistics-body');
        if (!container) return;

        const { overview, performanceLevel, typePerformance, recommendations } = data;

        if (overview.totalTests === 0) {
            container.innerHTML = `
                <div class="empty-stats">
                    <div class="empty-stats-icon">📊</div>
                    <div class="empty-stats-text">还没有数据</div>
                    <div class="empty-stats-hint">开始答题后，这里会显示您的学习统计</div>
                </div>
            `;
            return;
        }

        let typePerformanceHTML = '';
        typePerformance.forEach(item => {
            let accuracyClass = 'medium';
            if (item.accuracy >= 75) accuracyClass = 'high';
            else if (item.accuracy < 60) accuracyClass = 'low';

            typePerformanceHTML += `
                <div class="type-performance-item">
                    <div class="type-performance-info">
                        <div class="type-performance-name">${item.name}</div>
                        <div class="type-performance-detail">${item.correct}/${item.total} 题</div>
                    </div>
                    <div class="type-performance-accuracy ${accuracyClass}">${item.accuracy}%</div>
                </div>
            `;
        });

        let recommendationsHTML = '';
        recommendations.forEach(rec => {
            recommendationsHTML += `
                <div class="recommendation-item ${rec.priority}">
                    <div class="recommendation-icon">${rec.icon}</div>
                    <div class="recommendation-content">
                        <div class="recommendation-title">${rec.title}</div>
                        <div class="recommendation-description">${rec.description}</div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="performance-card" style="border-color: ${performanceLevel.color}; border: 3px solid;">
                <div class="performance-icon">${performanceLevel.icon}</div>
                <div class="performance-title" style="color: ${performanceLevel.color};">${performanceLevel.title}</div>
                <div class="performance-description">${performanceLevel.description}</div>
                <div class="performance-accuracy" style="color: ${performanceLevel.color};">${performanceLevel.accuracy}%</div>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-card-value">${overview.totalTests}</div>
                    <div class="stat-card-label">总测试次数</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-value">${overview.totalQuestions}</div>
                    <div class="stat-card-label">总答题数</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-value">${overview.totalCorrect}</div>
                    <div class="stat-card-label">答对题数</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-value">${overview.avgScore}</div>
                    <div class="stat-card-label">平均得分</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-value">${overview.wrongBookCount}</div>
                    <div class="stat-card-label">错题数</div>
                </div>
                <div class="stat-card">
                    <div class="stat-card-value">${overview.favoritesCount}</div>
                    <div class="stat-card-label">收藏数</div>
                </div>
            </div>
            
            <div class="section-title">题型表现</div>
            <div class="type-performance-list">
                ${typePerformanceHTML}
            </div>
            
            <div class="section-title">学习建议</div>
            <div class="recommendations-list">
                ${recommendationsHTML}
            </div>
        `;
    }

    bindStatisticsButtons(callbacks) {
        const statsBtn = document.getElementById('statistics-btn');
        const closeBtn = document.getElementById('statistics-close-btn');
        
        if (statsBtn) {
            statsBtn.addEventListener('click', callbacks.onOpenStatistics);
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', callbacks.onCloseStatistics);
        }
    }

    renderFillOptions(question) {
        const fragment = document.createDocumentFragment();
        const blanks = question.blanks || [];
        
        blanks.forEach((blank, index) => {
            const inputContainer = document.createElement('div');
            inputContainer.className = 'fill-input-container';
            
            const label = document.createElement('div');
            label.className = 'fill-input-label';
            label.textContent = `第 ${index + 1} 空`;
            
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'fill-input';
            input.placeholder = blank.hint || '请输入答案';
            input.dataset.index = index;
            
            inputContainer.appendChild(label);
            inputContainer.appendChild(input);
            fragment.appendChild(inputContainer);
        });
        
        this.optionsEl.appendChild(fragment);
    }

    renderEssayOptions(question) {
        const fragment = document.createDocumentFragment();
        
        const textarea = document.createElement('textarea');
        textarea.className = 'essay-textarea';
        textarea.placeholder = '请在此输入您的答案...';
        
        fragment.appendChild(textarea);
        this.optionsEl.appendChild(fragment);
    }

    getFillAnswers() {
        const inputs = this.optionsEl.querySelectorAll('.fill-input');
        const answers = [];
        inputs.forEach(input => {
            answers[parseInt(input.dataset.index)] = input.value;
        });
        return answers;
    }

    getEssayAnswer() {
        const textarea = this.optionsEl.querySelector('.essay-textarea');
        return textarea ? textarea.value : '';
    }

    highlightFillAnswers(question, userAnswers) {
        const inputs = this.optionsEl.querySelectorAll('.fill-input');
        const blanks = question.blanks || [];
        
        inputs.forEach(input => {
            const index = parseInt(input.dataset.index);
            const correctAnswer = blanks[index]?.answer?.toLowerCase().trim();
            const userAnswer = (userAnswers[index] || '').toLowerCase().trim();
            
            input.disabled = true;
            input.classList.remove('correct', 'wrong');
            
            if (userAnswer === correctAnswer) {
                input.classList.add('correct');
            } else if (userAnswer) {
                input.classList.add('wrong');
            }
        });
    }
}
