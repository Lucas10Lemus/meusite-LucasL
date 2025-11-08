import React from 'react';
import './Footer.scss';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <h2 className="footer-title">Conecte-se Comigo</h2>
            <div className="social-icons">
                <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
            </div>
            <p className="footer-text">© 2025 Lucas Lemuel. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;