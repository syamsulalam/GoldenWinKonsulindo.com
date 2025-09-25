import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p className="text-lg font-bold text-brand-gold mb-2">GoldenWinKonsulindo</p>
        <p className="mb-4 text-sm max-w-md mx-auto">
          Providing expert economic and management consulting services to drive sustainable growth and strategic success.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
          <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
          <a href="#projects" className="hover:text-brand-gold transition-colors">Projects</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
        </div>
        <p className="text-sm">&copy; {currentYear} GoldenWinKonsulindo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;