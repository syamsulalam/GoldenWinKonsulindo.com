import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <Link to={`/services/${service.id}`} className="block h-full group">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full transform group-hover:-translate-y-2 transition-transform duration-300 border border-gray-200 group-hover:border-brand-gold group-hover:shadow-xl">
            <div className="mb-4 inline-block p-4 bg-brand-bg-alt rounded-full">
                <service.icon className="h-10 w-10 text-brand-gold" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
        </div>
    </Link>
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
                    {SERVICES_DATA.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;