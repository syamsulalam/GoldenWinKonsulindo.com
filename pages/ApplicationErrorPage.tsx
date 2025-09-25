import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationErrorPage: React.FC = () => {
    return (
        <div className="bg-brand-bg-alt py-40 pt-32 min-h-screen flex items-center">
            <div className="container mx-auto px-6 text-center max-w-2xl">
                 <svg className="w-24 h-24 text-red-500 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Submission Failed</h1>
                <p className="text-gray-600 mb-8 text-lg">
                    We're sorry, but there was an error submitting your application. This could be a temporary issue with our server or your network connection. Please try again.
                </p>
                <Link to="/careers" className="bg-brand-gold text-white font-bold py-3 px-8 rounded-full hover:bg-brand-gold-darker transition-colors duration-300">
                    Back to Careers
                </Link>
            </div>
        </div>
    );
};

export default ApplicationErrorPage;
