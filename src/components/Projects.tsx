import Reveal from './Reveal'
import { FaArrowUp, FaEye } from 'react-icons/fa'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="project" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex items-center justify-center gap-3">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Latest Project</h2>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-red text-sm text-white transition-transform hover:-translate-y-1"
          >
            <FaArrowUp />
          </a>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-card transition-colors hover:border-red">
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#1d1d1d] to-[#101010]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 font-sans text-sm text-mut">{p.desc}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-red px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-red transition-colors hover:bg-red hover:text-white"
                  >
                    View <FaEye />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}