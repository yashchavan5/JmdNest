import { Zap, Smartphone, Lock, Handshake } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import styles from './Benefits.module.css'

const rows = [
  { feature: 'Digital KYC & e-sign',              others: false,        us: true },
  { feature: 'Automated rent collection',          others: false,        us: true },
  { feature: 'Unified tenant & operations view',   others: false,        us: true },
  { feature: 'Smart meter electricity billing',    others: false,        us: true },
  { feature: 'Food management system',             others: false,        us: true },
  { feature: 'Multi-property dashboard',           others: 'Partial',    us: true },
  { feature: 'Real-time complaint tracking',       others: false,        us: true },
  { feature: 'Zoho Sign integration',              others: false,        us: true },
  { feature: 'Community announcements',            others: false,        us: true },
  { feature: 'Dedicated onboarding support',       others: 'Limited',    us: true },
]

const highlights = [
  { icon: <Zap size={24} color="#f59e0b" />, title: 'Setup in hours, not weeks',   desc: 'Get your entire PG on the platform in under a day. No migration headaches.' },
  { icon: <Smartphone size={24} color="#3b82f6" />, title: 'Tenant-first mobile app',     desc: 'Your tenants get their own app for payments, complaints, food, and more.' },
  { icon: <Lock size={24} color="#10b981" />, title: 'Enterprise-grade security',   desc: 'AADHAAR KYC, encrypted data, and compliant rent agreements out of the box.' },
  { icon: <Handshake size={24} color="#8b5cf6" />, title: 'Hands-on onboarding',         desc: 'Dedicated team to set you up, train your staff, and support you at every step.' },
]

function HighlightCard({ h, delay }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} className={`${styles.highlight} reveal`}>
      <span className={styles.hlIcon}>{h.icon}</span>
      <h3 className={styles.hlTitle}>{h.title}</h3>
      <p className={styles.hlDesc}>{h.desc}</p>
    </div>
  )
}

export default function Benefits() {
  const headerRef = useReveal()
  const tableRef  = useReveal(100)

  return (
    <section id="benefits" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} reveal`}>
          <span className="tag">Why JmdNest</span>
          <h2 className="section-title">Others vs JmdNest</h2>
          <p className="section-sub">Most tools give you a piece of the puzzle. We give you the whole picture.</p>
        </div>

        <div ref={tableRef} className={`${styles.tableWrap} reveal`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featureCol}>Feature</th>
                <th className={styles.othersCol}>
                  <div className={styles.colHeader}>
                    <span className={styles.othersLabel}>Others</span>
                    <span className={styles.colSub}>Typical PG tools</span>
                  </div>
                </th>
                <th className={styles.usCol}>
                  <div className={styles.colHeader}>
                    <span className={styles.usLabel}>JmdNest</span>
                    <span className={styles.colSub}>Your all-in-one platform</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.feature} className={i % 2 === 0 ? styles.rowEven : ''}>
                  <td className={styles.featureName}>{r.feature}</td>
                  <td className={styles.othersCell}>
                    {r.others === false
                      ? <span className={styles.cross}>✕</span>
                      : <span className={styles.partial}>⚠ {r.others}</span>}
                  </td>
                  <td className={styles.usCell}><span className={styles.tick}>✓</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.highlights}>
          {highlights.map((h, i) => <HighlightCard key={h.title} h={h} delay={i * 80} />)}
        </div>
      </div>
    </section>
  )
}
