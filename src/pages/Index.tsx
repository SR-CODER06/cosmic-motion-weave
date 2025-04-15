
import { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import Hero from '../components/Hero';

const Index = () => {
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="bg-[#221F26] min-h-screen">
      <CustomCursor />
      <Hero />
    </div>
  );
};

export default Index;
