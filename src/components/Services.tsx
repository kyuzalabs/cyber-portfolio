import Reveal from './Reveal'
import { FaCode, FaPenNib, FaHeadset, FaShieldAlt } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import { services } from '../data/content'

const icons: Record<string, IconType> = {
  code: FaCode,
  design: FaPenNib,
  it: FaHeadset,
  security: FaShieldAlt,
}

export default function Services() {
  return (
    <section id="service" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">My Services</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-white/10 bg-card p-8 text-center transition-colors hover:border-red">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red/15 text-2xl text-red transition-colors group-hover:bg-red group-hover:text-white">
                    <Icon />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-mut">{s.desc}</p>
                  <button className="mt-6 rounded-full border border-red px-6 py-2 font-display text-xs font-bold uppercase tracking-wider text-red transition-colors hover:bg-red hover:text-white">
                    Read More
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}