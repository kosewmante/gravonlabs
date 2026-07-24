import { motion } from 'framer-motion';

/**
 * Case studies. These are written as illustrative TEMPLATES — realistic examples
 * of how a real engagement is described — and are clearly marked "illustrative".
 * The measurable outcome on each card is left as an explicit placeholder so real
 * numbers replace it rather than being invented.
 */

const CASES = [
  {
    sector: 'Retail banking · illustrative',
    title: 'Real-time card-fraud scoring',
    rows: [
      { label: 'Problem', text: 'Rules-based checks were missing newer fraud patterns while flagging too many legitimate customers.' },
      { label: 'Approach', text: 'Built and validated a gradient-boosted scoring model with per-decision reason codes, deployed behind the existing decision engine.' },
    ],
    metric: '[ real result — e.g. false positives −38% ]',
  },
  {
    sector: 'Lending · illustrative',
    title: 'Credit-risk scorecard rebuild',
    rows: [
      { label: 'Problem', text: 'An ageing scorecard was decaying in performance and hard to defend to auditors.' },
      { label: 'Approach', text: 'Rebuilt it end-to-end with documented, monotonic, regulator-ready logic and ongoing performance monitoring.' },
    ],
    metric: '[ real result — e.g. Gini +0.06, fully audit-ready ]',
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
            Two representative engagements. They&rsquo;re marked <em>illustrative</em> until we
            swap in named, client-approved case studies — the structure is exactly how the real
            ones will read.
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
                    <span className="case-text">{r.text}</span>
                  </div>
                ))}
                <div className="case-row">
                  <span className="case-label">Outcome</span>
                  <span className="case-placeholder">{c.metric}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
