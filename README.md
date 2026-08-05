# Fathimah Az Zahra — Portfolio

Lanjutan website mulai dari section **About** hingga **Footer**. Hero Section asli tidak disentuh.

## Cara memasang Hero Section kamu

1. Letakkan komponen Hero asli di `components/sections/Hero.tsx`.
2. Beri `id="hero"` pada elemen paling luar Hero (dipakai navbar untuk anchor `#hero`).
3. Di `app/page.tsx`, un-comment baris:
   ```tsx
   import Hero from "@/components/sections/Hero";
   ...
   <Hero />
   ```
   dan letakkan `<Hero />` sebagai child pertama di dalam `<main>`.

## Jalankan secara lokal

```bash
npm install
npm run dev
```

## Design tokens (ringkas)

- **Warna**: blush pink `#F472B6` / `#EC4899` (identitas feminin dari Hero), navy `#0B1220`, blue accent `#3B82F6` (identitas programmer), gold `#FDE68A` (aksen kecil).
- **Tipografi**: `Fraunces` italic untuk eyebrow/label (echo dari wordmark "PORTFOLIO"), `Inter` untuk body text, `Poppins` untuk heading & UI/angka.
- **Signature motif**: highlight box biru transparan di balik kata kunci (`.highlight-mark`), mengambil elemen highlight biru pada "Zahra" di Hero.
- Section **Tech Stack** memakai background navy gelap sebagai satu-satunya kontras gelap di halaman, supaya tetap ada "jeda visual" sebelum Contact & Footer kembali ke nuansa terang.

## Struktur folder

```
app/
  layout.tsx        Root layout, fonts, navbar, scroll progress, cursor glow
  page.tsx           Merangkai semua section (Hero + section baru)
  globals.css         Design tokens & utility class (glass, highlight-mark, dll)
components/
  ui/                 Navbar, ScrollProgressBar, CursorGlow, Reveal, SectionHeading, Counter
  sections/           About, Skills, Projects, Journey, Experience, Certificates, TechStack, Contact, Footer
lib/
  data.ts             Konten (skills, projects, journey, certificates, tech stack)
```
