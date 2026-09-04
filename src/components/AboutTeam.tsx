import { motion } from 'framer-motion';

// Real team. Bios are still placeholders — add the prose, don't invent it.
const TEAM = [
  {
    name: 'Kwadwo',
    role: 'Lead & Founder',
    photo: '/images/team/kwadwo',
    bio: 'With over two decades of leadership spanning financial risk modeling, credit analytics, and modern AI engineering, Kwadwo founded GravonLabs to bring bank-grade rigor to mission-critical software. Holding an MSc in Analytics, he directs overall product vision and technical architecture—transforming complex predictive algorithms, fraud detection systems, and AI workflows into resilient, scalable platforms that solve high-stakes industry problems',
  },
  {
    name: 'Yaw Sampene Buadu',
    role: 'Systems & Software Engineer',
    photo: '/images/team/yaw',
    bio: 'Holding an MSc in Systems and Software Engineering and conducting doctoral research in Computing and Communications at The Open University, Yaw anchors the systems architecture at GravonLabs. He specializes in distributed system design, human-computer interaction, and high-performance cloud infrastructure—engineering the robust, fault-tolerant foundations that power GravonLabs\'s data engines and AI platforms.',
  },
];

const EASE: [number, number, number, number] = [0.2, 0, 0, 1];

export const AboutTeam = () => {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head section-head--center">
          <div className="eyebrow">The team</div>
          <h2 className="section-title">Meet the GravonLabs Team</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>
            Over two decades of expertise.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <picture className="team-avatar">
                <source srcSet={`${m.photo}.webp`} type="image/webp" />
                <img
                  src={`${m.photo}.jpg`}
                  alt={m.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div>
                <div className="team-role">{m.role}</div>
                <div className="team-name">{m.name}</div>
              </div>
              <p className="team-bio is-placeholder">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
