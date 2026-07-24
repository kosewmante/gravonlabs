import { motion } from 'framer-motion';

/**
 * Case studies for COP UK. Problem/approach/outcome copy is drafted from the
 * client + project type — confirm the specifics (and add hard metrics) before
 * treating these as final.
 */

const CASES = [
  {
    sector: 'COP UK · Asset management',
    title: 'Portfolio data platform & risk dashboards',
    rows: [
      { label: 'Problem', text: 'Fund and portfolio data was spread across spreadsheets and vendor exports, which made risk reporting slow and easy to get wrong.', outcome: false },
      { label: 'Approach', text: 'Built a unified data pipeline and a set of exposure and risk dashboards, with validation and access controls baked in.', outcome: false },
      { label: 'Outcome', text: 'A single source of truth for the investment team — reporting that used to take days is now available on demand.', outcome: true },
    ],
  },
  {
    sector: 'COP UK · Corporate learning',
    title: 'AI-powered learning platform',
    rows: [
      { label: 'Problem', text: 'Training was manual and one-size-fits-all, with low completion and little visibility into what was actually landing.', outcome: false },
      { label: 'Approach', text: 'Built a learning platform with an adaptive model that tailors content to each learner, plus analytics on progress and outcomes.', outcome: false },
      { label: 'Outcome', text: 'Personalised learning at scale, with completion and comprehension the team can finally measure.', outcome: true },
    ],
  },
];

const EASE: [number, number, number, number] = [0.2, 0, 0, 1];

export const ProofSection = () => {
  return (
    <section id="work" className="section section--ink">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Selected work</div>
          <h2 className="section-title">Proof, not adjectives</h2>
          <p className="section-intro">
            Two engagements for COP UK — from investment operations to a custom learning platform.
          </p>
        </div>

        <div className="cases">
          {CASES.map((c, i) => (
            <motion.article
              key={c.title}
              className="case-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <div>
                <span className="case-sector">{c.sector}</span>
                <h3 className="case-title">{c.title}</h3>
              </div>
              <div className="case-rows">
                {c.rows.map((r) => (
                  <div className="case-row" key={r.label}>
                    <span className="case-label">{r.label}</span>
                    <span className={`case-text${r.outcome ? ' is-outcome' : ''}`}>{r.text}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
