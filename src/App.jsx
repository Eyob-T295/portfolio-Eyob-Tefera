import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Education, Experience, Awards, Extracurricular, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import Feedbacks from './components/Feedbacks'

// ── Back to Top Button ─────────────────────────────────────────────────────
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #804dee, #3b1fa8)',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: visible ? '0 0 20px rgba(128,77,238,0.6)' : 'none',
        color: 'white',
        fontSize: '1.2rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      ↑
    </button>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className="div bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Awards />
        <Extracurricular />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="div relative z-0">
          <Contact />
          <StarsCanvas />
          <footer className="mt-10 py-10 px-6 bg-tertiary/90 rounded-3xl border border-white/10 text-center text-secondary">
            <p className="text-sm text-white/90">Thanks for visiting my portfolio. Want to connect?</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
              <a href="mailto:eyobtefera295@gmail.com" className="text-white hover:text-purple-300 transition-colors">Email</a>
              <a href="https://www.linkedin.com/in/eyobtefera1/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors">LinkedIn</a>
              <a href="https://github.com/Eyob-T295" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors">GitHub</a>
              <a href="/resume/Eyob_Tefera_CV.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors">Resume</a>
            </div>
            <p className="text-xs text-gray-400 mt-4">© {new Date().getFullYear()} Eyob Tefera. Built with React.</p>
          </footer>
        </div>
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
