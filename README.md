# Cyber Portfolio

Portofolio developer bergaya **cyberpunk hitam-merah** — terinspirasi portfolio "Ryan" (template HTML/CSS populer), dibangun ulang dengan React + TypeScript + Tailwind, dengan hero **video mata menyala** yang berkedip loop.

**Live:** https://kyuzalabs.github.io/cyber-portfolio/

## Stack
- React + Vite + TypeScript
- Tailwind CSS v4 (tema custom: hitam `#0a0a0a` + merah `#e9432e`)
- Framer Motion (reveal scroll, pill nav sliding, micro-interactions)
- react-icons (Fa + Simple Icons untuk skill brand logo)

## Section
Home (hero + phone mockup video + stats + CTA + social) → About → My Services → Latest Project → My Skill → Contact (form + WhatsApp + alamat).

## Gimmick / animasi
- Navbar: pill merah **slide** mengikuti hover + section aktif (spring layout animation)
- Tombol CTA: fill-sweep (Hire me / Download CV)
- Hero: `<video>` mata menyala `autoplay muted loop playsinline`
- Hover: border merah + glow di stat card, project card, service card, skill card
- Reveal scroll (re-trigger) via framer-motion

## Jalankan lokal
```bash
npm install
npm run dev       # dev server
npm run build     # typecheck + build
```

## Deploy
```bash
bash deploy.sh
```

## Kustomisasi
Semua teks/konten di `src/data/content.ts` (nama, bio, statistik, service, project, skill, kontak/WhatsApp). Video hero di `public/videos/eye.mp4`.

## Catatan
- Stat "0+ Happy Clients" sengaja dipertahankan sesuai template referensi (fitur yang "tidak berguna tapi ada").
- Video `eye.mp4` (Demon Slayer) adalah footage pihak ketiga — buat portofolio pribadi tidak masalah, tapi jangan dipakai komersial tanpa izin.
- Form kontak memakai `mailto:` (tanpa backend).