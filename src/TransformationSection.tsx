import { useRef, useState, useCallback } from 'react';

const QUOTES = [
  {
    text: "The body achieves what the mind believes.",
    author: "Mahakal Fitness Philosophy",
  },
  {
    text: "Every rep is a prayer. Every drop of sweat is devotion.",
    author: "Train with Purpose",
  },
  {
    text: "Strength isn't given. It's earned in silence, built in darkness.",
    author: "Discipline Over Motivation",
  },
];

const TRANSFORMATIONS = [
  { label: 'Strength', before: 'Before — 3 months', after: 'After — Total Transformation', emoji: '💪' },
  { label: 'Endurance', before: 'Before — Starting out', after: 'After — Peak Condition', emoji: '🔥' },
  { label: 'Body Recomp', before: 'Before — Day 1', after: 'After — 180 Days', emoji: '⚡' },
];

export default function TransformationSection() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  }, [isDragging]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  return (
    <section
      className="section"
      id="transformation"
      style={{ background: 'var(--bg-mid)', paddingTop: '10rem', paddingBottom: '10rem' }}
      aria-label="Member transformations"
    >
      {/* Glow */}
      <div
        className="glow-blob"
        aria-hidden="true"
        style={{ top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'var(--burnt-orange)', borderRadius: '0 0 50% 50%' }}
      />

      <div className="section-inner">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: '5rem', maxWidth: '600px' }}>
          <div className="section-label">Transformation</div>
          <h2 className="section-heading">
            Real People.
            <br />
            <strong>Real Results.</strong>
          </h2>
          <div className="gold-divider" />
          <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
            Our members don't just change their bodies — they rebuild their entire relationship with
            strength, discipline, and self-belief.
          </p>
        </div>

        {/* Before / After Slider Demo */}
        <div
          className="reveal reveal-delay-2"
          style={{ marginBottom: '5rem' }}
        >
          <div
            ref={sliderRef}
            className="transform-slider"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            aria-label="Before and after slider — drag to reveal"
            style={{
              width: '100%',
              maxWidth: '900px',
              margin: '0 auto',
              height: 'clamp(280px, 40vw, 500px)',
              position: 'relative',
              overflow: 'hidden',
              userSelect: 'none',
              cursor: 'col-resize',
            }}
          >
            {/* BEFORE side */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1508 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ textAlign: 'center', opacity: 0.5 }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💪</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Before
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--warm-white)', marginTop: '0.5rem' }}>
                  Day One
                </div>
              </div>
            </div>

            {/* AFTER side — clipped */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                transition: isDragging ? 'none' : 'clip-path 0.1s',
                background: 'linear-gradient(135deg, rgba(184,115,51,0.15) 0%, rgba(201,168,76,0.08) 50%, #0d0d0a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.5))' }}>🏆</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  After
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--warm-white)', marginTop: '0.5rem' }}>
                  Total Transformation
                </div>
              </div>
            </div>

            {/* Slider handle */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${sliderPos}%`,
                width: '2px',
                background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
                transform: 'translateX(-50%)',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  boxShadow: '0 0 20px rgba(201,168,76,0.5)',
                }}
              >
                ↔
              </div>
            </div>

            {/* Labels */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                fontWeight: 600,
              }}
            >
              Before
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                fontWeight: 600,
              }}
            >
              After
            </div>
          </div>

          <p
            style={{
              textAlign: 'center',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginTop: '1.5rem',
            }}
          >
            Drag to reveal the transformation
          </p>
        </div>

        {/* Rotating quotes */}
        <div
          className="reveal reveal-delay-3"
          style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.3rem, 3vw, 2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--warm-white)',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              minHeight: '4em',
              transition: 'opacity 0.5s',
            }}
          >
            "{QUOTES[activeQuote].text}"
          </div>
          <div
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '2rem',
            }}
          >
            — {QUOTES[activeQuote].author}
          </div>

          {/* Quote selector dots */}
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}
            role="tablist"
            aria-label="Select quote"
          >
            {QUOTES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeQuote}
                aria-label={`Quote ${i + 1}`}
                onClick={() => setActiveQuote(i)}
                style={{
                  width: i === activeQuote ? '24px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: i === activeQuote ? 'var(--gold)' : 'rgba(255,255,255,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Transformation cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
            marginTop: '5rem',
          }}
        >
          {TRANSFORMATIONS.map((t, i) => (
            <div
              key={t.label}
              className={`glass-card reveal reveal-delay-${i + 1}`}
              style={{ padding: '2.5rem 2rem', textAlign: 'center' }}
              role="article"
            >
              <div
                aria-hidden="true"
                style={{ fontSize: '2.5rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.3))' }}
              >
                {t.emoji}
              </div>
              <div
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                }}
              >
                {t.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>{t.before}</div>
              <div
                aria-hidden="true"
                style={{ color: 'var(--gold)', margin: '0.5rem 0' }}
              >
                ↓
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--warm-white)', fontWeight: 500 }}>{t.after}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
