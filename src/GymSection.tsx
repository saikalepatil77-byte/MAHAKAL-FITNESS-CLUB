import FloatingParticles from './FloatingParticles';

const STATS = [
  { value: '5★', label: 'Google Rating' },
  { value: '100+', label: 'Active Members' },
  { value: '2+', label: 'Years Strong' },
  { value: '∞', label: 'Dedication' },
];

const PILLARS = [
  {
    icon: '🏋️',
    title: 'Premium Machines',
    desc: 'World-class strength and cardio equipment — kept immaculately maintained for an elite training experience.',
  },
  {
    icon: '🧠',
    title: 'Expert Guidance',
    desc: 'Certified trainers who design personalized programs aligned with your body, goals, and schedule.',
  },
  {
    icon: '🔱',
    title: 'Mahadev Energy',
    desc: 'Train with the blessings of Mahakal. A space that channels discipline, power, and fearlessness.',
  },
  {
    icon: '🤝',
    title: 'Positive Community',
    desc: 'Surround yourself with focused individuals who push each other toward greatness every single day.',
  },
];

export default function GymSection() {
  return (
    <section className="section" id="gym" style={{ background: 'var(--bg-mid)' }} aria-label="About the gym">
      <div className="particles-layer" aria-hidden="true">
        <FloatingParticles count={12} />
      </div>

      {/* Glow blob */}
      <div
        className="glow-blob"
        aria-hidden="true"
        style={{ top: '20%', right: '10%', width: '500px', height: '500px', background: 'var(--copper)' }}
      />

      <div className="section-inner">
        {/* Header */}
        <div className="reveal">
          <div className="section-label">The Gym</div>
          <h2 className="section-heading">
            Where Iron Meets
            <br />
            <strong>Divinity</strong>
          </h2>
          <div className="gold-divider" />
          <p
            style={{
              maxWidth: '560px',
              fontSize: '0.95rem',
              lineHeight: 2,
              color: 'var(--text-muted)',
              marginBottom: '4rem',
            }}
          >
            Mahakal Fitness Club isn't just a gym. It's a temple of transformation —
            where every rep, every drop of sweat, and every breath brings you closer
            to the strongest version of yourself.
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2px',
            marginBottom: '5rem',
          }}
          className="reveal reveal-delay-2"
          role="list"
          aria-label="Gym statistics"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              role="listitem"
              style={{
                padding: '2.5rem 2rem',
                background: 'rgba(255,255,255,0.02)',
                borderLeft: i === 0 ? '1px solid rgba(201,168,76,0.15)' : 'none',
                borderRight: '1px solid rgba(201,168,76,0.15)',
                borderTop: '1px solid rgba(255,255,255,0.04)',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Pillars grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5px',
          }}
        >
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card reveal reveal-delay-${i + 1}`}
              style={{ padding: '3rem' }}
              role="article"
            >
              <div
                aria-hidden="true"
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '1.5rem',
                  filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.3))',
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  fontWeight: 400,
                  color: 'var(--warm-white)',
                  marginBottom: '1rem',
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Location badge */}
        <div
          className="reveal reveal-delay-3"
          style={{
            marginTop: '4rem',
            padding: '2rem 2.5rem',
            background: 'rgba(201,168,76,0.03)',
            border: '1px solid rgba(201,168,76,0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: '0.5rem' }}>Find Us</div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--warm-white)' }}>
              JM74+6JW, Shrirampur, Maharashtra 413709
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Mahakal+Fitness+Club+Shrirampur+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="Get directions to Mahakal Fitness Club"
            style={{ fontSize: '0.65rem', whiteSpace: 'nowrap' }}
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
}
