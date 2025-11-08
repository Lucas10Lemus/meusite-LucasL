import React from 'react';
import './Controls.scss';

const Controls = () => {
    const handleEditProfile = () => {
        // Logic to edit profile
        alert('Edit Profile clicked!');
    };

    const handleSettings = () => {
        // Logic to access settings
        alert('Settings clicked!');
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