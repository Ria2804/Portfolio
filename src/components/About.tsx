import { useEffect, useRef, useState } from 'react'
import profile from '../RJ.jpg'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const stats = [
    { val: '5+', label: 'Months Industry Experience' },
    { val: '10+', label: 'Hands-on AI Projects' },
    { val: '6+', label: 'LLMs & AI Tools Used' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>ABOUT ME</div>
        <h2 className="section-title"></h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        {/* Photo */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              position: 'absolute',
              inset: -8,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, var(--blue), var(--violet), var(--pink), var(--blue))',
              animation: 'scan-line 6s linear infinite',
              opacity: 0.6,
              filter: 'blur(12px)',
            }}
          />
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid rgba(0,212,255,0.4)',
              position: 'relative',
              zIndex: 1,
              background: '#0a0e28',
            }}
          >
            <img
              src={profile}
              alt="Riya Joji — AI/ML Graduate"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {[
            { top: -4, left: -4, borderTop: '2px solid var(--blue)', borderLeft: '2px solid var(--blue)' },
            { top: -4, right: -4, borderTop: '2px solid var(--pink)', borderRight: '2px solid var(--pink)' },
            { bottom: -4, left: -4, borderBottom: '2px solid var(--violet)', borderLeft: '2px solid var(--violet)' },
            { bottom: -4, right: -4, borderBottom: '2px solid var(--blue)', borderRight: '2px solid var(--blue)' },
          ].map((s, i) => (
            <div key={i} style={{ position: 'absolute', width: 20, height: 20, zIndex: 2, ...s }} />
          ))}
        </div>

        {/* Bio */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.2s',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--blue)',
              letterSpacing: '0.15em',
              marginBottom: '1rem',
            }}
          >
            &gt; loading profile...
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
              color: '#fff',
              marginBottom: '1.25rem',
            }}
          >
            AI &amp; Machine Learning Graduate
          </h3>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
            I'm passionate about Artificial Intelligence and enjoy building applications that combine Machine Learning, Large Language Models, and modern development tools. My experience comes from academic projects and my internship at Ethara AI.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            I'm always looking for opportunities to learn, collaborate, and create AI solutions that are practical, reliable, and user focused.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {stats.map(s => (
              <div key={s.val}>
                <div
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontWeight: 800,
                    fontSize: '2rem',
                    background: 'linear-gradient(135deg, var(--blue), var(--violet))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.val}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.2rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
