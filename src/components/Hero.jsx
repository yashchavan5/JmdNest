import styles from './Hero.module.css'
import { DollarSign, CheckCircle, Zap, Building } from 'lucide-react'
const stats = [
  { value: '2,000+', label: 'Landlords' },
  { value: '5,000+', label: 'Properties' },
  { value: '250K+',  label: 'Units managed' },
  { value: '10',     label: 'Countries' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className="tag animate-fadeUp">All-in-One PG Management</div>

          <h1 className={`${styles.title} animate-fadeUp delay-1`}>
            Manage your PG<br />
            <span className={styles.accent}>smarter,</span>{' '}
            <span className={styles.teal}>faster,</span>{' '}
            better.
          </h1>

          <p className={`${styles.desc} animate-fadeUp delay-2`}>
            A seamless digital ecosystem connecting property owners, managers,
            and tenants — from bookings to billing, all in one place.
          </p>

          <div className={`${styles.actions} animate-fadeUp delay-3`}>
            <a href="#demo" className={styles.btnPrimary}>
              Book a Demo
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#features" className={styles.btnGhost}>Explore features</a>
          </div>

          <div className={`${styles.statsRow} animate-fadeUp delay-4`}>
            {stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.dashboardWrap}>
            <div className={styles.dashboardGlow} />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80"
              alt="PG Management Dashboard"
              className={styles.dashImg}
            />
            <div className={`${styles.floatCard} ${styles.card1}`}>
              <span className={styles.cardIcon}><DollarSign size={24} color="#2563eb" /></span>
              <div>
                <div className={styles.cardLabel}>Revenue this month</div>
                <div className={styles.cardVal}>₹4,82,000</div>
              </div>
            </div>
            <div className={`${styles.floatCard} ${styles.card2}`}>
              <span className={styles.cardIcon}><CheckCircle size={24} color="#0ea5e9" /></span>
              <div>
                <div className={styles.cardLabel}>Rooms occupied</div>
                <div className={styles.cardVal}>94% <span className={styles.up}>↑ 3%</span></div>
              </div>
            </div>
            <div className={`${styles.floatCard} ${styles.card3}`}>
              <span className={styles.cardIcon}><Zap size={24} color="#f59e0b" /></span>
              <div>
                <div className={styles.cardLabel}>Rent collected</div>
                <div className={styles.cardVal}>100% online</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.marqueeStrip}>
        <p className={styles.marqueeLabel}>Trusted by leading PGs across India</p>
        <div className={styles.marqueeTrack}>
          {[0, 1].map(ri => (
            <div key={ri} className={styles.marqueeRow}>
              {['StayAbode','Zolo Stays','Housr','Stanza Living','NestAway','OYO Life','Colive','CoHo','GoodSpace','Your Space'].map(name => (
                <span key={name} className={styles.marqueeItem}><Building size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> {name}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
