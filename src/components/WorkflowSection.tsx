import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'Scope with the people who own the problem',
    desc: 'We start with your team, your data, and the decision that has to get better — not a generic discovery deck.',
  },
  {
    num: '02',
    title: 'Build it explainable and audit-ready',
    desc: 'Models ship with reason codes and documentation. Software ships with tests. Nothing is a black box you can’t defend.',
  },
  {
    num: '03',
    title: 'Ship, monitor, and hand over',
    desc: 'We deploy to production, put monitoring around it, and train your team to run it — so you’re not dependent on us forever.',
  },
];

const EASE: [number, number, number, number] = [0.2, 0, 0, 1];

export const WorkflowSection = () => {
  return (
    <section id="approach" className="section section--paper">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">How we work</div>
          <h2 className="section-title">Senior people, in the room, all the way to production</h2>
          <p className="section-intro">
            No account managers relaying messages to an offshore team. You work directly with the
            people building the thing.
          </p>
        </div>

        <div className="how-grid">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="how-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <div className="how-num">{step.num}</div>
              <h3 className="how-title">{step.title}</h3>
              <p className="how-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
