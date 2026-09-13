import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'The Gym', target: 'gym' },
  { label: 'Equipment', target: 'equipment' },
  { label: 'Transform', target: 'transformation' },
  { label: 'Membership', target: 'membership' },
  { label: 'Contact', target: 'contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`nav-bar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <button
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Mahakal Fitness Club — scroll to top"
        >
          🔱 Mahakal
        </button>

        <div className="nav-links" role="list">
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              className="nav-link"
              role="listitem"
              onClick={() => scrollTo(link.target)}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <a
          href="https://wa.me/919130777551"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          aria-label="Join Mahakal Fitness Club via WhatsApp"
        >
          Join Now
        </a>

        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile nav overlay */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <button
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '1.5rem', cursor: 'pointer' }}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {NAV_LINKS.map((link) => (
          <button
            key={link.target}
            className="mobile-nav-link"
            onClick={() => scrollTo(link.target)}
          >
            {link.label}
          </button>
        ))}
        <a
          href="https://wa.me/919130777551"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', textDecoration: 'none', marginTop: '1rem' }}
        >
          Join Now →
        </a>
      </div>
    </>
  );
}
