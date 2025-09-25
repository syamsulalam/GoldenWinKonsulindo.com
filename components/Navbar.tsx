import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import { ArticleCategory } from '../types';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const articleCategories = Object.values(ArticleCategory);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setMobileServicesOpen(false);
        setMobileInsightsOpen(false);
    }, [location.pathname, location.hash]);
    
    const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        if (location.pathname === '/') {
            document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(`/${targetId}`); // Navigate to homepage with hash
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6">
                <div className="relative flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center text-white hover:opacity-80 transition-opacity">
                            <img src="/img/logo.png" alt="GoldenWinKonsulindo Logo" className="h-10 w-auto" />
                        </Link>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink to="/" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive && location.hash === '' ? 'text-brand-gold font-bold' : 'text-gray-300 hover:text-brand-gold'}`}>Home</NavLink>
                        
                        {/* Services Mega Menu */}
                        <div className="relative group">
                             <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 group-hover:text-brand-gold transition-colors flex items-center">
                                Services
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max max-w-2xl bg-brand-dark rounded-b-lg shadow-xl p-6 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                    {SERVICES_DATA.map(service => (
                                        <Link key={service.id} to={`/services/${service.id}`} className="block p-2 rounded-md hover:bg-white/10 transition-colors">
                                            <p className="font-semibold text-white">{service.title}</p>
                                            <p className="text-xs text-gray-400">{service.description.split('.')[0]}.</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <NavLink to="/industries" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-brand-gold font-bold' : 'text-gray-300 hover:text-brand-gold'}`}>Industries</NavLink>

                        {/* Insights Mega Menu */}
                         <div className="relative group">
                            <NavLink to="/insights" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${isActive ? 'text-brand-gold font-bold' : 'text-gray-300 hover:text-brand-gold'}`}>
                                Insights
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </NavLink>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-brand-dark rounded-b-lg shadow-xl p-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                                <div className="flex flex-col space-y-2">
                                    {articleCategories.map(category => (
                                        <Link key={category} to={`/insights/${category.toLowerCase()}`} className="block p-2 text-sm text-gray-300 rounded-md hover:bg-white/10 hover:text-white transition-colors">
                                            {category}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <NavLink to="/careers" className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-brand-gold font-bold' : 'text-gray-300 hover:text-brand-gold'}`}>Careers</NavLink>
                        <a href="#contact" onClick={(e) => handleScrollLink(e, '#contact')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-brand-gold">Contact</a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none p-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-brand-dark">
                    <div className="px-4 pt-2 pb-3 space-y-1 flex flex-col items-center">
                        <NavLink to="/" className="block w-full text-center py-2 text-gray-300 hover:text-brand-gold">Home</NavLink>
                        
                        {/* Services Accordion */}
                        <div className="w-full text-center">
                            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="w-full py-2 text-gray-300 hover:text-brand-gold flex items-center justify-center">
                                Services
                                <svg className={`w-4 h-4 ml-1 transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="bg-black/20 py-2 flex flex-col items-center space-y-1">
                                    {SERVICES_DATA.map(service => (
                                        <Link key={service.id} to={`/services/${service.id}`} className="block w-full py-2 text-sm text-gray-400 hover:text-brand-gold">{service.title}</Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <NavLink to="/industries" className="block w-full text-center py-2 text-gray-300 hover:text-brand-gold">Industries</NavLink>

                        {/* Insights Accordion */}
                        <div className="w-full text-center">
                            <button onClick={() => setMobileInsightsOpen(!mobileInsightsOpen)} className="w-full py-2 text-gray-300 hover:text-brand-gold flex items-center justify-center">
                                Insights
                                <svg className={`w-4 h-4 ml-1 transform transition-transform ${mobileInsightsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${mobileInsightsOpen ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="bg-black/20 py-2 flex flex-col items-center space-y-1">
                                    <Link to="/insights" className="block w-full py-2 text-sm text-gray-400 hover:text-brand-gold">All Insights</Link>
                                    {articleCategories.map(category => (
                                        <Link key={category} to={`/insights/${category.toLowerCase()}`} className="block w-full py-2 text-sm text-gray-400 hover:text-brand-gold">{category}</Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <NavLink to="/careers" className="block w-full text-center py-2 text-gray-300 hover:text-brand-gold">Careers</NavLink>
                        <a href="#contact" onClick={(e) => handleScrollLink(e, '#contact')} className="block w-full text-center py-2 text-gray-300 hover:text-brand-gold">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;