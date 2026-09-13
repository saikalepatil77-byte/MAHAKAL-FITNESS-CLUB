import { useState } from 'react';

const EQUIPMENT = [
  {
    icon: '🏋️',
    name: 'Olympic Barbells',
    category: 'Strength',
    desc: 'Competition-grade Olympic barbells and plates for powerlifting and strength training.',
  },
  {
    icon: '💪',
    name: 'Dumbbell Rack',
    category: 'Free Weights',
    desc: 'Comprehensive dumbbell set from light to heavy — perfect for isolation exercises.',
  },
  {
    icon: '🔄',
    name: 'Cable Machines',
    category: 'Cable & Pulley',
    desc: 'Functional cable systems for full-body sculpting and functional movement patterns.',
  },
  {
    icon: '🚴',
    name: 'Cardio Zone',
    category: 'Cardiovascular',
    desc: 'Treadmills, stationary bikes, and ellipticals for endurance and fat burn.',
  },
  {
    icon: '🪑',
    name: 'Bench Press',
    category: 'Chest & Push',
    desc: 'Flat, incline, and decline benches — the cornerstone of any chest program.',
  },
  {
    icon: '🦵',
    name: 'Leg Press',
    category: 'Lower Body',
    desc: 'Heavy-duty leg press and squat racks to forge powerful legs and glutes.',
  },
];

export default function EquipmentSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="section"
      id="equipment"
      style={{ background: 'var(--bg-base)' }}
      aria-label="Gym equipment"
    >
      {/* Ambient */}
      <div
        className="glow-blob"
        aria-hidden="true"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', background: 'var(--gold)', opacity: 0.03 }}
      />

      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <div className="section-label">Equipment</div>
          <h2 className="section-heading">
            Machines Built for
            <br />
            <strong>Champions</strong>
          </h2>
          <div className="gold-divider" />
          <p style={{ maxWidth: '480px', fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
            Every machine, every rack, every weight — meticulously chosen to ensure
            you train with the best equipment available in Shrirampur.
          </p>
        </div>

        {/* Equipment grid */}
        <div className="equipment-grid">
          {EQUIPMENT.map((eq, i) => (
            <div
              key={eq.name}
              className={`equipment-item reveal reveal-delay-${(i % 3) + 1}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              role="article"
              aria-label={eq.name}
              style={{
                background: hovered === i
                  ? 'radial-gradient(circle at center, rgba(201,168,76,0.08) 0%, rgba(16,16,16,1) 70%)'
                  : 'var(--bg-mid)',
                transition: 'background 0.6s',
                minHeight: '240px',
              }}
            >
              {/* Number */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1.2rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  color: 'rgba(201,168,76,0.3)',
                  fontWeight: 600,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="equipment-icon" aria-hidden="true">
                {eq.icon}
              </div>

              <div
                className="equipment-item-inner"
                style={{
                  opacity: hovered === i ? 1 : 0,
                  transition: 'opacity 0.4s',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.55rem',
                      letterSpacing: '0.4em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      marginBottom: '0.3rem',
                      fontWeight: 600,
                    }}
                  >
                    {eq.category}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 400,
                      color: 'var(--warm-white)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {eq.name}
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.7 }}>
                    {eq.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal reveal-delay-3"
          style={{
            textAlign: 'center',
            marginTop: '5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 300,
              color: 'var(--warm-white)',
              lineHeight: 1.4,
              marginBottom: '2rem',
            }}
          >
            Ready to experience it for yourself?
          </p>
          <a
            href="https://wa.me/919130777551"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Book a tour of Mahakal Fitness Club"
          >
            <span>Book a Tour</span>
          </a>
        </div>
      </div>
    </section>
  );
}
