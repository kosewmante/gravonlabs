import React from 'react';
import { Check } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
    return (
        <section className="workflow-section">
            <div className="workflow-container">
                <div className="workflow-content">
                    <h2>Structured workflow for<br />professional teams</h2>
                    <p>
                        Our interface is stripped of unnecessary noise, focusing entirely on data density and operational clarity. Teal accents guide the eye to primary actions, while the alabaster background reduces eye strain during long-form custom software solutions tasks.
                    </p>
                    <ul className="workflow-list">
                        <li>
                            <div className="workflow-check"><Check size={16} /></div>
                            Real-time collaboration with atomic locks
                        </li>
                        <li>
                            <div className="workflow-check"><Check size={16} /></div>
                            Instant deployment to 24 regions
                        </li>
                        <li>
                            <div className="workflow-check"><Check size={16} /></div>
                            Hardware-accelerated rendering engine
                        </li>
                    </ul>
                </div>

                <div className="workflow-visual">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        alt="Dashboard Interface Mockup"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                    />
                </div>
            </div>
        </section>
    );
};
