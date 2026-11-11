import Reveal from './Reveal'
import { FaMapMarkerAlt, FaPhoneAlt, FaArrowRight } from 'react-icons/fa'
import { about, eyeVideo } from '../data/content'

export default function About() {
  return (
    <section id="about" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <video src={eyeVideo} poster="images/eye-poster.jpg" autoPlay muted loop playsInline className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -right-1 rounded-2xl border border-red/40 bg-bg/90 px-6 py-4 glow-red backdrop-blur sm:-right-3">
            <div className="font-display text-3xl font-bold text-red">{about.badgeValue}</div>
            <div className="max-w-[120px] font-sans text-xs text-mut">{about.badgeLabel}</div>
          </div>
        </Reveal>

        <div className="text-center lg:text-left">
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-4xl">{about.title}</h2>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-mut">{about.bio}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-7 space-y-4">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-card p-4 text-left">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red/15 text-lg text-red">
                <FaMapMarkerAlt />
              </span>
              <div>
                <div className="font-display font-semibold">{about.location.label}</div>
                <div className="font-sans text-sm text-mut">{about.location.value}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-card p-4 text-left">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red/15 text-lg text-red">
                <FaPhoneAlt />
              </span>
              <div>
                <div className="font-display font-semibold">{about.phone.label}</div>
                <div className="font-sans text-sm text-mut">{about.phone.value}</div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-redh"
            >
              Download CV <FaArrowRight />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}