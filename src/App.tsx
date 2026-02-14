
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import VisionMission from './components/VisionMission';
import Courses from './components/Courses';
import DigitalServices from './components/DigitalServices';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AICourseAdvisor from './components/AICourseAdvisor';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Navbar onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      
      <main>
        <Hero />
        <Stats />
        <VisionMission />
        <Courses />
        <DigitalServices />
        <Timeline />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      
      {/* Floating AI Advisor */}
      <AICourseAdvisor />
    </div>
  );
};

export default App;
