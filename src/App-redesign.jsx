import React from 'react';
import './App.css';

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroAboutSection from './components/HeroAboutSection';
import News from './components/News';
import PublicationsSection from './components/PublicationsSection';
import ProjectsSection from './components/ProjectsSection';
import PatentsSection from './components/PatentsSection';
import CVSection from './components/CVSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main id="main-content">
          <HeroAboutSection />
          <News />
          <PublicationsSection />
          <ProjectsSection />
          <PatentsSection />
          <CVSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;