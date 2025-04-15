
import { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="bg-[#221F26]">
      <CustomCursor />
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
