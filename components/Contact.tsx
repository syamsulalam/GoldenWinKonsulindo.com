import React from 'react';

const Contact: React.FC = () => {
    const handleContactClick = () => {
        window.location.href = "mailto:contact@goldenwinkonsulindo.com";
    };

  return (
    <section id="contact" className="py-20 bg-brand-bg-alt">
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
        <div className="mt-10 text-gray-600">
            <p className="mb-2">Email: contact@goldenwinkonsulindo.com</p>
            <p>Phone: +62 123 4567 8900 (placeholder)</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;