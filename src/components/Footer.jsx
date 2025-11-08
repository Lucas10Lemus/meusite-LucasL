import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2025 Lucas Lemuel Silva Araújo.</p>
                <div className="social-links">
                    {/* Substitua '#' pelo seu link */}
                    <a href="https://github.com/Lucas10Lemus" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/lucas-lemus-silva-araujo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/llucasl__/" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;