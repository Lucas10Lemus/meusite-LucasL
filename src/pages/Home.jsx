import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HologramPanel from '../components/HologramPanel';
import SkillsPanel from '../components/SkillsPanel';
import HobbiesPanel from '../components/HobbiesPanel';
import Controls from '../components/Controls';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <Hero />
            <HologramPanel />
            <SkillsPanel />
            <HobbiesPanel />
            <Controls />
            <Footer />
        </div>
    );
};

export default Home;