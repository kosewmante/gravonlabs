import React from 'react';
import { Layers, Grip, Crosshair } from 'lucide-react';

const modules = [
    {
        id: 'glass',
        icon: <Layers size={24} />,
        title: 'Enterprise Software',
        description: 'Custom software solutions for businesses of all sizes.'
    },
    {
        id: 'typography',
        icon: <Grip size={24} />,
        title: 'Ai Automation',
        description: 'Automate repetitive tasks and optimise workflows with AI-powered solutions.'
    },
    {
        id: 'grid',
        icon: <Crosshair size={24} />,
        title: 'Consulting',
        description: 'Strategic guidance to help you achieve your business goals.'
    }
];

export const ServiceModules: React.FC = () => {
    return (
        <section className="modules-section">
            <div className="modules-header">
                <div className="modules-eyebrow">Enterprise Grade</div>
                <h2>Optimised for Custom Software Solutions</h2>
                <hr />
            </div>
            <div className="modules-grid">
                {modules.map((mod) => (
                    <div key={mod.id} className="module-card glass-panel">
                        <div className="module-icon-wrapper">
                            {mod.icon}
                        </div>
                        <h3 className="module-title">{mod.title}</h3>
                        <p className="module-desc">{mod.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
