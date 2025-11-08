import React from 'react';
import './EducationPanel.scss';
import { FaUniversity, FaCertificate } from 'react-icons/fa';

const education = [
    {
        icon: <FaUniversity />,
        title: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Universidade XYZ',
        period: '2022 - 2024',
    },
    {
        icon: <FaCertificate />,
        title: 'React: Desenvolvendo com JavaScript',
        institution: 'Alura Cursos Online',
        period: '2023',
    },
];

const EducationPanel = () => (
    <section id="education" className="education-panel">
        <h2 className="animated-text-glow">Formação Acadêmica</h2>
        {education.map((item, index) => (
            <div key={index} className="education-item">
                <div className="education-icon">{item.icon}</div>
                <div className="education-details">
                    <h3>{item.title}</h3>
                    <p className="institution">{item.institution}</p>
                    <p className="period">{item.period}</p>
                </div>
            </div>
        ))}
    </section>
);

export default EducationPanel;