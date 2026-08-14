import React from 'react';
import Hero from './components/Hero';
import SkillsPanel from './components/SkillsPanel';
import EducationPanel from './components/EducationPanel';
import HobbiesPanel from './components/HobbiesPanel';
import ProjectsPanel from './components/ProjectsPanel';
import Footer from './components/Footer';
import useNeonTheme from '@/hooks/useNeonTheme';



const App = () => {
    const { toggleTheme } = useNeonTheme(); // chamada do hook

    return (
        <div className="app-container">
            <Hero />
            <EducationPanel />
            <SkillsPanel />
            <HobbiesPanel />
            <ProjectsPanel />
            <Footer />
        </div>
    );
};

export default App;