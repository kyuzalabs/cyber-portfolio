import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center">
        <p className="font-display text-sm text-mut">© 2026 Kyuza. — Web Developer</p>
      </footer>
    </div>
  )
}