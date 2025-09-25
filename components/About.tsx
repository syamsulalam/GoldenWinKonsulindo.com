import React from 'react';
import { PROFILE_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-bg-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gold font-serif">About The Consultant</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/3 flex-shrink-0">
            <img 
              src={PROFILE_DATA.imageUrl} 
              alt={PROFILE_DATA.name} 
              className="rounded-lg shadow-2xl w-full max-w-xs mx-auto object-cover border-4 border-brand-gold"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold text-brand-dark mb-2">{PROFILE_DATA.name}</h3>
            <p className="text-xl text-brand-gold mb-4">{PROFILE_DATA.title}</p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {PROFILE_DATA.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
