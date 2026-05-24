# 🚀 Fathi's Portfolio

A modern, responsive personal portfolio website built with Next.js 15 and Tailwind CSS 4. Showcases projects, skills, and contact information in a sleek dark-themed single-page layout.

![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?style=flat&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3-06B6D4?style=flat&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat&logo=docker)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build & Production](#build--production)
- [Project Structure](#-project-structure)
- [Docker Usage](#-docker-usage)
- [API](#-api)
- [Deployment](#-deployment)
- [Project Credits](#-project-credits)

---

## ✨ Features

- **Responsive Design** — Fully responsive across desktop, tablet, and mobile
- **Dark Theme** — Sleek dark UI with gradient accents
- **Smooth Scrolling** — Section-based navigation with smooth scroll
- **Mobile Navigation** — Hamburger menu with animated open/close
- **Component-Based Architecture** — Clean, modular React components
- **Healthcheck Endpoint** — `/api/health` for container orchestration
- **Dockerized** — Multi-stage build for production and development
- **CI/CD Ready** — GitHub Actions pipeline with lint, build, and Docker checks
- **TypeScript** — Full type safety with strict mode
- **ESLint** — Configured with `eslint-config-next`

---

## 🛠 Tech Stack

| Category       | Technology                                |
| -------------- | ----------------------------------------- |
| Framework      | Next.js 15.1.0 (App Router)               |
| Language       | TypeScript 5.9                            |
| UI Library     | React 19                                  |
| Styling        | Tailwind CSS 4.3                          |
| Linting        | ESLint 9 (config: `eslint-config-next`)   |
| Containerization | Docker (multi-stage), Docker Compose    |
| CI/CD          | GitHub Actions                            |
| Deployment Target | Standalone Next.js output (configurable) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [npm](https://www.npmjs.com/) 9+
- (Optional) [Docker](https://www.docker.com/) 24+ and Docker Compose

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Portofolio

# Install dependencies
npm install
```

### Development

```bash
# Start the development server with hot reload
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm run start
```

### Other Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run lint`     | Run ESLint                           |
| `npm run typecheck` | TypeScript type checking (no emit)  |

---

## 📁 Project Structure

```
Portofolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline (lint → build → Docker check → deploy)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── health/
│   │   │       └── route.ts    # Healthcheck endpoint (GET /api/health)
│   │   ├── globals.css         # Global styles & Tailwind imports
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Home page composing all sections
│   └── components/
│       ├── About.tsx           # About / bio section
│       ├── Contact.tsx         # Contact form / info section
│       ├── Footer.tsx          # Site footer
│       ├── Hero.tsx            # Landing hero section
│       ├── Navbar.tsx          # Navigation bar (responsive)
│       ├── Projects.tsx        # Projects showcase grid
│       └── Skills.tsx          # Skills & technologies display
├── .dockerignore               # Docker build ignore rules
├── .gitignore                  # Git ignore rules
├── docker-compose.yml          # Dev & prod service definitions
├── Dockerfile                  # Multi-stage Docker build
├── next.config.ts              # Next.js config (standalone output)
├── next-env.d.ts               # Next.js TypeScript declarations
├── package.json                # Dependencies & scripts
├── postcss.config.mjs          # PostCSS config for Tailwind CSS
└── tsconfig.json               # TypeScript configuration
```

---

## 🐳 Docker Usage

### Development (with hot reload)

```bash
# Start with rebuild
npm run docker:dev:build

# Start (uses cached layers)
npm run docker:dev
```

The dev server is available at [http://localhost:3000](http://localhost:3000) with volume-mounted source for hot reload.

### Production

```bash
# Build and start
npm run docker:prod:build

# Start (uses cached image)
npm run docker:prod
```

The production server is available at [http://localhost:3000](http://localhost:3000).

### Stop Containers

```bash
npm run docker:down
```

### Manual Docker Commands

```bash
# Build the production image
docker build -t portfolio:latest .

# Run the production container
docker run -d --name portfolio -p 3000:3000 portfolio:latest

# Check health
docker exec portfolio wget --no-verbose --tries=1 --spider http://localhost:3000/api/health

# View logs
docker logs -f portfolio

# Stop and remove
docker stop portfolio && docker rm portfolio
```

### Dockerfile Stages

| Stage    | Base Image       | Purpose                                |
| -------- | ---------------- | -------------------------------------- |
| `builder` | `node:20-alpine` | Installs deps and compiles Next.js app |
| `runner`  | `node:20-alpine` | Runs the standalone server as non-root |

### Healthcheck

The container includes a HEALTHCHECK that polls `GET /api/health` every 30s. Docker Compose also defines healthchecks for both dev and prod profiles.

---

## 📡 API

### Healthcheck Endpoint

```
GET /api/health
```

**Response (200):**

```json
{
  "status": "ok",
  "timestamp": "2025-01-15T12:00:00.000Z",
  "uptime": 42.5,
  "environment": "production"
}
```

Used by Docker healthchecks, container orchestrators, and CI/CD pipelines.

---

## 🌐 Deployment

### CI/CD Pipeline

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push and pull request to `main`:

1. **Lint & Build** — Installs deps, runs ESLint (zero warnings), builds the app
2. **Docker Build** — Builds the Docker image and verifies it starts with a healthcheck pass
3. **Deploy** — Placeholder job for your deployment target (Vercel, AWS, GCP, etc.)

### Deployment Options

| Platform       | Notes                                                    |
| -------------- | -------------------------------------------------------- |
| **Docker**     | Use the included multi-stage Dockerfile                   |
| **Vercel**     | Native Next.js support; connect repo and deploy           |
| **AWS**        | Deploy via ECS, EKS, or Amplify                           |
| **Self-hosted** | Run the standalone output with `node server.js`          |

The `next.config.ts` uses `output: 'standalone'`, which produces a self-contained server in `.next/standalone/` — ideal for Docker deployments.

---

## 👥 Project Credits

This portfolio was built collaboratively by an AI agent team:

| Agent   | Role       | Contributions                                                                                  |
| ------- | ---------- | ---------------------------------------------------------------------------------------------- |
| Agent 1 | **Builder**  | Built the Next.js portfolio from scratch — all pages, components, styling, and configuration. Fixed 6 bugs found during testing. |
| Agent 2 | **Tester**   | Performed quality assurance testing. Identified 6 bugs: missing CSS class, dead directory, placeholder links, React key issue, missing aria-label, and missing ESLint config. |
| Agent 3 | **Reviewer** | Conducted code review. Assessed code quality, identified improvement areas in SEO, accessibility, and component reusability. |
| Agent 4 | **DevOps**   | Set up Docker multi-stage build, Docker Compose (dev + prod profiles), GitHub Actions CI/CD pipeline, healthcheck endpoint, `.gitignore`, and `.dockerignore`. |
| Agent 5 | **PM**       | Project documentation, final summary, and coordination.                                        |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with ❤️ using Next.js, React, and Tailwind CSS
