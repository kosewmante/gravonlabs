import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// The real, specific capability list — kept as-is, restyled.
const SERVICES = [
  'AI chatbots & assistants',
  'AI automation & training',
  'Corporate learning platforms',
  'IoT-connected dashboards',
  'Live fraud-detection models',
  'Banking credit-risk modelling',
  'Banking scorecard development',
  'Web & mobile apps',
  'Custom internal applications',
];

const EASE: [number, number, number, number] = [0.2, 0, 0, 1];

export const AboutServices = () => {
  return (
    <section className="section section--paper">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Capabilities</div>
          <h2 className="section-title">Everything we take on</h2>
          <p className="section-intro">
            From a single fraud model to a full internal platform — here&rsquo;s the range of work
            we deliver.
          </p>
        </div>

        <div className="services-list">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service}
              className="service-row"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: EASE }}
            >
              <span className="service-index">{(idx + 1).toString().padStart(2, '0')}</span>
              <span className="service-title">{service}</span>
              <ArrowRight className="service-arrow" size={18} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
