import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';

const ServiceDetailPage: React.FC = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const navigate = useNavigate();
    const service = SERVICES_DATA.find(s => s.id === serviceId);

    if (!service) {
        return (
            <div className="bg-brand-bg-alt py-40">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl font-bold text-brand-dark mb-4">Service Not Found</h1>
                    <p className="text-gray-600 mb-6">The service you are looking for does not exist.</p>
                    <Link to="/" className="bg-brand-gold text-white font-bold py-3 px-8 rounded-full hover:bg-brand-gold-darker transition-colors duration-300">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-brand-light py-20 pt-32">
            <div className="container mx-auto px-6 max-w-4xl">
                <button onClick={() => navigate(-1)} className="text-brand-gold hover:text-brand-dark font-semibold mb-8 inline-flex items-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back
                </button>

                <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                    <div className="flex items-center mb-6">
                        <div className="p-4 bg-brand-bg-alt rounded-full mr-6">
                           <service.icon className="h-12 w-12 text-brand-gold" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-brand-dark font-serif">{service.title}</h1>
                        </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {service.longDescription}
                    </p>

                    <div className="border-t border-gray-200 pt-6">
                        <h2 className="text-2xl font-bold text-brand-gold font-serif mb-4">Key Offerings</h2>
                        <ul className="space-y-4">
                            {service.subServices.map((sub, index) => (
                                <li key={index} className="border-l-4 border-brand-gold pl-4 py-2 bg-brand-bg-alt rounded-r-md">
                                    <h3 className="font-bold text-brand-dark text-lg">{sub.title}</h3>
                                    <p className="text-gray-600">{sub.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;