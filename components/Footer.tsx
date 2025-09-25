import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark py-12">
      <div className="container mx-auto px-6 text-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-brand-gold mb-2">GoldenWinKonsulindo</h3>
            <p className="text-sm">
              Providing expert economic and management consulting services to drive sustainable growth and strategic success.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
              <a href="#team" className="hover:text-brand-gold transition-colors">Our Team</a>
              <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
              <a href="#projects" className="hover:text-brand-gold transition-colors">Projects</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
            <div className="text-sm space-y-2">
                <p><strong>Email:</strong> adm@goldenwinkonsulindo.com</p>
                <p><strong>Phone:</strong> 0812 3522 604</p>
                <p><strong>Address:</strong> Spazio Tower Lt. 10, Surabaya 60225</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} GoldenWinKonsulindo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
