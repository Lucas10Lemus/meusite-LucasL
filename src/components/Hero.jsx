import React from 'react';
import profilePicture from '@/assets/fotoperfilsite.jpeg';
import './Hero.scss';

const Hero = () => {
    return (
        <section id="hero" className="hero-container">
            <div className="profile-card">
                <div className="profile-picture-container">
                    <img src={profilePicture} alt="Foto de Lucas L" className="profile-picture" />
                </div>
                <h1 className="hero-title">Lucas Lemu</h1>
                <p className="hero-subtitle">Desenvolvedor & Criador de Experiências Futuristas</p>
                <p className="hero-description">
                    Sou Lucas Lemuel, entusiata por tecnologia, design e interfaces digitais modernas. Busco unir performance e estética para criar experiências marcantes.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="hero-button-link">
                        <button className="hero-button">Ver Projetos</button>
                    </a>
                    <a href="#contact" className="hero-button-link">
                        <button className="hero-button secondary">Entrar em Contato</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;