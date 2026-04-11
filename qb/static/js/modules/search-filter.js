class SearchFilter {
    constructor() {
        this.currentFilter = 'all';
        this.searchKeyword = '';
    }

    setFilter(type) {
        this.currentFilter = type;
    }

    getFilter() {
        return this.currentFilter;
    }

    setKeyword(keyword) {
        this.searchKeyword = keyword.trim().toLowerCase();
    }

    getKeyword() {
        return this.searchKeyword;
    }

    searchAndFilter(questionsByType) {
        let results = [];
        
        const typesToSearch = this.currentFilter === 'all' 
            ? ['judge', 'single', 'multi'] 
            : [this.currentFilter];

        typesToSearch.forEach(type => {
            const questions = questionsByType[type] || [];
            questions.forEach(question => {
                if (this.matchesSearch(question)) {
                    results.push({
                        ...question,
                        type: type
                    });
                }
            });
        });

        return results;
    }

    matchesSearch(question) {
        if (!this.searchKeyword) {
            return true;
        }

        const searchText = `${question.question} ${question.answer} ${question.analysis || ''}`.toLowerCase();
        
        return searchText.includes(this.searchKeyword);
    }

    highlightText(text, keyword) {
        if (!keyword) {
            return text;
        }

        const regex = new RegExp(`(${this.escapeRegex(keyword)})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    reset() {
        this.currentFilter = 'all';
        this.searchKeyword = '';
    }
}
