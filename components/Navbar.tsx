import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/#team', label: 'Team' },
  // { href: '/career', label: 'Career' }, // To be added
  // { href: '/insights', label: 'Insights' }, // To be added
  { href: '/#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href.startsWith('/#')) {
      const targetId = href.substring(2);
      if (location.pathname === '/') {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(href);
    }
  };
  
  const linkColor = isScrolled || location.pathname !== '/' ? 'text-brand-dark hover:text-brand-gold' : 'text-white hover:text-gray-300';
  const mobileIconColor = isScrolled || location.pathname !== '/' ? 'text-brand-dark' : 'text-white';
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-brand-light/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center">
            <img src="/img/logo.png" alt="GoldenWinKonsulindo Logo" className="h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)} 
                className={`transition-colors duration-300 font-medium ${linkColor}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none transition-colors duration-300 ${mobileIconColor}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-brand-light rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-brand-dark hover:text-brand-gold transition-colors duration-300 text-center font-medium">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;