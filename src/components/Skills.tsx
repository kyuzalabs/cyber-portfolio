import Reveal from './Reveal'
import { SiHtml5, SiCss, SiJavascript, SiWordpress, SiElementor, SiPython } from 'react-icons/si'
import type { IconType } from 'react-icons'
import { skills } from '../data/content'

const map: Record<string, { icon: IconType; color: string }> = {
  html: { icon: SiHtml5, color: '#E34F26' },
  css: { icon: SiCss, color: '#1572B6' },
  js: { icon: SiJavascript, color: '#F7DF1E' },
  wordpress: { icon: SiWordpress, color: '#21759B' },
  elementor: { icon: SiElementor, color: '#92003B' },
  python: { icon: SiPython, color: '#3776AB' },
}

export default function Skills() {
  return (
    <section id="skill" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            My <span className="text-red">Skill</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const { icon: Icon, color } = map[s.icon]
            return (
              <Reveal key={s.name} delay={i * 0.06}>
                <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-card p-6 transition-all hover:-translate-y-1 hover:border-red hover:shadow-[0_0_28px_rgba(233,67,46,0.28)]">
                  <span className="text-5xl transition-transform duration-300 group-hover:scale-110" style={{ color }}>
                    <Icon />
                  </span>
                  <span className="font-display text-lg font-semibold">{s.name}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}