import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { NAV_LINKS } from './data/portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0.1, 0.35, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-ink relative isolate">
      {/* Subtle Minimalist Blueprint Grid & Soft Organic Tonal Depth (gives Glassmorphism real light refraction) */}
      <div
        className="fixed inset-0 bg-editorial-grid pointer-events-none -z-20"
        aria-hidden="true"
      />
      <div
        className="fixed -top-24 right-[-10%] w-[520px] h-[520px] rounded-full bg-moss/[0.09] blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-[-120px] left-[-8%] w-[480px] h-[480px] rounded-full bg-slate-500/[0.11] blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Navbar activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
