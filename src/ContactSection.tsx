import FloatingParticles from './FloatingParticles';

const HOURS = [
  { day: 'Monday', time: '5:30 AM – 12:00 PM  ·  4:00 PM – 10:00 PM', open: true },
  { day: 'Tuesday', time: '5:30 AM – 12:00 PM  ·  4:00 PM – 10:00 PM', open: true },
  { day: 'Wednesday', time: '5:30 AM – 12:00 PM  ·  4:00 PM – 10:00 PM', open: true },
  { day: 'Thursday', time: '5:30 AM – 12:00 PM  ·  4:00 PM – 10:00 PM', open: true },
  { day: 'Friday', time: '5:30 AM – 12:00 PM  ·  4:00 PM – 10:00 PM', open: true },
  { day: 'Saturday', time: '5:30 AM – 12:00 PM  ·  4:00 PM – 10:00 PM', open: true },
  { day: 'Sunday', time: 'Closed', open: false },
];

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    handle: '@mahakal_fitnessclub_shrirampur',
    href: 'https://instagram.com/mahakal_fitnessclub_shrirampur',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@maheshwarifitnessclub15',
    href: 'https://youtube.com/@maheshwarifitnessclub15',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-label="Contact Mahakal Fitness Club"
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingParticles count={10} />
      </div>

      <div className="section-inner">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: '5rem' }}>
          <div className="section-label">Contact</div>
          <h2 className="section-heading">
            Let's Begin
            <br />
            <strong>Your Story.</strong>
          </h2>
          <div className="gold-divider" />
          <p style={{ maxWidth: '480px', fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
            Walk in. Call. WhatsApp. Email. However you reach us,
            you'll be welcomed into the Mahakal family.
          </p>
        </div>

        {/* Main contact grid */}
        <div className="contact-grid">
          {/* Left — info & actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Location */}
            <div
              className="reveal"
              style={{
                padding: '2rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(201,168,76,0.1)',
              }}
            >
              <div className="contact-info-label">📍 Location</div>
              <address
                className="contact-info-value"
                style={{ fontStyle: 'normal' }}
              >
                JM74+6JW, Shrirampur<br />
                Maharashtra 413709, India
              </address>
            </div>

            {/* Action buttons */}
            <div
              className="reveal reveal-delay-1"
              style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
            >
              {/* Call */}
              <a
                href="tel:+919130777551"
                className="contact-action-btn"
                aria-label="Call Mahakal Fitness Club"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span style={{ flex: 1 }}>Call Us</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>+91 91307 77551</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919130777551"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn"
                aria-label="WhatsApp Mahakal Fitness Club"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                <span style={{ flex: 1 }}>WhatsApp</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>+91 91307 77551</span>
              </a>

              {/* Email */}
              <a
                href="mailto:maheshwarigym15@gmail.com"
                className="contact-action-btn"
                aria-label="Email Mahakal Fitness Club at maheshwarigym15@gmail.com"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span style={{ flex: 1 }}>Email Us</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>maheshwarigym15@gmail.com</span>
              </a>

              {/* Google Maps */}
              <a
                href="https://maps.google.com/?q=JM74%2B6JW+Shrirampur+Maharashtra+413709"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn"
                aria-label="Get directions to Mahakal Fitness Club on Google Maps"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ flex: 1 }}>Get Directions</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>Google Maps</span>
              </a>
            </div>

            {/* Social links */}
            <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action-btn"
                  aria-label={`Follow Mahakal Fitness Club on ${s.name}`}
                >
                  {s.icon}
                  <span style={{ flex: 1 }}>{s.name}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>{s.handle}</span>
                </a>
              ))}
            </div>

            {/* Google Rating */}
            <div
              className="reveal reveal-delay-3"
              style={{
                padding: '1.5rem 2rem',
                background: 'rgba(201,168,76,0.04)',
                border: '1px solid rgba(201,168,76,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div>
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.25rem', letterSpacing: '0.1em' }}>
                  5.0 · Google Business · 2 Reviews
                </div>
              </div>
              <div
                style={{
                  marginLeft: 'auto',
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'transparent',
                  background: 'linear-gradient(135deg, var(--copper), var(--gold))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                5.0
              </div>
            </div>
          </div>

          {/* Right — hours + map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Business Hours */}
            <div
              className="reveal reveal-delay-1"
              style={{
                padding: '2.5rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Business Hours</div>
              <dl>
                {HOURS.map((h) => (
                  <div key={h.day} className="hours-row" role="term">
                    <dt className="day">{h.day}</dt>
                    <dd className={h.open ? '' : 'closed'}>{h.time}</dd>
                  </div>
                ))}
              </dl>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(201,168,76,0.1)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                <span style={{ color: 'var(--gold)' }}>Morning Session:</span> 5:30 AM – 12:00 PM<br />
                <span style={{ color: 'var(--gold)' }}>Evening Session:</span> 4:00 PM – 10:00 PM
              </div>
            </div>

            {/* Google Map embed */}
            <div
              className="reveal reveal-delay-2 map-container"
              aria-label="Map showing Mahakal Fitness Club location in Shrirampur"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.123456789!2d74.72!3d19.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc5e2c0a6b3c21%3A0x123456789abcdef!2sMahakal%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahakal Fitness Club location on Google Maps"
              />
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="footer-bar">
          <p className="footer-copy">
            © {new Date().getFullYear()} Mahakal Fitness Club · Shrirampur, Maharashtra ·&nbsp;
            <a href="mailto:maheshwarigym15@gmail.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
              maheshwarigym15@gmail.com
            </a>
          </p>

          <div className="footer-social" role="list" aria-label="Social media links">
            {/* Instagram */}
            <a
              href="https://instagram.com/mahakal_fitnessclub_shrirampur"
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="Mahakal Fitness Club on Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@maheshwarifitnessclub15"
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="Mahakal Fitness Club on YouTube"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919130777551"
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              aria-label="WhatsApp Mahakal Fitness Club"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:maheshwarigym15@gmail.com"
              role="listitem"
              aria-label="Email Mahakal Fitness Club"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Final line */}
        <div
          style={{
            textAlign: 'center',
            padding: '2rem 0 3rem',
            fontSize: '0.55rem',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.15)',
          }}
        >
          🔱 &nbsp; Har Har Mahadev &nbsp; 🔱
        </div>
      </div>
    </section>
  );
}
