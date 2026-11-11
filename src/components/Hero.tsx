import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaTelegram, FaInstagram, FaTiktok, FaArrowRight, FaMobileAlt, FaCode } from 'react-icons/fa'
import { hero, eyeVideo } from '../data/content'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const socials = [
  { icon: FaGithub, href: 'https://github.com/kyuzalabs' },
  { icon: FaTwitter, href: 'https://x.com/kyuzatempest' },
  { icon: FaTelegram, href: 'https://t.me/Kyuzaatzy' },
  { icon: FaInstagram, href: 'https://www.instagram.com/kyuz4verse' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@rimuruuzyy' },
]

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease }}
      className="rounded-2xl border border-white/10 bg-card p-2 transition-colors hover:border-red sm:p-4"
    >
      <div className="font-display text-lg font-bold text-red sm:text-2xl md:text-3xl">{value}</div>
      <div className="mt-1 font-sans text-[8px] leading-tight text-mut sm:text-xs">{label}</div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative px-4 pb-14 pt-24 sm:px-5 sm:pb-16 md:px-10 md:pt-36">
      <div className="mx-auto grid max-w-6xl grid-cols-[1.15fr_0.85fr] items-center gap-4 sm:gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-red sm:text-sm sm:tracking-[0.3em]"
          >
            {hero.welcome}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="mt-3 font-display text-[20px] font-bold leading-[1.15] sm:text-3xl md:text-5xl lg:text-6xl"
          >
            {hero.titleA} <span className="text-red">{hero.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-4 max-w-lg font-sans text-xs leading-relaxed text-mut sm:text-sm md:text-[15px]"
          >
            {hero.bio}
          </motion.p>

          <div className="mt-5 grid grid-cols-3 gap-1.5 sm:mt-7 sm:gap-3 md:gap-4">
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
            className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-4"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-red px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white sm:px-7 sm:py-3 sm:text-sm"
            >
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-red">
                Hire me <FaArrowRight className="inline" />
              </span>
            </a>
            <a
              href="#about"
              className="relative overflow-hidden rounded-full border border-red px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-red sm:px-7 sm:py-3 sm:text-sm"
            >
              <span className="absolute inset-0 -translate-x-full bg-red transition-transform duration-300 hover:translate-x-0" />
              <span className="relative z-10 transition-colors duration-300 hover:text-white">Download CV</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-5 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-4"
          >
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-card text-base text-mut transition-all hover:-translate-y-1 hover:border-red hover:text-red sm:h-11 sm:w-11 sm:text-lg"
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
          <div className="relative w-[110px] max-w-full sm:w-[170px] md:w-[240px] lg:w-[290px]">
            <div className="glow-red relative aspect-[9/17] overflow-hidden rounded-[1.8rem] border-2 border-red/50 bg-black sm:rounded-[2.6rem]">
              <video
                src={eyeVideo}
                poster="images/eye-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute left-1/2 top-2 h-2 w-12 -translate-x-1/2 rounded-full bg-black/80 sm:top-2.5 sm:w-20" />
              <span className="absolute left-2 top-6 flex items-center gap-1 rounded-full bg-black/55 px-1.5 py-0.5 font-display text-[8px] font-semibold text-white backdrop-blur sm:left-3 sm:top-9 sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-[10px]">
                <FaMobileAlt className="text-red" /> Responsive
              </span>
              <span className="absolute bottom-14 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-red px-2.5 py-1 font-display text-[8px] font-bold text-white sm:bottom-20 sm:gap-1.5 sm:px-4 sm:py-1.5 sm:text-[10px]">
                <FaCode /> Open code
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}