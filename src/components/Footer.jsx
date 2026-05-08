import { MessageCircle, Briefcase, Video, Users, Trophy, Lock, CheckCircle } from 'lucide-react'
import styles from './Footer.module.css'

const cols = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Blog', 'Careers', 'Press'],
  },
  {
    heading: 'Support',
    links: ['Help Center', 'Contact Us', 'API Docs', 'Status'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>J</span>
              <span>mdNest</span>
            </div>
            <p className={styles.brandDesc}>
              The all-in-one PG management platform trusted by 2,000+ landlords
              and property managers across India and beyond.
            </p>
            <div className={styles.socials}>
              {[{icon: <MessageCircle size={18}/>, key: 'twitter'}, {icon: <Briefcase size={18}/>, key: 'linkedin'}, {icon: <Video size={18}/>, key: 'youtube'}, {icon: <Users size={18}/>, key: 'facebook'}].map(s => (
                <a key={s.key} href="#" className={styles.social}>{s.icon}</a>
              ))}
            </div>
          </div>

          {cols.map(c => (
            <div key={c.heading} className={styles.col}>
              <h4 className={styles.colHead}>{c.heading}</h4>
              <ul>
                {c.links.map(l => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span>© 2025 JmdNest. All rights reserved.</span>
          <div className={styles.badges}>
            <span className={styles.badge}><Trophy size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> Best PG App 2023</span>
            <span className={styles.badge}><Lock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> AADHAAR KYC</span>
            <span className={styles.badge}><CheckCircle size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> GST Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
