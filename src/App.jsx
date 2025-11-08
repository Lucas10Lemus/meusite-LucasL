import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HologramPanel from './components/HologramPanel';
import SkillsPanel from './components/SkillsPanel';
import HobbiesPanel from './components/HobbiesPanel';
import ProjectsPanel from './components/ProjectsPanel';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <Hero />
            <HologramPanel />
            <SkillsPanel />
            <HobbiesPanel />
            <ProjectsPanel />
            <Footer />
        </div>
    );
};

export default App;