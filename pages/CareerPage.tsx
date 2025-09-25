import React from 'react';
import JobApplicationForm from '../components/JobApplicationForm';

const CareerPage: React.FC = () => {
    return (
        <div className="bg-brand-bg-alt py-20 pt-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">Join Our Team</h1>
                    <p className="text-lg text-gray-600 mt-4">
                        At GoldenWinKonsulindo, we believe our people are our greatest asset. We are a team of dedicated, innovative, and collaborative professionals committed to delivering excellence. If you are passionate about making a tangible impact and thrive in a challenging yet supportive environment, we would love to hear from you.
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
                </div>

                <JobApplicationForm />

                <div className="text-center mt-16 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Our Commitment to You</h3>
                    <p className="text-gray-700">
                        We are dedicated to fostering a work environment where you can grow both professionally and personally. We offer opportunities for continuous learning, mentorship from industry experts, and the chance to work on high-impact projects that shape industries. Join us and be part of a team that is dedicated to building a better future through strategic excellence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CareerPage;
