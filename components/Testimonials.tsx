import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 h-full flex flex-col">
    <div className="text-brand-gold text-6xl font-serif leading-none mb-4">“</div>
    <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
    <div className="mt-auto">
        <p className="font-bold text-brand-dark">{testimonial.author}</p>
        <p className="text-brand-gold text-sm">{testimonial.title}</p>
    </div>
  </div>
);


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gold font-serif">Client Testimonials</h2>
          <p className="text-lg text-gray-600 mt-2">Building partnerships through trust and exceptional results.</p>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;