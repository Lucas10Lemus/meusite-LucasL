import React from 'react';
import './HologramPanel.scss';

const HologramPanel = () => {
    return (
        <div className="hologram-panel">
            <h2>Status do Sistema</h2>
            <div className="status-indicators">
                <div className="indicator">
                    <span className="indicator-label">CPU</span>
                    <div className="indicator-status cpu-status"></div>
                </div>
                <div className="indicator">
                    <span className="indicator-label">Memória</span>
                    <div className="indicator-status memory-status"></div>
                </div>
                <div className="indicator">
                    <span className="indicator-label">Rede</span>
                    <div className="indicator-status network-status"></div>
                </div>
            </div>
        </div>
    );
};

export default HologramPanel;