import React from 'react';
import './SkillsPanel.scss'; // Importando o CSS específico para o SkillsPanel

const skills = [
    { name: 'JavaScript', level: 'Avançado' },
    { name: 'React', level: 'Intermediário' },
    { name: 'CSS', level: 'Avançado' },
    { name: 'HTML', level: 'Avançado' },
    { name: 'Python', level: 'Intermediário' },
];

const SkillsPanel = () => {
    return (
        <div className="skills-panel">
            <h2 className="skills-title">Minhas Habilidades</h2>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsPanel;