import React from 'react';
import { Hexagon, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="footer-light">
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="footer-brand-title">
                        <Hexagon size={24} className="logo-icon" color="var(--color-primary)" />
                        GravonLabs
                    </div>
                    <p>
                        Advancing the digital frontier through precision custom software solutions and high-performance development tools.
                    </p>
                    <div className="footer-socials">
                        <a href="#"><Github size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-grid">
                    <div className="footer-col">
                        <h5>Services</h5>
                        <ul>
                            <li><a href="#">Custom Enterprise Software</a></li>
                            <li><a href="#">AI Automation</a></li>
                            <li><a href="#">Coaching</a></li>
                            <li><a href="#">Consulting</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h5>Resources</h5>
                        <ul>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">API Reference</a></li>
                            <li><a href="#">Changelog</a></li>
                            <li><a href="#">Status</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h5>Company</h5>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h5>Legal</h5>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Security Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© 2024 GravonLabs Custom Software Solutions. All rights reserved.</span>
            </div>
        </footer>
    );
};
