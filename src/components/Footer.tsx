import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

const YEAR = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-title">
              <Hexagon size={22} color="var(--color-accent-on-ink)" />
              GravonLabs
            </div>
            <p className="footer-blurb">
              Software, data, and AI for teams that can&rsquo;t afford to get it wrong.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h5>Explore</h5>
              <ul>
                <li><a href="/#capabilities">Capabilities</a></li>
                <li><a href="/#work">Selected work</a></li>
                <li><a href="/#approach">How we work</a></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Get in touch</h5>
              <ul>
                <li><a href="/#contact">Book a call</a></li>
                <li><a href="mailto:info@gravonlabs.com">info@gravonlabs.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {YEAR} GravonLabs. All rights reserved.</span>
          <span className="mono">Software · Data · AI</span>
        </div>
      </div>
    </footer>
  );
};
