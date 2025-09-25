import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationSuccessPage: React.FC = () => {
    return (
        <div className="bg-brand-bg-alt py-40 pt-32 min-h-screen flex items-center">
            <div className="container mx-auto px-6 text-center max-w-2xl">
                <svg className="w-24 h-24 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Application Submitted!</h1>
                <p className="text-gray-600 mb-8 text-lg">
                    Thank you for your interest in joining GoldenWinKonsulindo. We have received your application and our team will review it shortly. If your qualifications match our needs, we will be in touch.
                </p>
                <Link to="/" className="bg-brand-gold text-white font-bold py-3 px-8 rounded-full hover:bg-brand-gold-darker transition-colors duration-300">
                    Return to Homepage
                </Link>
            </div>
        </div>
    );
};

export default ApplicationSuccessPage;
