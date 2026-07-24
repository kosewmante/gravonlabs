import { motion } from 'framer-motion';

const AUDIENCES = [
  {
    title: 'Banks & financial institutions',
    desc: 'Fraud, AML, credit risk, and scorecards that stand up to auditors and risk committees.',
  },
  {
    title: 'Enterprises',
    desc: 'Custom software, data platforms, and AI automation for teams that can’t afford downtime or guesswork.',
  },
  {
    title: 'Fintechs & scale-ups',
    desc: 'Senior data and engineering muscle to ship the risk and AI features you can’t yet hire for.',
  },
];

const EASE: [number, number, number, number] = [0.2, 0, 0, 1];

export const WhoWeHelp = () => {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="who-inner">
          <div>
            <div className="eyebrow">Who we help</div>
            <p className="who-lede">
              We start where the standard is highest — <strong>regulated finance</strong> — then
              bring that same rigor to everyone else. If a model has to satisfy a bank&rsquo;s risk
              committee, your problem is well within reach.
            </p>
          </div>

          <div className="who-list">
            {AUDIENCES.map((a, i) => (
              <motion.div
                key={a.title}
                className="who-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
              >
                <h3 className="who-card-title">{a.title}</h3>
                <p className="who-card-desc">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
