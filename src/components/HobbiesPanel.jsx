import React from 'react';
import './HobbiesPanel.scss';

const hobbies = [
    { id: 1, name: 'Voleibol', description: 'Pratico o esporte em dias livre e finais de semana.' },
    { id: 2, name: 'Programação', description: 'Gosto de aprender novas linguagens e tecnologias.' },
    { id: 3, name: 'Ciclismo', description: 'Explorar novos lugares de bicicleta.' },
    { id: 4, name: 'Jogos', description: 'Gosto de jogar videogames.' },
];

const HobbiesPanel = () => {
    return (
        <div className="hobbies-panel">
            <h2>Meus Hobbies</h2>
            <ul>
                {hobbies.map(hobby => (
                    <li key={hobby.id} className="hobby-item">
                        <h3>{hobby.name}</h3>
                        <p>{hobby.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HobbiesPanel;