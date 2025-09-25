import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default HomePage;
