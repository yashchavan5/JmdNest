import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Pricing.module.css'

const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for small PGs',
    monthly: 2999, annual: 2499,
    color: '#0f9488', featured: false,
    features: ['Up to 30 rooms','Finance & rent automation','Tenant management','Digital KYC','Email support','Mobile app access'],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    tagline: 'For scaling PG operators',
    monthly: 5999, annual: 4999,
    color: '#3b5bdb', featured: true,
    features: ['Up to 150 rooms','Everything in Starter','Sales management','Operations & complaints','Food management','Community announcements','Priority support','Smart meter integration'],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    tagline: 'Multi-property operations',
    monthly: null, annual: null,
    color: '#7c3aed', featured: false,
    features: ['Unlimited rooms & properties','Everything in Growth','Custom workflows','Dedicated success manager','SLA-backed support','API access','White-label options','Advanced analytics'],
    cta: 'Contact Sales',
  },
]

function PricingCard({ p, annual, delay }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} className={`${styles.card} ${p.featured ? styles.featured : ''} reveal`} style={{ '--plan-color': p.color }}>
      {p.featured && <div className={styles.popularBadge}>Most Popular</div>}
      <div className={styles.cardTop}>
        <span className={styles.planName}>{p.name}</span>
        <span className={styles.planTagline}>{p.tagline}</span>
      </div>
      <div className={styles.priceBlock}>
        {p.monthly !== null ? (
          <>
            <span className={styles.currency}>₹</span>
            <span className={styles.price}>{(annual ? p.annual : p.monthly).toLocaleString()}</span>
            <span className={styles.period}>/mo</span>
          </>
        ) : (
          <span className={styles.customPrice}>Custom</span>
        )}
      </div>
      {p.monthly !== null && (
        <p className={styles.billedNote}>{annual ? 'Billed annually' : 'Billed monthly'}</p>
      )}
      <a href="#demo" className={`${styles.cta} ${p.featured ? styles.ctaFeatured : ''}`}>{p.cta}</a>
      <ul className={styles.featureList}>
        {p.features.map(f => (
          <li key={f}><span className={styles.tick}>✓</span>{f}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const headerRef = useReveal()

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className="tag">Pricing</span>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-sub">No hidden fees. No surprises. Start with a free trial and scale as you grow.</p>

          <div className={styles.toggle}>
            <span className={!annual ? styles.toggleActive : ''}>Monthly</span>
            <button
              className={`${styles.toggleBtn} ${annual ? styles.toggleBtnOn : ''}`}
              onClick={() => setAnnual(a => !a)}
              aria-label="Toggle billing period"
            >
              <span className={styles.toggleThumb} />
            </button>
            <span className={annual ? styles.toggleActive : ''}>
              Annual <span className={styles.saveBadge}>Save 17%</span>
            </span>
          </div>
        </div>

        <div className={styles.cards}>
          {plans.map((p, i) => <PricingCard key={p.name} p={p} annual={annual} delay={i * 100} />)}
        </div>

        <p className={styles.note}>All plans include a <strong>14-day free trial</strong>. No credit card required.</p>
      </div>
    </section>
  )
}
