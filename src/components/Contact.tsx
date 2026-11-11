import { useState } from 'react'
import type { FormEvent } from 'react'
import Reveal from './Reveal'
import { FaWhatsapp, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import { contact } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[Portfolio] ${form.name || 'Guest'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputCls =
    'w-full rounded-xl border border-white/10 bg-card px-4 py-3 font-sans text-sm text-ink placeholder:text-mut/60 focus:border-red focus:outline-none'

  return (
    <section id="contact" className="px-5 pb-24 pt-8 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            {contact.titleA} <span className="text-red">{contact.titleB}</span>
          </h2>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-mut">{contact.para}</p>

          <a
            href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-3 rounded-full bg-red px-6 py-3.5 font-display font-bold text-white transition-colors hover:bg-redh"
          >
            <FaWhatsapp className="text-xl" /> My Whatsapp
          </a>

          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-card p-4">
            <FaMapMarkerAlt className="text-xl text-red" />
            <span className="font-sans text-sm text-mut">{contact.address}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            {contact.formA} <span className="text-red">{contact.formB}</span>
          </h2>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className={inputCls}
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder="Your email"
              className={inputCls}
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your message"
              rows={4}
              className={inputCls}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-redh"
            >
              {sent ? '✓ Sent' : 'Enter'} <FaArrowRight />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}