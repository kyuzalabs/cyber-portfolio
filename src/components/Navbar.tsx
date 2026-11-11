import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { nav, navIds } from '../data/content'

export default function Navbar() {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      let cur = 0
      for (let i = 0; i < navIds.length; i++) {
        const el = document.getElementById(navIds[i])
        if (el && el.getBoundingClientRect().top <= 170) cur = i
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const current = hovered ?? active

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-3 pt-3 md:px-6 md:pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-red/20 bg-black/70 px-6 py-3 backdrop-blur">
        <a href="#home" className="font-display text-2xl font-bold">
          Kyuza<span className="text-red">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item, i) => (
            <a
              key={item}
              href={`#${navIds[i]}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative rounded-full px-4 py-2 font-display text-[13px] font-semibold uppercase tracking-wider transition-colors ${
                current === i ? 'text-bg' : 'text-ink/80 hover:text-ink'
              }`}
            >
              {current === i && (
                <motion.span
                  layoutId="navPill"
                  className="absolute inset-0 rounded-full bg-red"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative z-10">{item}</span>
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-red/20 text-lg text-ink md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-red/20 bg-black/90 p-2 backdrop-blur md:hidden"
          >
            {nav.map((item, i) => (
              <a
                key={item}
                href={`#${navIds[i]}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 font-display text-sm font-semibold uppercase tracking-wider ${
                  active === i ? 'bg-red text-bg' : 'text-ink/80 hover:bg-white/5'
                }`}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}