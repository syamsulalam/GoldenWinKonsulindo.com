import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void; }> = ({ to, children, onClick }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
        const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            const targetId = to.substring(1); // remove '#'
            const element = document.querySelector(targetId);
            if(element) {
              element.scrollIntoView({ behavior: 'smooth' });
            } else {
              // Fallback for sections not on the current page, though the logic is designed for home page.
              // This can be improved if sections exist on other pages.
              window.location.href = `/${to}`;
            }
            if (onClick) onClick();
        };
        return <a href={to} onClick={handleScroll} className="text-gray-300 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">{children}</a>;
    }

    return (
        <Link to={`/${to}`} onClick={onClick} className="text-gray-300 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">{children}</Link>
    );
};


const PageLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
    <NavLink 
        to={to} 
        onClick={onClick} 
        className={({ isActive }) => 
            `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-brand-gold font-bold' : 'text-gray-300 hover:text-brand-gold'}`
        }
    >
        {children}
    </NavLink>
);


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // check on initial render
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false); // Close mobile menu on route change
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6">
                <div className="relative flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white text-xl font-bold font-serif hover:text-brand-gold transition-colors">
                            GoldenWinKonsulindo
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavItem to="/#about">About</NavItem>
                            <NavItem to="/#team">Our Team</NavItem>
                            <NavItem to="/#services">Services</NavItem>
                            <PageLink to="/industries">Industries</PageLink>
                            <PageLink to="/articles">Insights</PageLink>
                            <PageLink to="/careers">Careers</PageLink>
                            <NavItem to="/#contact">Contact</NavItem>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none p-2">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-brand-dark">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        <NavItem to="/#about" onClick={() => setIsOpen(false)}>About</NavItem>
                        <NavItem to="/#team" onClick={() => setIsOpen(false)}>Our Team</NavItem>
                        <NavItem to="/#services" onClick={() => setIsOpen(false)}>Services</NavItem>
                        <PageLink to="/industries" onClick={() => setIsOpen(false)}>Industries</PageLink>
                        <PageLink to="/articles" onClick={() => setIsOpen(false)}>Insights</PageLink>
                        <PageLink to="/careers" onClick={() => setIsOpen(false)}>Careers</PageLink>
                        <NavItem to="/#contact" onClick={() => setIsOpen(false)}>Contact</NavItem>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
