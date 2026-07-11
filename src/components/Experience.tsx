import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    role: 'LLM Intern',
    company: 'Ethara AI',
    period: 'January 2026 – May 2026',
    desc: 'Contributed to large-scale training by assessing AI model outputs and generating high-quality reasoning justifications for alignment optimization.',
    skills: ['LLM Evaluation', 'Quality Assurance', 'Reasoning Analysis'],
    color: 'var(--violet)',
    side: 'right',
  },
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={ref}
      style={{ padding: '6rem 2rem', maxWidth: 900, margin: '0 auto' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>EXPERIENCE</div>
        <h2 className="section-title">Career Timeline</h2>
      </div>

      <div style={{ position: 'relative' }}>
        {/* central line */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, var(--blue), var(--violet))',
            transform: 'translateX(-50%)',
            opacity: 0.4,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: '2rem',
                alignItems: 'start',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s ease ${i * 0.2}s`,
              }}
            >
              {/* left */}
              <div style={{ textAlign: 'right', paddingTop: '0.5rem' }}>
                {exp.side === 'left' ? (
                  <ExperienceCard exp={exp} />
                ) : (
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--muted)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {exp.period}
                  </div>
                )}
              </div>

              {/* dot */}
              <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1.25rem' }}>
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: exp.color,
                    boxShadow: `0 0 16px ${exp.color}`,
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* right */}
              <div style={{ paddingTop: '0.5rem' }}>
                {exp.side === 'right' ? (
                  <ExperienceCard exp={exp} />
                ) : (
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--muted)',
                      letterSpacing: '0.1em',
                      paddingTop: '0.75rem',
                    }}
                  >
                    {exp.period}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${exp.color}33`,
        borderRadius: '4px',
        padding: '1.5rem',
        backdropFilter: 'blur(8px)',
        textAlign: exp.side === 'left' ? 'right' : 'left',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-orbitron)',
          fontSize: '0.6rem',
          color: exp.color,
          letterSpacing: '0.2em',
          marginBottom: '0.4rem',
        }}
      >
        {exp.company.toUpperCase()}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-orbitron)',
          fontWeight: 700,
          fontSize: '1rem',
          color: '#fff',
          marginBottom: '0.75rem',
        }}
      >
        {exp.role}
      </h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
        {exp.desc}
      </p>
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          justifyContent: exp.side === 'left' ? 'flex-end' : 'flex-start',
        }}
      >
        {exp.skills.map(s => (
          <span
            key={s}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: exp.color,
              border: `1px solid ${exp.color}44`,
              borderRadius: '2px',
              padding: '0.2rem 0.5rem',
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
