import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-light/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-xl font-bold text-brand-gold">
            GoldenWinKonsulindo
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-brand-dark hover:text-brand-gold transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark focus:outline-none">
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
                <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-brand-dark hover:text-brand-gold transition-colors duration-300 text-center">
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