import { motion } from 'framer-motion';

/**
 * An illustrative risk-scorecard panel — a representative example of the kind
 * of decisioning work GravonLabs builds. Clearly marked as a sample so it never
 * reads as live telemetry. All values are static and made-up on purpose.
 */

type Tone = 'pos' | 'warn' | 'neg';

const FACTORS: { label: string; value: number; tone: Tone }[] = [
  { label: 'Payment history', value: 88, tone: 'pos' },
  { label: 'Credit utilisation', value: 54, tone: 'warn' },
  { label: 'Income stability', value: 79, tone: 'pos' },
  { label: 'Recent inquiries', value: 33, tone: 'neg' },
];

const TONE_COLOR: Record<Tone, string> = {
  pos: 'var(--data-pos)',
  warn: 'var(--data-warn)',
  neg: 'var(--data-neg)',
};

const SCORE = 742;
const MIN = 300;
const MAX = 850;
const FRAC = (SCORE - MIN) / (MAX - MIN);
const ARC = Math.PI * 88; // semicircle of radius 88
const EASE: [number, number, number, number] = [0.2, 0, 0, 1];

export const ScorecardPanel = () => {
  return (
    <div className="scorecard" role="img" aria-label="Illustrative credit-risk scorecard: applicant scores 742 of 850, decision approve — low risk.">
      <div className="scorecard-head">
        <span className="scorecard-tag">Risk decision · sample</span>
        <span className="scorecard-ref">SCR&nbsp;2.4</span>
      </div>

      <div className="scorecard-gauge">
        <svg className="gauge-svg" viewBox="0 0 200 118" aria-hidden="true">
          <path className="gauge-track" d="M12,112 A88,88 0 0 1 188,112" />
          <motion.path
            className="gauge-value"
            d="M12,112 A88,88 0 0 1 188,112"
            strokeDasharray={ARC}
            initial={{ strokeDashoffset: ARC }}
            whileInView={{ strokeDashoffset: ARC * (1 - FRAC) }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
          />
        </svg>
        <div className="scorecard-score">
          <span className="score-num">{SCORE}</span>
          <span className="score-scale">/ 850</span>
        </div>
      </div>

      <div className="scorecard-decision">
        <span className="decision-dot" />
        Approve · low risk
      </div>

      <div className="scorecard-factors">
        {FACTORS.map((f, i) => (
          <div className="factor" key={f.label}>
            <div className="factor-top">
              <span className="factor-label">{f.label}</span>
              <span className="factor-val">{f.value}</span>
            </div>
            <span className="factor-track">
              <motion.span
                className="factor-fill"
                style={{ background: TONE_COLOR[f.tone] }}
                initial={{ width: 0 }}
                whileInView={{ width: `${f.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35 + i * 0.09, ease: EASE }}
              />
            </span>
          </div>
        ))}
      </div>

      <div className="scorecard-foot">
        <span>Explainable · audit-ready</span>
        <span>Illustrative</span>
      </div>
    </div>
  );
};
