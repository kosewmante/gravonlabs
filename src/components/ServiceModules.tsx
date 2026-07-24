import { motion } from 'framer-motion';
import { ShieldCheck, Bot, Boxes, Compass } from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'risk',
    icon: <ShieldCheck size={22} />,
    title: 'Risk & fraud modelling',
    desc: 'Fraud detection, AML, and credit-risk scorecards — models that are accurate, explainable, and built to survive a regulator’s review.',
    tags: ['Fraud', 'Credit risk', 'Scorecards', 'AML'],
  },
  {
    id: 'ai',
    icon: <Bot size={22} />,
    title: 'AI automation & assistants',
    desc: 'Assistants, document processing, and workflow automation grounded in your own data — with guardrails, and humans kept in the loop where it counts.',
    tags: ['LLM assistants', 'RAG', 'Automation'],
  },
  {
    id: 'software',
    icon: <Boxes size={22} />,
    title: 'Custom software & data platforms',
    desc: 'Web, mobile, and internal apps — plus the data pipelines and dashboards underneath. Shipped to production and handed over maintainable.',
    tags: ['Web / Mobile', 'Dashboards', 'Data platforms'],
  },
  {
    id: 'advisory',
    icon: <Compass size={22} />,
    title: 'Advisory & enablement',
    desc: 'AI strategy, executive coaching, and team training — so your people can run and extend what we build, instead of depending on us forever.',
    tags: ['Strategy', 'Training', 'Coaching'],
  },
];

const EASE: [number, number, number, number] = [0.2, 0, 0, 1];

export const ServiceModules = () => {
  return (
    <section id="capabilities" className="section section--alt">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">What we do</div>
          <h2 className="section-title">Four things we&rsquo;re genuinely good at</h2>
          <p className="section-intro">
            We&rsquo;re a small, senior team, and we take on the work where being wrong is
            expensive. We&rsquo;d rather do four things properly than list twenty.
          </p>
        </div>

        <div className="cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.id}
              className="cap-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            >
              <span className="cap-icon">{cap.icon}</span>
              <h3 className="cap-title">{cap.title}</h3>
              <p className="cap-desc">{cap.desc}</p>
              <div className="cap-tags">
                {cap.tags.map((t) => (
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
