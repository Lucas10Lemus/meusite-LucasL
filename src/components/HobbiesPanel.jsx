import React from 'react';
import './HobbiesPanel.scss';
import { FaVolleyballBall, FaDumbbell, FaCode, FaGamepad } from 'react-icons/fa';

const HobbiesPanel = () => {
    return (
        <section id="o-que-eu-faco" className="hobbies-panel">
            <h2>O que eu faço</h2>
            <div className="activities-container">
                <div className="activity-category">
                    <h3>Esportes & Lazer</h3>
                    <ul>
                        <li className="hobby-item">
                            <FaVolleyballBall className="hobby-icon" />
                            <div>
                                <h4>Voleibol</h4>
                                <p>Pratico o esporte em dias livres e finais de semana.</p>
                            </div>
                        </li>
                        <li className="hobby-item">
                            <FaDumbbell className="hobby-icon" />
                            <div>
                                <h4>Musculação</h4>
                                <p>Gosto de ir a academia treinar e fortalecer os musculos.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="activity-category">
                    <h3>Tecnologia & Criação</h3>
                    <ul>
                        <li className="hobby-item">
                            <FaCode className="hobby-icon" />
                            <div>
                                <h4>Programação</h4>
                                <p>Estou sempre aprendendo novas linguagens e tecnologias.</p>
                            </div>
                        </li>
                        <li className="hobby-item">
                            <FaGamepad className="hobby-icon" />
                            <div>
                                <h4>Jogos</h4>
                                <p>Curto bastante videogames para relaxar e me inspirar.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HobbiesPanel;