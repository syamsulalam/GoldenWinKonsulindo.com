import React from 'react';

const MailIcon: React.FC<{className: string}> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon: React.FC<{className: string}> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const LocationIcon: React.FC<{className: string}> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Contact: React.FC = () => {
    const handleContactClick = () => {
        window.location.href = "mailto:adm@goldenwinkonsulindo.com";
    };

  return (
    <section id="contact" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-gold font-serif mb-4">
          Let's Collaborate on Your Next Project
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Ready to leverage expert insights for your organization's challenges? Reach out to discuss how we can achieve your strategic goals together.
        </p>
        <button
          onClick={handleContactClick}
          className="bg-brand-gold text-white font-bold py-4 px-10 rounded-full hover:bg-brand-gold-darker transition-all duration-300 text-lg transform hover:scale-105"
        >
          Get in Touch
        </button>
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start space-x-4 p-4 rounded-lg">
                <PhoneIcon className="text-brand-gold mt-1 flex-shrink-0 h-8 w-8" />
                <div>
                    <h4 className="font-bold text-brand-dark text-lg">Phone</h4>
                    <a href="tel:+628123522604" className="text-gray-600 hover:text-brand-gold">0812 3522 604</a>
                </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-lg">
                <MailIcon className="text-brand-gold mt-1 flex-shrink-0 h-8 w-8" />
                <div>
                    <h4 className="font-bold text-brand-dark text-lg">Email</h4>
                    <a href="mailto:adm@goldenwinkonsulindo.com" className="text-gray-600 hover:text-brand-gold">adm@goldenwinkonsulindo.com</a>
                </div>
            </div>
            <div className="flex items-start space-x-4 p-4 rounded-lg">
                <LocationIcon className="text-brand-gold mt-1 flex-shrink-0 h-8 w-8" />
                <div>
                    <h4 className="font-bold text-brand-dark text-lg">Office Address</h4>
                    <p className="text-gray-600">Spazio Tower Lt. 10<br/>Jl. Mayjen Yono Suwoyo, Pradahkalikendal, Kec. Dukuhpakis<br/>Surabaya 60225</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
