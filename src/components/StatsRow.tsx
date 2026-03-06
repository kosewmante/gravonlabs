import React from 'react';

export const StatsRow: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stats-grid">
                <div className="stat-item">
                    <span className="stat-label">Uptime SLA</span>
                    <span className="stat-value">99.99%</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Global Hosts</span>
                    <span className="stat-value">2,400+</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Active Labs</span>
                    <span className="stat-value">15k</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Node Latency</span>
                    <span className="stat-value">&lt;10ms</span>
                </div>
            </div>
        </section>
    );
};
