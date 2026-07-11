import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const nodes: Node[] = []
    const NODE_COUNT = 60
    const MAX_DIST = 160

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.35
            const g = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
            g.addColorStop(0, `rgba(0,212,255,${alpha})`)
            g.addColorStop(1, `rgba(168,85,247,${alpha})`)
            ctx.strokeStyle = g
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3)
        grd.addColorStop(0, 'rgba(0,212,255,0.9)')
        grd.addColorStop(1, 'rgba(168,85,247,0)')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = 'rgba(0,212,255,0.9)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.55,
      }}
    />
  )
}
