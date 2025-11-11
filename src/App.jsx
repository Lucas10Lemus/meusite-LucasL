import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HologramPanel from './components/HologramPanel';
import SkillsPanel from './components/SkillsPanel';
import HobbiesPanel from './components/HobbiesPanel';
import ProjectsPanel from './components/ProjectsPanel';
import Controls from './components/Controls';
import Footer from './components/Footer';
import useNeonTheme from '@/hooks/useNeonTheme'; 


const App = () => {
    const { toggleTheme } = useNeonTheme(); // chamada do hook

    return (
        <div className="app-container">
            <Header />
            <Hero />
            <HologramPanel />
            <SkillsPanel />
            <HobbiesPanel />
            <ProjectsPanel />
            <Controls toggleTheme={toggleTheme} />   {/* prop passada */}
            <Footer />
        </div>
    );
};

export default App;