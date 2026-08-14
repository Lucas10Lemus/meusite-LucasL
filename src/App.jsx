import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsPanel from './components/SkillsPanel';
import EducationPanel from './components/EducationPanel';
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
            <EducationPanel />
            <SkillsPanel />
            <HobbiesPanel />
            <ProjectsPanel />
            <Controls />
            <Footer />
        </div>
    );
};

export default App;