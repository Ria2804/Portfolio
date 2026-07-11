import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'GenAI-Based Airport Disruption Messaging System ',
    subtitle: 'AI-powered system',
    description: 'An intelligent assistant that generates clear announcements during airport delays and operational disruptions',
    tech: ['Python', 'NLP', 'LLM'],
    color: 'var(--blue)',
    icon: '✈️',
    github: 'https://github.com/Ria2804/GenAI-Based-Airport-Operational-Disruption-Messaging-System',
  },
  {
    id: 2,
    title: 'Emotion-Aware Virtual Assistant',
    subtitle: 'AI Chatbot',
    description: ' An emotion-aware chatbot that detects user sentiment from text or voice.',
    tech: ['Python', 'Hugging Face', 'Grok API', 'Llama-3'],
    color: 'var(--pink)',
    icon: '🤖',
    github: 'https://github.com/Ria2804/Emotion-Aware-Virtual-Assistant',
  },
  {
    id: 3,
    title: 'Phishing Email Detection System',
    subtitle: 'Detection System',
    description: ' Built a phishing detection app that uses Eden AI\’s text classification API to analyze email content.',
    tech: ['Python', 'EDEN AI', 'Open AI'],
    color: 'var(--violet)',
    icon: '📧',
    github: 'https://github.com/Ria2804/Phishing-Email-Detection-System',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="projects"
      style={{
        padding: '6rem 2rem',
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>PROJECTS</div>
        <h2 className="section-title">Interactive Gallery</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map(p => (
          <div
            key={p.id}
            className="card-hover"
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: 'var(--bg-card)',
              border: `1px solid ${hovered === p.id ? p.color : 'rgba(255,255,255,0.07)'}`,
              borderRadius: '4px',
              padding: '2rem',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(8px)',
              transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            {/* glow corner */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 60,
                height: 60,
                background: `radial-gradient(circle at top left, ${p.color}22, transparent 70%)`,
              }}
            />

            <div
              style={{
                fontSize: '2.5rem',
                marginBottom: '1.25rem',
                filter: `drop-shadow(0 0 8px ${p.color})`,
                animation: hovered === p.id ? 'float 2s ease-in-out infinite' : 'none',
              }}
            >
              {p.icon}
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: p.color,
                letterSpacing: '0.2em',
                marginBottom: '0.5rem',
              }}
            >
              {p.subtitle.toUpperCase()}
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#fff',
                marginBottom: '1rem',
              }}
            >
              {p.title}
            </h3>

            <p
              style={{
                color: 'var(--muted)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              {p.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {p.tech.map(t => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    color: p.color,
                    border: `1px solid ${p.color}44`,
                    borderRadius: '2px',
                    padding: '0.25rem 0.6rem',
                    letterSpacing: '0.08em',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                color: p.color,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              VIEW ON GITHUB
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
