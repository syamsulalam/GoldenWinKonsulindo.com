import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ARTICLES_DATA } from '../constants';

const ArticleDetailPage: React.FC = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const navigate = useNavigate();
    const article = ARTICLES_DATA.find(a => a.id === articleId);

    if (!article) {
        return (
            <div className="bg-brand-bg-alt py-40">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl font-bold text-brand-dark mb-4">Article Not Found</h1>
                    <p className="text-gray-600 mb-6">The article you are looking for does not exist.</p>
                    <Link to="/insights" className="bg-brand-gold text-white font-bold py-3 px-8 rounded-full hover:bg-brand-gold-darker transition-colors duration-300">
                        View All Articles
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-brand-light py-20 pt-32">
            <div className="container mx-auto px-6 max-w-4xl">
                 <button onClick={() => navigate('/insights')} className="text-brand-gold hover:text-brand-dark font-semibold mb-8 inline-flex items-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Articles
                </button>
                <article className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
                    <header className="mb-8 border-b border-gray-200 pb-6">
                        <span className="text-brand-gold font-semibold">{article.category}</span>
                        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark font-serif my-2">{article.title}</h1>
                        <div className="text-sm text-gray-500">
                            <span>By {article.author}</span>
                            <span className="mx-2">|</span>
                            <span>Published on {article.date}</span>
                        </div>
                    </header>
                    <img src={article.imageUrl} alt={article.title} className="w-full h-auto rounded-lg mb-8" />
                    <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-4">
                       <p>{article.content}</p>
                       {/* In a real app with markdown, you'd parse and render it here */}
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ArticleDetailPage;