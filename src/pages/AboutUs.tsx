import { Check } from 'lucide-react';
import { AboutServices } from '../components/AboutServices';
import { AboutTeam } from '../components/AboutTeam';
import { ContactSection } from '../components/ContactSection';

const POINTS = [
  'Senior engineers & data scientists — no juniors learning on your problem',
  'Deep roots in regulated finance: fraud, credit risk, scorecards',
  'We ship to production, then hand it over — not slideware',
];

export const AboutUs = () => {
  return (
    <main>
      <section className="section section--paper">
        <div className="container">
          <div className="about-hero-grid">
            <div>
              <div className="eyebrow">About GravonLabs</div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.03em' }}>
                The team you call when the model has to be right.
              </h1>
              <p className="about-lead">
                GravonLabs is a software, data, and AI studio. We build the systems where a wrong
                answer is expensive — fraud detection, credit-risk scorecards, AI automation, and
                the custom software around them — and we bring the rigor of regulated finance to
                every client, whatever the industry.
              </p>
              <ul className="about-points">
                {POINTS.map((p) => (
                  <li key={p}>
                    <span className="check"><Check size={13} strokeWidth={3} /></span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="about-panel">
              <p className="quote">
                We&rsquo;d rather tell you a model{' '}
                <span className="accent">isn&rsquo;t ready</span> than ship one that fails an audit.
              </p>
              <div className="attrib">— How we operate</div>
            </aside>
          </div>
        </div>
      </section>

      <AboutServices />
      <AboutTeam />
      <ContactSection />
    </main>
  );
};
