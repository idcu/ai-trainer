class DataIO {
    constructor() {
        this.FILE_PREFIX = 'ai-trainer-data';
        this.VERSION = '1.0';
    }

    exportData() {
        const data = {
            version: this.VERSION,
            exportedAt: new Date().toISOString(),
            wrongBook: Storage.get('wrong_book', []),
            favorites: Storage.get('favorites', []),
            history: Storage.get('quiz_history', []),
            config: {
                questionCount: Storage.get('question_count', 20),
                quizMode: Storage.get('quiz_mode', 'practice'),
                examTimeLimit: Storage.get('exam_time_limit', 30)
            }
        };

        return data;
    }

    exportToFile() {
        const data = this.exportData();
        const dateStr = new Date().toISOString().slice(0, 10);
        const fileName = `${this.FILE_PREFIX}-${dateStr}.json`;
        const content = JSON.stringify(data, null, 2);

        this.downloadFile(fileName, content, 'application/json');
        return fileName;
    }

    downloadFile(fileName, content, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    validateData(data) {
        if (!data || typeof data !== 'object') {
            return { valid: false, error: '无效的数据格式' };
        }

        if (!data.version || !data.exportedAt) {
            return { valid: false, error: '缺少必要字段' };
        }

        return { valid: true };
    }

    importData(data) {
        const validation = this.validateData(data);
        if (!validation.valid) {
            throw new Error(validation.error);
        }

        let importedCount = 0;

        if (data.wrongBook && Array.isArray(data.wrongBook)) {
            Storage.set('wrong_book', data.wrongBook);
            importedCount += data.wrongBook.length;
        }

        if (data.favorites && Array.isArray(data.favorites)) {
            Storage.set('favorites', data.favorites);
            importedCount += data.favorites.length;
        }

        if (data.history && Array.isArray(data.history)) {
            Storage.set('quiz_history', data.history);
            importedCount += data.history.length;
        }

        if (data.config) {
            if (data.config.questionCount) {
                Storage.set('question_count', data.config.questionCount);
            }
            if (data.config.quizMode) {
                Storage.set('quiz_mode', data.config.quizMode);
            }
            if (data.config.examTimeLimit) {
                Storage.set('exam_time_limit', data.config.examTimeLimit);
            }
        }

        return {
            success: true,
            importedCount,
            data: data
        };
    }

    async importFromFile(file) {
        return new Promise((resolve, reject) => {
            if (!file) {
                reject(new Error('请选择文件'));
                return;
            }

            if (!file.name.endsWith('.json')) {
                reject(new Error('请选择 JSON 文件'));
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    const result = this.importData(data);
                    resolve(result);
                } catch (error) {
                    reject(new Error('JSON 解析失败: ' + error.message));
                }
            };
            reader.onerror = () => {
                reject(new Error('文件读取失败'));
            };
            reader.readAsText(file);
        });
    }

    getExportSummary(data) {
        return {
            wrongBookCount: (data.wrongBook || []).length,
            favoritesCount: (data.favorites || []).length,
            historyCount: (data.history || []).length,
            exportedAt: data.exportedAt
        };
    }

    clearAllData() {
        Storage.remove('wrong_book');
        Storage.remove('favorites');
        Storage.remove('quiz_history');
        Storage.remove('quiz_progress');
        Storage.remove('question_count');
        Storage.remove('quiz_mode');
        Storage.remove('exam_time_limit');
    }
}
