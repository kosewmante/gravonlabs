import { motion } from 'framer-motion';

// Real team. Bios are still placeholders — add the prose, don't invent it.
const TEAM = [
  {
    name: 'Kwadwo Mante',
    role: 'Lead & Founder',
    bio: '[ Short bio — background, and what Kwadwo leads at GravonLabs. ]',
  },
  {
    name: 'Yaw Sampene Buadu',
    role: 'Systems & Software Engineer',
    bio: '[ Short bio — systems & software focus, and what Yaw builds at GravonLabs. ]',
  },
];

const initials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
};

const EASE: [number, number, number, number] = [0.2, 0, 0, 1];

export const AboutTeam = () => {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head section-head--center">
          <div className="eyebrow">The team</div>
          <h2 className="section-title">Meet the GravonLabs Team</h2>
          <p className="section-intro" style={{ marginInline: 'auto' }}>
            Over a decade of expertise.
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
              <span className="team-avatar">{initials(m.name)}</span>
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
