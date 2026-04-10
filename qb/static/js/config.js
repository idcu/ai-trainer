const CONFIG = {
    DATA_SOURCE_TYPE: 'json',
    QUESTIONS_PER_QUIZ: 50,
    POINTS_PER_CORRECT: 10,
    API_BASE_URL: '',
    DATA_PATHS: {
        judge: 'static/data/judge.json',
        single: 'static/data/single.json',
        multi: 'static/data/multi.json'
    },
    _loaded: false,
    _loadPromise: null,

    async load(configPath = 'config.json') {
        if (this._loaded) return this;
        if (this._loadPromise) return this._loadPromise;

        this._loadPromise = (async () => {
            try {
                const response = await fetch(configPath);
                if (response.ok) {
                    const configData = await response.json();
                    if (configData.frontend) {
                        this.DATA_SOURCE_TYPE = configData.frontend.data_source_type || this.DATA_SOURCE_TYPE;
                        this.QUESTIONS_PER_QUIZ = configData.frontend.questions_per_quiz || this.QUESTIONS_PER_QUIZ;
                        this.POINTS_PER_CORRECT = configData.frontend.points_per_correct || this.POINTS_PER_CORRECT;
                        this.API_BASE_URL = configData.frontend.api_base_url || this.API_BASE_URL;
                        if (configData.frontend.data_paths) {
                            this.DATA_PATHS = { ...this.DATA_PATHS, ...configData.frontend.data_paths };
                        }
                    }
                }
            } catch (error) {
                console.log('使用默认配置:', error.message);
            }
            this._loaded = true;
            return this;
        })();

        return this._loadPromise;
    }
};
