import React from 'react';
import profilePicture from '@/assets/fotoperfilsite.jpeg';
import './Hero.scss';

const Hero = () => {
    return (
        <section id="hero" className="hero-container">

            
              <div className="profile-picture-container">
                    <img src={profilePicture} alt="Foto de Lucas L" className="profile-picture" />
                </div>
                <h1 className="hero-title animated-text-glow">Lucas Lemuel</h1>
                <p className="hero-subtitle">Desenvolvedor & Criador de Experiências Futuristas</p>
                <p className="hero-description">
                    Sou Lucas Lemuel, entusiata por tecnologia, design e interfaces digitais modernas. Busco unir performance e estética para criar experiências marcantes.
                </p>

                <nav className="hero-nav">
                        <a href="#sobre">Sobre</a>
                        <a href="#habilidades">Habilidades</a>
                        <a href="#formacoes">Formção</a>
                        <a href="#hobbies">Hobbies</a>
                        <a href="#contato">Contato</a>
                </nav>

                <div className="hero-buttons">
                    <a href="#solucoes" className="hero-button-link">
                        <button className="hero-button">Ver Projetos</button>
                    </a>
                    <a href="#contato" className="hero-button-link">
                        <button className="hero-button secondary">Fale comigo</button>
                    </a>
                </div>
        </section>
    );
};

export default Hero;