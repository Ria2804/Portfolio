import { useState, useEffect } from 'react'

const links = ['About', 'Projects', 'Experience', 'Stack', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(5,7,20,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-orbitron)',
          fontWeight: 800,
          fontSize: '1rem',
          background: 'linear-gradient(135deg, #00d4ff, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.05em',
        }}
      >
        RJ
      </span>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'var(--muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {l.toUpperCase()}
          </a>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--blue)',
          display: 'none',
        }}
        className="flex md:hidden"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {open ? (
            <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          ) : (
            <>
              <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(5,7,20,0.97)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(0,212,255,0.15)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-orbitron)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--text)',
                textDecoration: 'none',
              }}
            >
              {l.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
