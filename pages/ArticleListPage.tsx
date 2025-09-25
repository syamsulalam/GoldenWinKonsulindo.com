import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES_DATA } from '../constants';
import type { Article } from '../types';
import { ArticleCategory } from '../types';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
    <Link to={`/articles/${article.id}`} className="block group overflow-hidden rounded-lg shadow-lg bg-white h-full flex flex-col transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200 hover:shadow-xl hover:border-brand-gold">
        <div className="relative">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <span className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-semibold px-3 py-1 rounded-full">{article.category}</span>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{article.summary}</p>
            <div className="mt-auto text-xs text-gray-500">
                <span>By {article.author}</span>
                <span className="mx-2">|</span>
                <span>{article.date}</span>
            </div>
        </div>
    </Link>
);

const ArticleListPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | null>(null);

    const categories = Object.values(ArticleCategory);

    const filteredArticles = useMemo(() => {
        if (!selectedCategory) {
            return ARTICLES_DATA;
        }
        return ARTICLES_DATA.filter(article => article.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="bg-brand-bg-alt py-20 pt-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">Insights & Articles</h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Explore our latest research, analysis, and perspectives on key economic and business trends.
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
                </div>

                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${!selectedCategory ? 'bg-brand-gold text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-brand-gold hover:text-white'}`}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${selectedCategory === category ? 'bg-brand-gold text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-brand-gold hover:text-white'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>

                 {filteredArticles.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-600 text-lg">No articles found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArticleListPage;
