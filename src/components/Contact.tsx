import { useState } from 'react'

const socials = [
  {
    label: 'EMAIL',
    value: 'riyajojikop@gmail.com',
    href: 'mailto:riyajojikop@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M2 5l7 5 7-5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    color: 'var(--blue)',
  },
  {
    label: 'PHONE',
    value: '+91-9309496969',
    href: 'tel:+91-9309496969',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4.5 2.5c.3-.3.8-.3 1.1 0l2.2 2.2c.3.3.3.8 0 1.1L6.4 7.2a9.5 9.5 0 004.4 4.4l1.4-1.4c.3-.3.8-.3 1.1 0l2.2 2.2c.3.3.3.8 0 1.1l-1.2 1.2c-2 2-8-2-10-4S2.5 4.5 4.5 2.5z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    color: 'var(--pink)',
  },
  {
    label: 'LINKEDIN',
    value: 'riyajoji',
    href: 'https://www.linkedin.com/in/riya-joji-42893030b/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="5.5" cy="5.5" r="1" fill="currentColor" />
        <path d="M5.5 7.5v5M8 7.5v5M8 10a2.5 2.5 0 015 0v2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    color: 'var(--violet)',
  },
  {
    label: 'GITHUB',
    value: 'Riya2804',
    href: 'https://github.com/Ria2804',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a7 7 0 00-2.21 13.64c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.03-.78-1.03-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76.44-.93-1.55-.18-3.19-.78-3.19-3.46 0-.77.27-1.4.72-1.89-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.93.72A6.7 6.7 0 019 5.6c.6 0 1.2.08 1.76.23 1.34-.91 1.93-.72 1.93-.72.38.97.14 1.69.07 1.87.45.49.72 1.12.72 1.89 0 2.69-1.64 3.28-3.2 3.45.25.22.47.65.47 1.3v1.94c0 .19.13.4.48.34A7 7 0 009 2z" fill="currentColor" />
      </svg>
    ),
    color: '#00e5b0',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(0,212,255,0.2)',
    borderRadius: '2px',
    padding: '0.85rem 1rem',
    color: 'var(--text)',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 2rem 8rem',
        maxWidth: 1000,
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>CONTACT</div>
        <h2 className="section-title">Let's Build Something</h2>
        <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
          Open to collaborations, opportunities, or just a good conversation about AI. Drop a message.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        {/* Socials */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'var(--bg-card)',
                  border: `1px solid ${s.color}22`,
                  borderRadius: '4px',
                  padding: '1rem 1.25rem',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  backdropFilter: 'blur(8px)',
                  transition: 'border-color 0.3s ease, transform 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${s.color}88`
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${s.color}22`
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div style={{ color: s.color, flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.55rem',
                      color: s.color,
                      letterSpacing: '0.2em',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {s.label}
                  </div>
                  <div style={{ fontSize: '0.85rem' }}>{s.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            required
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)')}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            required
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)')}
          />
          <textarea
            placeholder="Your message..."
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            required
            rows={5}
            style={{ ...inputStyle, resize: 'vertical' }}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)')}
          />

          <button type="submit" className="btn-primary" style={{ textAlign: 'center' }}>
            {sent ? '✓ MESSAGE SENT' : 'SEND MESSAGE'}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: '5rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-orbitron)',
            fontWeight: 800,
            fontSize: '1rem',
            background: 'linear-gradient(135deg, var(--blue), var(--violet))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.75rem',
          }}
        >
          RIYA JOJI
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.2em' }}>
          © 2026 · ENGINEERING THE FUTURE WITH AI
        </div>
      </div>
    </section>
  )
}
