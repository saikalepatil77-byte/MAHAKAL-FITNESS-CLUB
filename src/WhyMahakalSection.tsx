import { useEffect, useRef, useState } from 'react';

const REASONS = [
  {
    number: '01',
    title: 'Five Star Experience',
    icon: '★',
    desc: 'Rated 5.0 on Google. Not because we asked — but because our members felt it. Every visit, every session, every result.',
  },
  {
    number: '02',
    title: 'Premium Equipment',
    icon: '🏋️',
    desc: 'Every machine is maintained to perfection. You train on equipment that respects your effort and supports your progress.',
  },
  {
    number: '03',
    title: 'Iron Discipline',
    icon: '⚡',
    desc: 'A culture of seriousness and focus. We don\'t just work out here — we build character, one session at a time.',
  },
  {
    number: '04',
    title: 'Positive Environment',
    icon: '🤝',
    desc: 'The energy here is different. Everyone supports each other. Egos are left at the door. Growth is the only agenda.',
  },
  {
    number: '05',
    title: 'Expert Guidance',
    icon: '🎯',
    desc: 'Our trainers understand bodies, goals, and limitations. Your program is designed for you — not a template.',
  },
  {
    number: '06',
    title: 'Mahadev\'s Blessing',
    icon: '🔱',
    desc: 'We train under the name of the greatest. Mahakal\'s energy flows through every wall, every machine, every member.',
  },
];

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function WhyMahakalSection() {
  return (
    <section
      className="section"
      id="why"
      style={{ background: 'var(--bg-mid)', paddingBottom: '10rem' }}
      aria-label="Why choose Mahakal Fitness Club"
    >
      {/* Ambient glow */}
      <div
        className="glow-blob"
        aria-hidden="true"
        style={{ bottom: '10%', left: '20%', width: '600px', height: '400px', background: 'var(--gold)', opacity: 0.03 }}
      />

      <div className="section-inner">
        {/* Header */}
        <div
          className="reveal"
          style={{
            textAlign: 'center',
            marginBottom: '5rem',
          }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Why Mahakal</div>
          <h2
            className="section-heading"
            style={{ textAlign: 'center' }}
          >
            We Don't Just Build Bodies.
            <br />
            <strong>We Build Warriors.</strong>
          </h2>
          <div className="gold-divider" style={{ margin: '2rem auto' }} />
        </div>

        {/* Animated stats */}
        <div
          className="reveal reveal-delay-1"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.04)',
            marginBottom: '5rem',
          }}
          role="list"
          aria-label="Key statistics"
        >
          {[
            { value: 5, suffix: '★', label: 'Google Rating' },
            { value: 100, suffix: '+', label: 'Active Members' },
            { value: 12, suffix: ' hrs', label: 'Daily Access' },
            { value: 6, suffix: '/7', label: 'Days Open' },
          ].map((stat) => (
            <div
              key={stat.label}
              role="listitem"
              style={{
                background: 'var(--bg-mid)',
                padding: '3rem 1.5rem',
              }}
            >
              <AnimatedStat {...stat} />
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="why-grid">
          {REASONS.map((reason, i) => (
            <div
              key={reason.title}
              className={`why-item reveal reveal-delay-${(i % 3) + 1}`}
              role="article"
            >
              <div className="why-number" aria-hidden="true">{reason.number}</div>

              <div
                aria-hidden="true"
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '1rem',
                  filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.3))',
                }}
              >
                {reason.icon}
              </div>

              <h3 className="why-title">{reason.title}</h3>
              <p className="why-desc">{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* Final quote */}
        <div
          className="reveal reveal-delay-3"
          style={{
            textAlign: 'center',
            marginTop: '5rem',
            padding: '4rem 2rem',
            border: '1px solid rgba(201,168,76,0.08)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              fontSize: '5rem',
              marginBottom: '1.5rem',
              filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.4))',
              position: 'relative',
            }}
          >
            🔱
          </div>
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--warm-white)',
              lineHeight: 1.5,
              position: 'relative',
            }}
          >
            "Har Har Mahadev."
          </blockquote>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '1rem', position: 'relative' }}>
            Mahakal Fitness Club · Shrirampur
          </p>
        </div>
      </div>
    </section>
  );
}
