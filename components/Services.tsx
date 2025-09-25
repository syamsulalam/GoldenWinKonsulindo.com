import React from 'react';
import type { Service } from '../types';

// Placeholder icons
const BriefcaseIcon: React.FC<{className: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);
const ChartBarIcon: React.FC<{className: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
);
const ScaleIcon: React.FC<{className: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
);
const UsersIcon: React.FC<{className: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.78-4.125a6 6 0 00-6.44-1.688"></path></svg>
);
const GlobeIcon: React.FC<{className: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.293-.293a1 1 0 011.414 0l.293.293m-2 2l2-2m-2 2l-2 2m2-2l2 2m7-2l-2-2m2 2l2-2m-2 2l-2 2m2-2l2 2M5 11h14M5 11a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2"></path></svg>
);
const DocumentTextIcon: React.FC<{className: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
);


const servicesData: Service[] = [
    {
        icon: ScaleIcon,
        title: "Feasibility Studies & Business Viability",
        description: "In-depth analysis of project viability, assessing financial, technical, and market factors to ensure sound investment decisions."
    },
    {
        icon: ChartBarIcon,
        title: "Economic & Social Impact Analysis",
        description: "Comprehensive evaluation of how new projects and policies affect regional economies and communities."
    },
    {
        icon: BriefcaseIcon,
        title: "Corporate Financial Strategy",
        description: "Expert guidance on financial restructuring, capital management, and long-term planning to maximize corporate value."
    },
    {
        icon: UsersIcon,
        title: "Human Capital & Talent Management",
        description: "Developing strategies for talent management, performance improvement, and organizational structure to enhance company performance."
    },
    {
        icon: GlobeIcon,
        title: "Regional Economic Development",
        description: "Formulating strategies and policies for government and private sectors to stimulate sustainable regional growth."
    },
    {
        icon: DocumentTextIcon,
        title: "Corporate Governance & Policy",
        description: "Assisting in the creation of robust corporate governance frameworks and long-term strategic plans (RJPP)."
    }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200 hover:border-brand-gold">
        <div className="mb-4 inline-block p-4 bg-brand-bg-alt rounded-full">
            <service.icon className="h-10 w-10 text-brand-gold" />
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-gold font-serif">Core Services</h2>
                    <p className="text-lg text-gray-600 mt-2">Leveraging decades of expertise to provide actionable solutions.</p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;