import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import GrizzyAnimation from './components/GrizzyAnimation';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : 'animated-background'}>
      <GrizzyAnimation />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
