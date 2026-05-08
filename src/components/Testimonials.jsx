import { Star, Trophy } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: "JmdNest completely transformed how we handle invoicing and collections. 100% of our payments are now collected online with a very low failure rate — a game-changer.",
    name: 'Jayesh Deshmukh', role: 'Founder & CEO', avatar: 'JD', color: '#3b5bdb', rating: 5,
  },
  {
    quote: "With multi-city operations, managing everything was a challenge. JmdNest customized the platform to fit our unique workflows and now it powers our entire operations seamlessly.",
    name: 'Aditya Gaikwad ', role: 'Founder & CEO', avatar: 'PM', color: '#0f9488', rating: 5,
  },
  {
    quote: "The digital KYC and e-signature feature saved us hours every week. What used to take days for onboarding now happens in minutes. Our tenants love it too.",
    name: 'Amey Kadam', role: 'Founder & CEO', avatar: 'RK', color: '#7c3aed', rating: 5,
  },
  {
    quote: "The complaint management system and food management module alone are worth it. Our tenants feel heard and our staff is no longer overwhelmed.",
    name: 'Sneha Joshi ', role: 'Co-founder, NestAway', avatar: 'SJ', color: '#d97706', rating: 5,
  },
  {
    quote: "We manage 12 PGs across 4 cities. JmdNest gives us a single dashboard for everything. Going back to spreadsheets is unthinkable now.",
    name: 'Arun Verma', role: 'Director, Colive India', avatar: 'AV', color: '#dc2626', rating: 5,
  },
  {
    quote: "The automated rent reminders cut our collection time by 70%. Our accountant finally has time to breathe — and so do I.",
    name: 'Neha Gupta', role: 'Finance Manager, CoHo Living', avatar: 'NG', color: '#0ea5e9', rating: 5,
  },
]

function Stars({ n }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {[...Array(n)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />)}
    </div>
  )
}

function TestiCard({ t, delay }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} className={`${styles.card} reveal`} style={{ '--avatar-color': t.color }}>
      <Stars n={t.rating} />
      <p className={styles.quote}>"{t.quote}"</p>
      <div className={styles.author}>
        <div className={styles.avatar}>{t.avatar}</div>
        <div>
          <div className={styles.name}>{t.name}</div>
          <div className={styles.role}>{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const headerRef = useReveal()
  return (
    <section className={styles.section}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className="tag">Testimonials</span>
          <h2 className="section-title">Loved by PG operators across India</h2>
          <p className="section-sub">Real stories from real property managers who scaled with JmdNest.</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => <TestiCard key={t.name} t={t} delay={i * 70} />)}
        </div>

        <div className={styles.awardBanner}>
          <span className={styles.awardIcon}><Trophy size={32} color="#f59e0b" /></span>
          <div>
            <h3 className={styles.awardTitle}>"Best PG Management App"</h3>
            <p className={styles.awardSub}>Awarded at Times Realty Conclave — April 2023</p>
          </div>
        </div>
      </div>
    </section>
  )
}
