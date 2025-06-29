
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
