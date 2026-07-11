import { useEffect, useRef, useState } from 'react'

const categories = [
  {
    name: 'Languages & Core',
    color: 'var(--blue)',
    skills: [
      { name: 'Python'},
      { name: 'SQL'},
      { name: 'C' },
    ],
  },
  {
    name: 'AI / ML Libraries',
    color: 'var(--violet)',
    skills: [
      { name: 'TensorFlow / Keras' },
      { name: 'HuggingFace Transformers'},
      { name: 'Scikit-learn'},
    ],
  },
  {
    name: 'Data & Visualisation',
    color: 'var(--pink)',
    skills: [
      { name: 'Pandas / NumPy'},
      { name: 'Matplotlib / Seaborn'},
      { name: 'Power BI'},
      { name: 'Plotly'},
    ],
  },
  {
    name: 'Tools & Platforms',
    color: '#00e5b0',
    skills: [

      { name: 'Git / GitHub'},
      { name: 'Jupyter Notebooks'},
      { name: 'Google Colab'},
      { name: 'VS Code'},
    ],
  },
]

export default function TechStack() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="stack"
      ref={ref}
      style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>TECH STACK</div>
        <h2 className="section-title">Tools of the Trade</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {categories.map((cat, ci) => (
          <div
            key={cat.name}
            style={{
              background: 'var(--bg-card)',
              border: `1px solid ${cat.color}22`,
              borderRadius: '4px',
              padding: '1.75rem',
              backdropFilter: 'blur(8px)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.6s ease ${ci * 0.1}s`,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.6rem',
                color: cat.color,
                letterSpacing: '0.2em',
                marginBottom: '1.5rem',
              }}
            >
              {cat.name.toUpperCase()}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', color: 'var(--text)' }}>{skill.name}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: cat.color,
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: 3,
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        borderRadius: 2,
                        background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
                        width: visible ? `${skill.level}%` : '0%',
                        transition: `width 1s cubic-bezier(0.23,1,0.32,1) ${0.3 + ci * 0.1 + si * 0.08}s`,
                        boxShadow: `0 0 8px ${cat.color}`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
