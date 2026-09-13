import { useEffect, useRef } from 'react';
import FloatingParticles from './FloatingParticles';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (overlayRef.current) {
        const opacity = Math.min(0.95, 0.4 + scrollY / 600);
        overlayRef.current.style.opacity = String(opacity);
      }
      if (videoRef.current) {
        videoRef.current.style.transform = `scale(1.05) translateY(${scrollY * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollDown = () => {
    const gymSection = document.getElementById('gym');
    if (gymSection) gymSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero" aria-label="Mahakal Fitness Club hero">
      {/* Video background */}
      <video
        ref={videoRef}
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{ transform: 'scale(1.05)' }}
      >
        {/* Users can replace this src with their actual gym video */}
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Fallback image background when no video */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) saturate(0.7)',
          zIndex: 1,
        }}
      />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="hero-overlay"
        aria-hidden="true"
        style={{ zIndex: 2, opacity: 0.4 }}
      />

      {/* Ambient light leak */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,115,51,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 3,
          pointerEvents: 'none',
          animation: 'pulse-gold 6s ease-in-out infinite',
        }}
      />

      {/* Floating particles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 4 }}>
        <FloatingParticles count={25} />
      </div>

      {/* Vertical lines */}
      <div className="bg-lines" style={{ zIndex: 3 }}>
        {[15, 30, 50, 70, 85].map((left, i) => (
          <div
            key={i}
            className="bg-line"
            style={{ left: `${left}%`, animationDelay: `${i * 1.5}s` }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="hero-content" style={{ zIndex: 10 }}>
        <div className="hero-eyebrow">
          <span role="img" aria-label="Trident">🔱</span> &nbsp; Est. Shrirampur, Maharashtra
        </div>

        <h1 className="hero-title">
          Mahakal
          <span>Fitness Club</span>
        </h1>

        <p className="hero-tagline">
          Stronger Body · Stronger Mind ·&nbsp;
          <em>Mahadev Blessings</em>
        </p>

        <div className="hero-cta-group">
          <a
            href="https://wa.me/919130777551"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Join Mahakal Fitness Club via WhatsApp"
          >
            <span>Start Your Journey</span>
          </a>
          <button
            className="btn-ghost"
            onClick={handleScrollDown}
            aria-label="Explore the gym"
          >
            Explore the Gym
          </button>
        </div>

        {/* Rating badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            opacity: 0,
            animation: 'fadeInUp 1s 2.7s ease forwards',
          }}
        >
          <div className="stars" aria-label="5 star rating">★★★★★</div>
          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>
            5.0 Google Rating
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
