import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <section id="hero" className="hero-container">
            <div className="profile-card">
                <div className="profile-picture-container">
                    {/* A imagem deve estar em public/foto-perfil.jpeg */}
                    <img src="/foto-perfil.jpeg" alt="Foto de Lucas L" className="profile-picture" />
                </div>
                <h1 className="hero-title">Lucas Lemu</h1>
                <p className="hero-subtitle">Desenvolvedor & Criador de Experiências Futuristas</p>
                <p className="hero-description">
                    Sou Lucas L, entusiata por tecnologia, design e interfaces digitais modernas. Busco unir performance e estética para criar experiências marcantes.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="hero-button-link">
                        <button className="hero-button">Ver Projetos</button>
                    </a>
                    <button className="hero-button secondary">Entrar em Contato</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;