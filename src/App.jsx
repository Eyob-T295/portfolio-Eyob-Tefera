import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Education, Experience, Awards, Extracurricular, Hero, Navbar, Tech, Works, StarsCanvas } from './components' // if you want to use skills balls make sure to import tech and do the same for src\components\index.js
import Feedbacks from './components/Feedbacks'
// import { Analytics } from "@vercel/analytics/react"

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
          {/* <Feedbacks /> */}
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
        </div>
      </BrowserRouter>
  )
}

export default App
