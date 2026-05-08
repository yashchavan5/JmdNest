import { useState } from 'react'
import { PartyPopper, CheckCircle2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import styles from './Demo.module.css'

export default function Demo() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', rooms: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="demo" className={styles.section}>
      {/* Decorative blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className="container">
        <div ref={ref} className={`${styles.inner} reveal`}>
          <div className={styles.left}>
            <span className="tag">Book a Demo</span>
            <h2 className={styles.title}>See JmdNest in action — live & personalised</h2>
            <p className={styles.desc}>
              Schedule a 30-minute demo with our team. We'll walk you through the
              platform tailored to your PG's needs — no generic slides.
            </p>

            <ul className={styles.perks}>
              {[
                'Free 30-minute walkthrough',
                'Setup assistance included',
                '14-day trial after demo',
                'Dedicated onboarding support',
              ].map(p => <li key={p}><CheckCircle2 size={18} color="#10b981" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline' }}/>{p}</li>)}
            </ul>

            <div className={styles.avatarRow}>
              {['RK','PM','AV'].map((a,i) => (
                <div key={i} className={styles.av} style={{ '--c': ['#3b5bdb','#0f9488','#7c3aed'][i] }}>{a}</div>
              ))}
              <span className={styles.avText}>Join 2,000+ landlords already on JmdNest</span>
            </div>
          </div>

          <div className={styles.right}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}><PartyPopper size={48} color="#f59e0b" /></span>
                <h3>You're all set!</h3>
                <p>Our team will reach out within 24 hours to schedule your demo.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Schedule Your Demo</h3>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Sharma" required />
                  </div>
                  <div className={styles.field}>
                    <label>Work Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="rahul@example.com" required />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                  </div>
                  <div className={styles.field}>
                    <label>Number of Rooms</label>
                    <select name="rooms" value={form.rooms} onChange={handleChange} required>
                      <option value="">Select range</option>
                      <option>1 – 30 rooms</option>
                      <option>31 – 100 rooms</option>
                      <option>101 – 500 rooms</option>
                      <option>500+ rooms</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label>Tell us about your PG (optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Number of properties, cities, current challenges..." />
                </div>

                <button type="submit" className={styles.submit}>
                  Book My Free Demo
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <p className={styles.disclaimer}>No spam. No credit card. Cancel anytime.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
