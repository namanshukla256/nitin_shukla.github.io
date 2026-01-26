import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroAboutSection from './components/HeroAboutSection';
import PublicationsSection from './components/PublicationsSection';
import ProjectsSection from './components/ProjectsSection';
import PatentsSection from './components/PatentsSection';
import CVSection from './components/CVSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroAboutSection />
        <PublicationsSection />
        <ProjectsSection />
        <PatentsSection />
        <CVSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;