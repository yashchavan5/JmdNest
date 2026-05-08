import { DollarSign, BarChart3, Settings, Users } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import styles from './Features.module.css'

const features = [
  { icon: <DollarSign size={24} color="#2563eb" />, color: '#2563eb', bg: '#eff6ff', title: 'Finance Management',    desc: 'Automated billing, rent collection on autopilot, reminders, and instant online payment — zero manual follow-ups.',   points: ['Auto bill creation', 'Payment reminders', 'Online collections', 'Tax & GST handling'] },
  { icon: <BarChart3 size={24} color="#0ea5e9" />, color: '#0ea5e9', bg: '#e0f2fe', title: 'Sales Management',       desc: 'Give your sales team real-time property data and inventory visibility to close deals with confidence.',               points: ['Property details access', 'Room inventory tracking', 'Bed status & filters', 'Listing & bookings'] },
  { icon: <Settings size={24} color="#f59e0b" />, color: '#f59e0b', bg: '#fef3c7', title: 'Operations Management', desc: 'Run day-to-day operations like clockwork — complaints, food, community announcements all centralized.',               points: ['Complaint tracking', 'Food menu & billing', 'Community notices', 'Maintenance logs'] },
  { icon: <Users size={24} color="#6366f1" />, color: '#6366f1', bg: '#e0e7ff', title: 'Tenant Management',      desc: 'From check-in to check-out, delight your tenants with smooth digital-first onboarding and support.',                  points: ['Seamless bookings', 'Digital KYC & e-sign', 'Rent agreements', 'Move-out flows'] },
]

const detailed = [
  {
    tag: 'Tenant Management',
    title: 'From Check-in to Check-out,\nWe have got you covered.',
    desc: 'Keep tenants happy and your life easier with fully digital workflows.',
    steps: [
      { n: '01', h: 'Seamless Bookings & Move-Ins', p: 'Tenants can book rooms and manage their move-ins through an intuitive platform — no paperwork.' },
      { n: '02', h: 'Digital KYC & E-Signatures',   p: 'Complete tenant verification with AADHAAR-based KYC and e-signatures, speeding up onboarding.' },
      { n: '03', h: 'Rent Agreements Digitally',    p: 'Create and sign rent agreements effortlessly with Zoho Sign integration.' },
    ],
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=720&h=580&fit=crop&q=80',
    imgLeft: false,
  },
  {
    tag: 'Finance Management',
    title: 'Rent Collection\non Autopilot.',
    desc: 'Let the system handle the numbers so you can focus on growing.',
    steps: [
      { n: '01', h: 'Bill Creation',   p: 'Manage bookings, collect token advances, and track move-ins all in one place.' },
      { n: '02', h: 'Smart Reminders', p: 'Automated reminders ensure timely payments without any manual follow-ups.' },
      { n: '03', h: 'Online Payment',  p: 'Seamless payment integration for completely hassle-free collections.' },
    ],
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=720&h=580&fit=crop&q=80',
    imgLeft: true,
  },
  {
    tag: 'Operations Management',
    title: 'Master Operations\nwith Ease.',
    desc: 'Ensure smooth management and satisfied tenants, every single day.',
    steps: [
      { n: '01', h: 'Complaint Management',   p: 'Resolve tenant complaints quickly with automated tracking and status updates.' },
      { n: '02', h: 'Food Management',         p: 'Share menus, charge for meals, and let tenants opt-in or opt-out with ease.' },
      { n: '03', h: 'Community Announcements', p: 'Foster community with important announcements and push notifications.' },
    ],
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=720&h=580&fit=crop&q=80',
    imgLeft: false,
  },
]

function FeatureCard({ f, index }) {
  const ref = useReveal(index * 100)
  return (
    <div ref={ref} className={`${styles.card} reveal`} style={{ '--card-color': f.color, '--card-bg': f.bg }}>
      <div className={styles.cardIcon}>{f.icon}</div>
      <h3 className={styles.cardTitle}>{f.title}</h3>
      <p className={styles.cardDesc}>{f.desc}</p>
      <ul className={styles.cardPoints}>
        {f.points.map(p => <li key={p}><span className={styles.check}>✓</span>{p}</li>)}
      </ul>
    </div>
  )
}

function DetailedFeature({ d, i }) {
  const textRef = useReveal(0)
  const imgRef  = useReveal(120)
  return (
    <div className={`${styles.detailed} ${i % 2 === 0 ? styles.detailedAlt : ''}`}>
      <div className={`${styles.detailedInner} ${d.imgLeft ? styles.reversed : ''}`}>
        <div ref={textRef} className={`${styles.detailedText} reveal`}>
          <span className="tag">{d.tag}</span>
          <h2 className={styles.detailedTitle}>{d.title}</h2>
          <p className={styles.detailedDesc}>{d.desc}</p>
          <ol className={styles.steps}>
            {d.steps.map(s => (
              <li key={s.n} className={styles.step}>
                <span className={styles.stepNum}>{s.n}</span>
                <div><strong>{s.h}</strong><p>{s.p}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div ref={imgRef} className={`${styles.detailedImg} reveal`}>
          <div className={styles.imgFrame}>
            <img src={d.img} alt={d.tag} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const headerRef = useReveal(0)
  return (
    <section id="features">
      <div className={styles.overview}>
        <div className="container">
          <div ref={headerRef} className={`${styles.header} reveal`}>
            <span className="tag">What We Provide</span>
            <h2 className="section-title">The Ultimate PG Toolkit</h2>
            <p className="section-sub">From numbers to people — manage every aspect of your PG with precision and ease.</p>
          </div>
          <div className={styles.grid}>
            {features.map((f, i) => <FeatureCard key={f.title} f={f} index={i} />)}
          </div>
        </div>
      </div>
      {detailed.map((d, i) => <DetailedFeature key={d.tag} d={d} i={i} />)}
    </section>
  )
}
