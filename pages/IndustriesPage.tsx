import React from 'react';
import { INDUSTRIES_DATA } from '../constants';
import type { Industry } from '../types';

const IndustryCard: React.FC<{ industry: Industry }> = ({ industry }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200 hover:border-brand-gold hover:shadow-xl">
        <div className="mb-4 inline-block p-4 bg-brand-bg-alt rounded-full">
            <industry.icon className="h-10 w-10 text-brand-gold" />
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-2">{industry.name}</h3>
        <p className="text-gray-600">{industry.description}</p>
    </div>
);


const IndustriesPage: React.FC = () => {
    return (
        <div className="bg-brand-light py-20 pt-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">Industries We Serve</h1>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                        We provide tailored consulting solutions across a diverse range of sectors, combining deep industry knowledge with functional expertise to help our clients achieve their strategic objectives.
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {INDUSTRIES_DATA.map((industry) => (
                        <IndustryCard key={industry.name} industry={industry} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustriesPage;