import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaArrowRight, FaMobileAlt, FaCode } from 'react-icons/fa'
import { hero, eyeVideo } from '../data/content'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const socials = [
  { icon: FaGithub, href: 'https://github.com/kyuzalabs' },
  { icon: FaInstagram, href: '#' },
  { icon: FaLinkedin, href: '#' },
  { icon: FaTiktok, href: '#' },
]

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease }}
      className="rounded-2xl border border-white/10 bg-card p-4 transition-colors hover:border-red"
    >
      <div className="font-display text-2xl font-bold text-red md:text-3xl">{value}</div>
      <div className="mt-1 font-sans text-xs text-mut">{label}</div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative px-5 pb-16 pt-28 md:px-10 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-red"
          >
            {hero.welcome}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="mt-3 font-display text-4xl font-bold leading-[1.1] md:text-6xl"
          >
            {hero.titleA} <span className="text-red">{hero.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-5 max-w-lg font-sans text-[15px] leading-relaxed text-mut"
          >
            {hero.bio}
          </motion.p>

          <div className="mt-7 grid grid-cols-3 gap-3 md:gap-4">
            {hero.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.28 + i * 0.1, ease }}
              >
                <Stat value={s.value} label={s.label} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-red px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-white"
            >
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-red">
                Hire me <FaArrowRight className="inline" />
              </span>
            </a>
            <a
              href="#about"
              className="relative overflow-hidden rounded-full border border-red px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-red"
            >
              <span className="absolute inset-0 -translate-x-full bg-red transition-transform duration-300 hover:translate-x-0" />
              <span className="relative z-10 transition-colors duration-300 hover:text-white">Download CV</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex gap-4"
          >
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-card text-lg text-mut transition-all hover:-translate-y-1 hover:border-red hover:text-red"
              >
                <s.icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* phone mockup dengan video mata menyala */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[240px] md:w-[290px]">
            <div className="glow-red relative aspect-[9/17] overflow-hidden rounded-[2.6rem] border-2 border-red/50 bg-black">
              <video
                src={eyeVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute left-1/2 top-2.5 h-2.5 w-20 -translate-x-1/2 rounded-full bg-black/80" />
              <span className="absolute left-3 top-9 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 font-display text-[10px] font-semibold text-white backdrop-blur">
                <FaMobileAlt className="text-red" /> Responsive
              </span>
              <span className="absolute bottom-20 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-red px-4 py-1.5 font-display text-[10px] font-bold text-white">
                <FaCode /> Open code
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}