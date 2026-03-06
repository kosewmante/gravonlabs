import React from 'react';

export const CTABanner: React.FC = () => {
    return (
        <section className="cta-banner">
            <div className="cta-container">
                <h2>Ready to consult the next frontier of digital systems?</h2>
                <p>Join 15,000+ consultants already deploying on GravonLabs Alabaster. Setup takes less than 5 minutes.</p>
                <div className="cta-actions">
                    <button className="btn-cta-primary">Get Started Now</button>
                    <button className="btn-cta-secondary">Contact Enterprise</button>
                </div>
            </div>
        </section>
    );
};
