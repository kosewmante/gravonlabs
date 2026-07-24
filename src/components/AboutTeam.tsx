import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';

/**
 * Honest team section. The previous version invented three executives with stock
 * headshots. Until real names/bios are supplied these are role-based placeholders,
 * clearly marked — no fabricated people.
 */

const ROLES = [
  {
    role: 'Founder & Principal',
    tags: ['Data science', 'Risk modelling', 'Delivery'],
  },
  {
    role: 'Lead Engineer',
    tags: ['Platforms', 'MLOps', 'Production'],
  },
  {
    role: 'Advisory & Strategy',
    tags: ['AI strategy', 'Training', 'Coaching'],
  },
];

const EASE: [number, number, number, number] = [0.2, 0, 0, 1];

export const AboutTeam = () => {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head section-head--center">
          <div className="eyebrow">The team</div>
          <h2 className="section-title">The people doing the work</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>
            A small, senior team — no juniors learning on your problem. Real names and bios drop
            straight into the cards below.
          </p>
        </div>

        <div className="team-grid">
          {ROLES.map((m, i) => (
            <motion.div
              key={m.role}
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <span className="team-avatar"><Hexagon size={24} /></span>
              <div>
                <div className="team-role">{m.role}</div>
                <div className="team-name is-placeholder">Name to be added</div>
              </div>
              <p className="team-bio">
                One or two sentences: background, the kind of systems this person has shipped, and
                what they own at GravonLabs.
              </p>
              <div className="team-tags">
                {m.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
