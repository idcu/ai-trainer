class Statistics {
    constructor() {
        this.history = new History();
        this.wrongBook = new WrongBook();
        this.favorites = new Favorites();
    }

    getOverview() {
        const allHistory = this.history.getAll();
        
        let totalQuestions = 0;
        let totalCorrect = 0;
        let totalWrong = 0;
        let totalScore = 0;
        const typeStats = {
            judge: { total: 0, correct: 0, wrong: 0 },
            single: { total: 0, correct: 0, wrong: 0 },
            multi: { total: 0, correct: 0, wrong: 0 },
            wrong: { total: 0, correct: 0, wrong: 0 },
            favorite: { total: 0, correct: 0, wrong: 0 },
            mixed: { total: 0, correct: 0, wrong: 0 }
        };

        allHistory.forEach(record => {
            totalQuestions += record.total;
            totalCorrect += record.correct;
            totalWrong += record.wrong;
            totalScore += record.score;

            if (typeStats[record.type]) {
                typeStats[record.type].total += record.total;
                typeStats[record.type].correct += record.correct;
                typeStats[record.type].wrong += record.wrong;
            }
        });

        const avgScore = allHistory.length > 0 ? Math.round(totalScore / allHistory.length) : 0;
        const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

        return {
            totalTests: allHistory.length,
            totalQuestions,
            totalCorrect,
            totalWrong,
            totalScore,
            avgScore,
            overallAccuracy,
            typeStats,
            wrongBookCount: this.wrongBook.getCount(),
            favoritesCount: this.favorites.getCount()
        };
    }

    getRecentActivity(days = 7) {
        const allHistory = this.history.getAll();
        const now = new Date();
        const cutoff = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
        
        return allHistory.filter(record => 
            new Date(record.completedAt) >= cutoff
        );
    }

    getBestScore() {
        const allHistory = this.history.getAll();
        if (allHistory.length === 0) return null;
        
        return allHistory.reduce((best, current) => 
            current.score > best.score ? current : best
        );
    }

    getPerformanceByType() {
        const overview = this.getOverview();
        const typeNames = {
            'judge': '判断题',
            'single': '单选题',
            'multi': '多选题',
            'wrong': '错题练习',
            'favorite': '收藏练习',
            'mixed': '混合练习'
        };

        const performance = [];
        for (const [type, stats] of Object.entries(overview.typeStats)) {
            if (stats.total > 0) {
                const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                performance.push({
                    type,
                    name: typeNames[type] || type,
                    total: stats.total,
                    correct: stats.correct,
                    wrong: stats.wrong,
                    accuracy
                });
            }
        }

        return performance.sort((a, b) => b.accuracy - a.accuracy);
    }

    getPerformanceLevel() {
        const overview = this.getOverview();
        
        if (overview.totalTests === 0) {
            return {
                level: 'beginner',
                title: '初学者',
                description: '开始您的学习之旅吧！',
                color: '#6c757d',
                icon: '🌱'
            };
        }

        const accuracy = overview.overallAccuracy;
        let level, title, description, color, icon;

        if (accuracy >= 90) {
            level = 'expert';
            title = '专家';
            description = '太棒了！您已经掌握了知识！';
            color = '#28a745';
            icon = '🏆';
        } else if (accuracy >= 75) {
            level = 'advanced';
            title = '高级';
            description = '做得很好！继续保持！';
            color = '#17a2b8';
            icon = '⭐';
        } else if (accuracy >= 60) {
            level = 'intermediate';
            title = '中级';
            description = '有进步！多练习会更好！';
            color = '#ffc107';
            icon = '📚';
        } else {
            level = 'beginner';
            title = '初级';
            description = '继续努力！您会越来越好的！';
            color = '#dc3545';
            icon = '💪';
        }

        return {
            level,
            title,
            description,
            color,
            icon,
            accuracy
        };
    }

    getRecommendations() {
        const overview = this.getOverview();
        const performance = this.getPerformanceByType();
        const recommendations = [];

        if (overview.wrongBookCount > 0) {
            recommendations.push({
                type: 'review',
                title: '复习错题',
                description: `您有 ${overview.wrongBookCount} 道错题需要复习`,
                icon: '📝',
                priority: 'high'
            });
        }

        const weakestType = performance.find(p => p.accuracy < 70);
        if (weakestType) {
            recommendations.push({
                type: 'practice',
                title: `加强${weakestType.name}练习`,
                description: `${weakestType.name}正确率只有 ${weakestType.accuracy}%`,
                icon: '🎯',
                priority: 'high'
            });
        }

        if (overview.totalTests < 5) {
            recommendations.push({
                type: 'more_practice',
                title: '多做练习',
                description: '多做测试可以更好地掌握知识',
                icon: '📊',
                priority: 'medium'
            });
        }

        if (overview.favoritesCount === 0) {
            recommendations.push({
                type: 'favorites',
                title: '收藏重要题目',
                description: '收藏重要题目便于以后复习',
                icon: '⭐',
                priority: 'low'
            });
        }

        return recommendations;
    }
}
