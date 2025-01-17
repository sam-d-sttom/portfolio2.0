import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Welcome from './components/layout/Welcome';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Footer from './components/layout/Footer';
import { ViewPortWidthProvider } from './context/ViewPortWidthContext';

function App() {
  // Smooth scrolling
  const lenis = new Lenis({
    autoRaf: true,
  });

  const [displayWelcome, setDisplayWelcome] = useState(true);
  const [displayMain, setDisplayMain] = useState(false);

  // Main content displays after timeout delay
  useEffect(() => {
    const displayWelcomeTimeout = setTimeout(() => {
      setDisplayWelcome(false);
    }, 3000);

    const displayMainTimeout = setTimeout(() => {
      setDisplayMain(true);
    }, 4000);

    return () => {
      clearTimeout(displayWelcomeTimeout);
      clearTimeout(displayMainTimeout);
    };
  }, []);

  // Prevent the window from being scrollable while the welcome animation is in progress.
  useEffect(() => {
    if (displayWelcome) {
      document.body.classList.add('no-scroll');
    } else {
      const scrollTimeout = setTimeout(() => {
        document.body.classList.remove('no-scroll');
      }, 2000);

      return () => {
        clearTimeout(scrollTimeout);
      };
    }
  }, [displayWelcome]);

  return (
    <ViewPortWidthProvider>
      <div className='bg-black text-primary'>
        <AnimatePresence>
          {displayWelcome && <Welcome key="welcome" />}
        </AnimatePresence>

        <main className='ssm:px-4 md:px-10 lg:px-20'>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ViewPortWidthProvider>
  );
}

export default App;
