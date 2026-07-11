import NeuralBackground from './components/NeuralBackground'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{ position: 'relative', background: 'var(--bg)' }}>
      <NeuralBackground />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>
    </div>
  )
}
