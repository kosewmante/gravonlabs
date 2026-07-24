import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScorecardPanel } from './visuals/ScorecardPanel';

const EASE: [number, number, number, number] = [0.2, 0, 0, 1];

export const HeroSection = () => {
  return (
    <section className="hero container">
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="eyebrow">Applied AI · Data · Software</div>
          <h1 className="hero-title">
            We build data and AI systems that{' '}
            <span className="accent">can&rsquo;t afford to be wrong.</span>
          </h1>
          <p className="hero-lead">
            Fraud detection, credit-risk scorecards, AI automation, and custom software —
            engineered with the rigor regulated industries demand. No hand-waving, no black boxes.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn--primary btn--lg">
              Book a call
              <ArrowRight size={18} />
            </a>
            <a href="#work" className="btn btn--secondary btn--lg">
              See the work
            </a>
          </div>
          <div className="hero-note">Built for banking, fintech &amp; enterprise data teams</div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        >
          <ScorecardPanel />
        </motion.div>
      </div>
    </section>
  );
};
