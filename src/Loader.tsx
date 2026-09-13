import { useEffect, useState, useMemo } from 'react';

interface SmokeParticle {
  id: number;
  size: string;
  left: string;
  bottom: string;
  delay: string;
  duration: string;
}

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  const smokeParticles = useMemo<SmokeParticle[]>(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: `${80 + Math.random() * 120}px`,
      left: `${10 + Math.random() * 80}%`,
      bottom: `${5 + Math.random() * 20}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${3 + Math.random() * 3}s`,
    }));
  }, []);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 4 + 1;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setHidden(true);
          onComplete();
        }, 600);
      }
      setProgress(Math.min(100, Math.round(current)));
    }, 45);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loader-overlay${hidden ? ' hidden' : ''}`} role="status" aria-label="Loading Mahakal Fitness Club">
      {/* Smoke particles */}
      {smokeParticles.map((p) => (
        <div
          key={p.id}
          className="smoke-particle"
          aria-hidden="true"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: p.bottom,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,115,51,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'pulse-gold 4s ease-in-out infinite',
        }}
      />

      {/* Logo & content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        {/* Trident / Om symbol */}
        <div
          aria-hidden="true"
          style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            animation: 'fadeInUp 1s 0.2s ease both',
            filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.4))',
          }}
        >
          🔱
        </div>

        <div className="loader-logo" style={{ animation: 'fadeInUp 1s 0.4s ease both, shimmer 3s linear infinite' }}>
          Mahakal
        </div>
        <div className="loader-logo" style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', animation: 'fadeInUp 1s 0.6s ease both, shimmer 3s linear infinite' }}>
          Fitness Club
        </div>
        <div className="loader-sub" style={{ animation: 'fadeInUp 1s 0.8s ease both' }}>
          Shrirampur · Maharashtra · India
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', animation: 'fadeInUp 1s 1s ease both' }}>
        <div className="loader-bar-track">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="loader-percent">{progress}%</div>
        <div className="loader-sub" style={{ fontSize: '0.55rem', letterSpacing: '0.5em' }}>
          Stronger Body · Stronger Mind · Mahadev Blessings
        </div>
      </div>
    </div>
  );
}
