import { useMemo } from 'react';

interface Particle {
  id: number;
  left: string;
  bottom: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
}

export default function FloatingParticles({ count = 20 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 20}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${8 + Math.random() * 12}s`,
      size: `${1 + Math.random() * 2}px`,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, [count]);

  return (
    <div className="particles-layer" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
