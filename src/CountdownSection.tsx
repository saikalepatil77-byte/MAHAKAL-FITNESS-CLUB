import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getNextMonday(): Date {
  const now = new Date();
  const day = now.getDay();
  const daysUntilMonday = day === 1 ? 7 : (8 - day) % 7;
  const nextMonday = new Date(now);
  nextMonday.setDate(now.getDate() + daysUntilMonday);
  nextMonday.setHours(5, 30, 0, 0);
  return nextMonday;
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [target] = useState<Date>(getNextMonday);

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;
      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };
    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <section
      className="countdown-section"
      id="countdown"
      aria-label="Countdown to your transformation"
    >
      <div className="countdown-bg" aria-hidden="true" />

      {/* Animated particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 30}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      {/* Light rays */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '2px',
          height: '40%',
          background: 'linear-gradient(to bottom, rgba(201,168,76,0.3), transparent)',
          filter: 'blur(4px)',
        }}
      />

      <div className="section-inner" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <div className="reveal">
          <div className="section-label" style={{ justifyContent: 'center' }}>The Clock is Ticking</div>
          <h2
            className="section-heading reveal-delay-1"
            style={{
              textAlign: 'center',
              marginBottom: '1rem',
            }}
          >
            Your Transformation
            <br />
            <strong>Starts Today.</strong>
          </h2>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.15em',
              marginBottom: '4rem',
            }}
          >
            Next gym opens at 5:30 AM Monday
          </p>
        </div>

        {/* Countdown display */}
        <div
          className="countdown-grid reveal reveal-delay-2"
          role="timer"
          aria-label={`Time until next session: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`}
          aria-live="off"
        >
          <div className="countdown-unit">
            <span className="countdown-num">{pad(timeLeft.days)}</span>
            <span className="countdown-unit-label">Days</span>
          </div>

          <div className="countdown-sep" aria-hidden="true">:</div>

          <div className="countdown-unit">
            <span className="countdown-num">{pad(timeLeft.hours)}</span>
            <span className="countdown-unit-label">Hours</span>
          </div>

          <div className="countdown-sep" aria-hidden="true">:</div>

          <div className="countdown-unit">
            <span className="countdown-num">{pad(timeLeft.minutes)}</span>
            <span className="countdown-unit-label">Minutes</span>
          </div>

          <div className="countdown-sep" aria-hidden="true">:</div>

          <div className="countdown-unit">
            <span className="countdown-num" style={{ fontSize: 'clamp(4rem, 9vw, 8rem)' }}>{pad(timeLeft.seconds)}</span>
            <span className="countdown-unit-label">Seconds</span>
          </div>
        </div>

        {/* CTA below */}
        <div
          className="reveal reveal-delay-3"
          style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
        >
          <a
            href="https://wa.me/919130777551"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whatsapp-btn"
            aria-label="Join Mahakal Fitness Club now via WhatsApp"
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            <span>Join Now — +91 91307 77551</span>
          </a>
          <p
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            Gym opens Mon–Sat · 5:30 AM & 4:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}
