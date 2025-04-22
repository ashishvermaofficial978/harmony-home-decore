import React, { useEffect } from 'react';
import { Hero } from '../components/hero/Hero';
import { IntroSection } from '../components/sections/IntroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { BlogSection } from '../components/sections/BlogSection';
import { CtaSection } from '../components/sections/CtaSection';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Harmony Home Decor | Expert Interior Design Consultations';
  }, []);

  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
    </>
  );
};