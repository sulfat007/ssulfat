import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Organisasi } from '../components/Organisasi';
import { Fotografi } from '../components/Fotografi';
import { Skills } from '../components/Skills';
import { BlogPreview } from '../components/BlogPreview';
import { Contact } from '../components/Contact';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

  return (
    <>
      <Hero />
      <Organisasi />
      <Fotografi />
      <Skills />
      <BlogPreview />
      <Contact />
    </>
  );
}
