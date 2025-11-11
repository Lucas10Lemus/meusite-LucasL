import React from 'react';
import './Controls.scss';

const Controls = ({ toggleTheme }) => {
    const handleEditProfile = () => {
        // Logic to edit profile
        alert('Edit Profile clicked!');
    };

    const handleSettings = () => {
        toggleTheme();
    };

    return (
        <div className="controls">
            <button className="control-button" onClick={handleEditProfile}>
                Edit Profile
            </button>
            <button className="control-button" onClick={handleSettings}>
                Settings
            </button>
        </div>
    );
};

export default Controls;