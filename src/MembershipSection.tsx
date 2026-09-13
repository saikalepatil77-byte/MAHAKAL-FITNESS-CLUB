import { useState } from 'react';

const PLANS = [
  {
    name: 'Monthly',
    period: 'Per Month',
    features: [
      'Full gym access',
      'All equipment included',
      'Locker facility',
      'Mon–Sat access',
      'Flexible schedule',
    ],
    featured: false,
    cta: 'Get Started',
  },
  {
    name: 'Quarterly',
    period: 'Per 3 Months',
    badge: 'Popular',
    features: [
      'Everything in Monthly',
      'Priority locker',
      'Progress tracking',
      'Nutrition basics guide',
      'Community events',
    ],
    featured: true,
    cta: 'Most Popular',
  },
  {
    name: 'Half Year',
    period: 'Per 6 Months',
    features: [
      'Everything in Quarterly',
      'Body assessment',
      'Monthly check-in',
      'Goal setting session',
      'Workout program design',
    ],
    featured: false,
    cta: 'Best Value',
  },
  {
    name: 'Annual',
    period: 'Per Year',
    features: [
      'Everything in Half Year',
      'Full year commitment',
      'Maximum savings',
      'Priority booking',
      'Exclusive member benefits',
    ],
    featured: false,
    cta: 'Full Year',
  },
  {
    name: 'Personal Training',
    period: 'Custom Package',
    features: [
      'One-on-one sessions',
      'Custom workout program',
      'Nutrition guidance',
      'Daily accountability',
      'Fastest results',
    ],
    featured: false,
    cta: 'Enquire Now',
  },
];

export default function MembershipSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="section"
      id="membership"
      style={{ background: 'var(--bg-base)' }}
      aria-label="Membership plans"
    >
      {/* Ambient glow */}
      <div
        className="glow-blob"
        aria-hidden="true"
        style={{ top: '30%', right: '5%', width: '500px', height: '500px', background: 'var(--copper)', opacity: 0.04 }}
      />

      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <div className="section-label">Membership</div>
          <h2 className="section-heading">
            Choose Your
            <br />
            <strong>Commitment</strong>
          </h2>
          <div className="gold-divider" />
          <p style={{ maxWidth: '480px', fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--text-muted)' }}>
            Every journey is different. Choose the plan that matches your dedication.
            Contact us for exact pricing — we believe in transparent, fair membership.
          </p>
        </div>

        {/* Plans grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2px',
          }}
          role="list"
          aria-label="Membership plans"
        >
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              role="listitem"
              className={`membership-card reveal reveal-delay-${i + 1}${plan.featured ? ' featured' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                transform: hovered === i ? 'translateY(-16px) scale(1.02)' : 'none',
              }}
            >
              {plan.badge && <div className="featured-badge" aria-label="Most popular plan">{plan.badge}</div>}

              <div className="card-plan-name">{plan.name}</div>

              <div className="card-price" aria-label="Contact for pricing">
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                  Contact for
                </span>
                <br />
                Pricing
              </div>

              <div className="card-price-note">{plan.period}</div>

              <ul className="card-features" aria-label={`${plan.name} plan features`}>
                {plan.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>

              <a
                href="https://wa.me/919130777551"
                target="_blank"
                rel="noopener noreferrer"
                className={plan.featured ? 'btn-primary' : 'btn-ghost'}
                aria-label={`${plan.cta} — ${plan.name} membership`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2rem',
                  textDecoration: 'none',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                }}
              >
                {plan.featured ? <span>{plan.cta}</span> : plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className="reveal reveal-delay-4"
          style={{
            marginTop: '3rem',
            padding: '1.5rem 2rem',
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <span aria-hidden="true" style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>ℹ</span>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            For current pricing and special offers, contact us directly via WhatsApp or call
            {' '}<a href="tel:+919130777551" style={{ color: 'var(--gold)', textDecoration: 'none' }}>+91 91307 77551</a>.
            We offer flexible plans to match your goals and budget.
          </p>
        </div>
      </div>
    </section>
  );
}
