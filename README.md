# 🚀 Portofolio — Muh. Fadhil Fathi Rizal

Website portofolio pribadi modern dan responsif yang dibangun dengan **Next.js 15** dan **Tailwind CSS 4**. Menampilkan pengalaman, proyek, keterampilan, dan informasi kontak dalam tata letak halaman tunggal bertema gelap yang elegan.

**👤 Muh. Fadhil Fathi Rizal** — DevOps Engineer di **PT. Prima Vista Solusi**
**📧** fadhilfathi.rzm@gmail.com | **📱** 085290383202 (WhatsApp)

![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?style=flat&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3-06B6D4?style=flat&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)
![Docker](https://img.shields.io/badge/Docker-Siap-2496ED?style=flat&logo=docker)
![Lisensi](https://img.shields.io/badge/Lisensi-MIT-hijau?style=flat)

---

## 📋 Daftar Isi

- [Fitur](#-fitur)
- [Tech Stack](#-tech-stack)
- [Memulai](#-memulai)
  - [Prasyarat](#prasyarat)
  - [Instalasi](#instalasi)
  - [Pengembangan](#pengembangan)
  - [Build & Produksi](#build--produksi)
- [Struktur Proyek](#-struktur-proyek)
- [Penggunaan Docker](#-penggunaan-docker)
- [API](#-api)
- [Deployment](#-deployment)
- [Kredit Proyek](#-kredit-proyek)

---

## ✨ Fitur

- **Desain Responsif** — Responsif penuh di desktop, tablet, dan mobile
- **Tema Gelap** — Tampilan UI gelap yang elegan dengan aksen gradien
- **Smooth Scrolling** — Navigasi berbasis section dengan scroll halus
- **Navigasi Mobile** — Menu hamburger dengan animasi buka/tutup
- **Arsitektur Berbasis Komponen** — 8 komponen React yang bersih dan modular
- **Timeline Experience** — Section pengalaman kerja dengan desain timeline
- **Skill Bars** — Visualisasi tingkat keahlian dengan progress bar gradient
- **Endpoint Healthcheck** — `/api/health` untuk orkestrasi container
- **Dockerized** — Multi-stage build untuk produksi dan pengembangan
- **CI/CD Siap Pakai** — Pipeline GitHub Actions dengan lint, build, dan pengecekan Docker
- **TypeScript** — Keamanan tipe penuh dengan mode strict
- **ESLint** — Dikonfigurasi dengan `eslint-config-next`

---

## 🛠 Tech Stack

| Kategori        | Teknologi                                |
| --------------- | ---------------------------------------- |
| Framework       | Next.js 15.1.0 (App Router)              |
| Bahasa          | TypeScript 5.9                           |
| UI Library      | React 19                                 |
| Styling         | Tailwind CSS 4.3                         |
| Linting         | ESLint 9 (config: `eslint-config-next`)  |
| Containerization| Docker (multi-stage), Docker Compose     |
| CI/CD           | GitHub Actions                           |
| Target Deployment | Standalone Next.js output (dapat dikonfigurasi) |

---

## 🚀 Memulai

### Prasyarat

- [Node.js](https://nodejs.org/) 20+
- [npm](https://www.npmjs.com/) 9+
- (Opsional) [Docker](https://www.docker.com/) 24+ dan Docker Compose

### Instalasi

```bash
# Clone repositori
git clone <url-repositori>
cd Portofolio

# Install dependensi
npm install
```

### Pengembangan

```bash
# Jalankan server pengembangan dengan hot reload
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Build & Produksi

```bash
# Buat build produksi yang dioptimalkan
npm run build

# Jalankan server produksi
npm run start
```

### Skrip Lainnya

| Perintah           | Deskripsi                           |
| ------------------ | ----------------------------------- |
| `npm run lint`     | Jalankan ESLint                     |
| `npm run typecheck` | Pengecekan tipe TypeScript (no emit) |

---

## 📁 Struktur Proyek

```
Portofolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline CI/CD (lint → build → Docker check → deploy)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── health/
│   │   │       └── route.ts    # Endpoint healthcheck (GET /api/health)
│   │   ├── globals.css         # Style global & import Tailwind
│   │   ├── layout.tsx          # Layout root dengan metadata & skip-to-content
│   │   └── page.tsx            # Halaman utama yang menyusun semua section
│   └── components/
│       ├── About.tsx           # Section about / bio
│       ├── Contact.tsx         # Section kontak (email, WhatsApp, GitHub)
│       ├── Experience.tsx      # Timeline pengalaman kerja
│       ├── Footer.tsx          # Footer situs
│       ├── Hero.tsx            # Section hero utama
│       ├── Navbar.tsx          # Navigasi responsif dengan active section
│       ├── Projects.tsx        # Grid proyek
│       └── Skills.tsx          # Tampilan keterampilan dengan progress bar
├── .dockerignore               # Aturan ignore untuk build Docker
├── .gitignore                  # Aturan ignore Git
├── docker-compose.yml          # Definisi service dev & prod
├── Dockerfile                  # Multi-stage Docker build
├── next.config.ts              # Konfigurasi Next.js (standalone output)
├── next-env.d.ts               # Deklarasi TypeScript Next.js
├── package.json                # Dependensi & skrip
├── postcss.config.mjs          # Konfigurasi PostCSS untuk Tailwind CSS
└── tsconfig.json               # Konfigurasi TypeScript
```

---

## 🐳 Penggunaan Docker

### Pengembangan (dengan hot reload)

```bash
# Mulai dengan rebuild
npm run docker:dev:build

# Mulai (menggunakan cache layer)
npm run docker:dev
```

Server pengembangan tersedia di [http://localhost:3000](http://localhost:3000) dengan source yang di-mount untuk hot reload.

### Produksi

```bash
# Build dan mulai
npm run docker:prod:build

# Mulai (menggunakan cache image)
npm run docker:prod
```

Server produksi tersedia di [http://localhost:3000](http://localhost:3000).

### Hentikan Container

```bash
npm run docker:down
```

### Perintah Docker Manual

```bash
# Build image produksi
docker build -t portfolio:latest .

# Jalankan container produksi
docker run -d --name portfolio -p 3000:3000 portfolio:latest

# Cek health
docker exec portfolio wget --no-verbose --tries=1 --spider http://localhost:3000/api/health

# Lihat log
docker logs -f portfolio

# Hentikan dan hapus
docker stop portfolio && docker rm portfolio
```

### Tahapan Dockerfile

| Tahap    | Base Image       | Tujuan                                 |
| -------- | ---------------- | -------------------------------------- |
| `builder` | `node:20-alpine` | Install dependensi dan kompilasi Next.js |
| `runner`  | `node:20-alpine` | Menjalankan server standalone sebagai non-root |

### Healthcheck

Container menyertakan HEALTHCHECK yang memeriksa `GET /api/health` setiap 30 detik. Docker Compose juga mendefinisikan healthcheck untuk profil dev dan prod.

---

## 📡 API

### Endpoint Healthcheck

```
GET /api/health
```

**Respon (200):**

```json
{
  "status": "ok",
  "timestamp": "2025-01-15T12:00:00.000Z",
  "uptime": 42.5,
  "environment": "production"
}
```

Digunakan oleh healthcheck Docker, orkestrator container, dan pipeline CI/CD.

---

## 🌐 Deployment

### Pipeline CI/CD

Workflow GitHub Actions yang disertakan (`.github/workflows/deploy.yml`) berjalan pada setiap push dan pull request ke `main`:

1. **Lint & Build** — Install dependensi, jalankan ESLint (nol peringatan), build aplikasi
2. **Docker Build** — Build image Docker dan verifikasi bahwa container berjalan dengan healthcheck
3. **Deploy** — Job placeholder untuk target deployment Anda (Vercel, AWS, GCP, dll.)

### Opsi Deployment

| Platform       | Catatan                                                   |
| -------------- | --------------------------------------------------------- |
| **Docker**     | Gunakan Dockerfile multi-stage yang disertakan             |
| **Vercel**     | Dukungan Next.js native; hubungkan repositori dan deploy   |
| **AWS**        | Deploy via ECS, EKS, atau Amplify                          |
| **Self-hosted** | Jalankan output standalone dengan `node server.js`        |

`next.config.ts` menggunakan `output: 'standalone'`, yang menghasilkan server mandiri di `.next/standalone/` — ideal untuk deployment Docker.

---

## 👥 Kredit Proyek

Portofolio ini dibangun secara kolaboratif oleh tim agen AI:

| Agen   | Peran         | Kontribusi                                                                                  |
| ------ | ------------- | ------------------------------------------------------------------------------------------- |
| Agen 1 | **Builder**   | Membangun portofolio Next.js dari awal — semua halaman, komponen, styling, dan konfigurasi. Memperbaiki 6 bug yang ditemukan selama pengujian. |
| Agen 2 | **Tester**    | Melakukan pengujian jaminan kualitas. Mengidentifikasi 6 bug: kelas CSS hilang, direktori mati, tautan placeholder, masalah React key, aria-label hilang, dan konfigurasi ESLint hilang. |
| Agen 3 | **Reviewer**  | Melakukan review kode. Menilai kualitas kode, mengidentifikasi area perbaikan dalam SEO, aksesibilitas, dan reusabilitas komponen. |
| Agen 4 | **DevOps**    | Menyiapkan Docker multi-stage build, Docker Compose (profil dev + prod), pipeline CI/CD GitHub Actions, endpoint healthcheck, `.gitignore`, dan `.dockerignore`. |
| Agen 5 | **PM**        | Dokumentasi proyek, ringkasan akhir, dan koordinasi.                                        |

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](LICENSE).

---

> Dibuat dengan ❤️ oleh **Muh. Fadhil Fathi Rizal** menggunakan Next.js, React, dan Tailwind CSS
