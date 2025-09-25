import React from 'react';

const Hero: React.FC = () => {
    const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?grayscale&blur=2)' }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-brand-dark/60"></div>
      
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-brand-gold mb-4 font-serif">
          GoldenWinKonsulindo
        </h1>
        <p className="text-lg md:text-2xl text-brand-light mb-2">
          Expert Economic & Management Consulting
        </p>
        <p className="text-lg md:text-2xl font-semibold text-brand-light mb-8">
          by Dr. Windijarto, SE. MBA
        </p>
        <p className="text-md md:text-xl max-w-2xl mx-auto text-gray-300 mb-10">
          Driving Strategic Growth Through Over Three Decades of Proven Expertise.
        </p>
        <a href="#services" onClick={handleScrollToServices} className="bg-brand-gold text-white font-bold py-3 px-8 rounded-full hover:bg-brand-gold-darker transition-all duration-300 text-lg transform hover:scale-105">
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default Hero;