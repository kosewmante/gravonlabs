import React from 'react';

export const HeroSection: React.FC = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">
                    Bringing Enterprise Software <br />
                    <span className="text-teal">Solutions to Every Business</span>
                </h1>
                <p className="hero-description">
                    We bridge the gap between AI hype and operational reality. We specialise in developing applications that integrate into your business to deliver value at scale. Whether through custom software, strategic consultancy, or executive coaching, we ensure your AI investment translates into a competitive advantage.
                </p>
                <div className="hero-actions">
                    <a href="#contact" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Start Consulting</a>
                    <button className="btn-secondary">View Live Demo</button>
                </div>
            </div>
        </section>
    );
};
