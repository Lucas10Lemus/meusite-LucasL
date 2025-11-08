import React from 'react';
import './Header.scss'; // Importando estilos específicos para o cabeçalho

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Lucas Lemuel</h1>
                <span>Portfolio</span>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#hero">Início</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#o-que-eu-faco">O que eu faço</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;