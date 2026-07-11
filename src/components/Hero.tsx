import { useEffect, useRef } from 'react'

const NAME = 'Riya Joji'
const TAGLINE = 'AI / ML Graduate'

export default function Hero() {
  const nameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!nameRef.current) return
    const letters = nameRef.current.querySelectorAll<HTMLSpanElement>('.letter-animate')
    letters.forEach((el, i) => {
      el.style.animationDelay = `${0.4 + i * 0.06}s`
    })
  }, [])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '6rem 2rem 4rem',
        zIndex: 1,
      }}
    >
      {/* scan line */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)',
            animation: 'scan-line 6s linear infinite',
          }}
        />
      </div>

      {/* small badge */}
      <div
        className="fade-up"
        style={{
          animationDelay: '0.1s',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          border: '1px solid rgba(0,212,255,0.3)',
          borderRadius: '2px',
          padding: '0.35rem 1rem',
          marginBottom: '2.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: 'var(--blue)',
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)', animation: 'node-ping 2s ease-in-out infinite' }} />
        WELCOME TO MY PORTFOLIO
      </div>

      {/* animated name */}
      <div
        ref={nameRef}
        style={{
          fontFamily: 'var(--font-orbitron)',
          fontWeight: 900,
          fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          lineHeight: 1,
          marginBottom: '0.75rem',
          perspective: '600px',
        }}
      >
        {NAME.split('').map((ch, i) => (
          <span
            key={i}
            className="letter-animate"
            style={{
              display: 'inline-block',
              background: ch === ' '
                ? 'transparent'
                : 'linear-gradient(135deg, #fff 20%, var(--blue) 60%, var(--violet))',
              WebkitBackgroundClip: ch === ' ' ? undefined : 'text',
              WebkitTextFillColor: ch === ' ' ? undefined : 'transparent',
              backgroundClip: ch === ' ' ? undefined : 'text',
              whiteSpace: ch === ' ' ? 'pre' : undefined,
              cursor: 'default',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.15) translateY(-4px)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1) translateY(0)'
            }}
          >
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </div>

      {/* tagline */}
      <div
        className="fade-up"
        style={{
          animationDelay: '1.3s',
          fontFamily: 'var(--font-orbitron)',
          fontSize: 'clamp(0.65rem, 2vw, 0.85rem)',
          letterSpacing: '0.4em',
          color: 'var(--pink)',
          marginBottom: '1.5rem',
        }}
      >
        {TAGLINE}
      </div>

      {/* subheading */}
      <p
        className="fade-up"
        style={{
          animationDelay: '1.5s',
          maxWidth: 560,
          color: 'var(--muted)',
          fontSize: '1rem',
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}
      >
        Exploring AI, ML &amp; Data Science — building intelligent systems with Python, NLP, and deep learning.
      </p>

      {/* CTAs */}
      <div
        className="fade-up"
        style={{ animationDelay: '1.7s', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <a href="#projects" className="btn-primary">VIEW PROJECTS</a>
        <a href="#contact" className="btn-ghost">GET IN TOUCH</a>
      </div>

      {/* scroll indicator */}
      <div
        className="fade-up"
        style={{
          animationDelay: '2s',
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            color: 'var(--muted)',
          }}
        >
          SCROLL
        </div>
        <div
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, var(--blue), transparent)',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
