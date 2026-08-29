# Rahmad Setiawan Mukminullah - Portfolio 🌐

A modern, high-performance developer portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with an immersive hacker/matrix green theme featuring dynamic binary rain animations, glitch typography, and interactive project showcases.

---

## ✨ Features

- **Matrix / Cyberpunk Aesthetic**: Sleek dark mode design with matrix neon green accents (`#0e6b0e`), scanlines, and animated glow effects.
- **Dynamic Binary Rain Animation**: Background canvas rendering an interactive binary stream effect.
- **Glitch Typography**: Custom animated glitch text components for section headers.
- **Interactive Project Showcase**:
  - Highlights enterprise and personal projects (eKYC, Web Registration, Document Management System, Todo Notes, etc.).
  - Image modal with interactive zoom in/out, pan, and reset controls.
- **About & Education Section**: Highlights skills across Mobile & Full-Stack engineering and educational background from Politeknik Negeri Jakarta.
- **Connected Socials**: Direct contact access to Email, LinkedIn, GitHub, Threads, and Medium.
- **Production-Ready Docker Setup**: Optimized multi-stage Docker build with Next.js standalone output.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons & UI Primitives**: [Lucide React](https://lucide.dev/), [Radix UI](https://www.radix-ui.com/)
- **Deployment**: [Docker](https://www.docker.com/), [Docker Compose](https://docs.docker.com/compose/), [Coolify](https://coolify.io/)

---

## 📁 Project Structure

```text
├── app/
│   ├── components/
│   │   ├── AboutMe.tsx          # About me summary & expertise tags
│   │   ├── BinaryRain.tsx       # Canvas binary matrix rain background
│   │   ├── ContactMe.tsx        # Contact cards & social links
│   │   ├── Education.tsx        # Education details
│   │   ├── Footer.tsx           # Minimalist copyright footer
│   │   ├── GlitchText.tsx       # Glitch header animation
│   │   ├── Hero.tsx             # Hero section with intro & CTA
│   │   ├── LoadingProgress.tsx  # Page loader bar
│   │   ├── Navbar.tsx           # Navigation bar with quick links
│   │   └── Projects.tsx         # Projects list with zoomable modal
│   ├── globals.css              # Global styles & theme variables
│   ├── layout.tsx               # Root layout & metadata
│   └── page.tsx                 # Main portfolio page
├── components/ui/               # Reusable Radix UI & Shadcn components
├── public/                      # Static assets & project preview images
├── Dockerfile                   # Multi-stage production Docker build
├── docker-compose.yml           # Docker Compose service definition
├── next.config.mjs              # Next.js configuration (standalone mode)
├── package.json                 # Project dependencies & scripts
└── tailwind.config.ts           # Tailwind CSS configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm` (or `yarn` / `pnpm`)
- **Docker** (Optional, for containerized run)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NaturalizerINA/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🐳 Running with Docker

Run the entire application in a lightweight production container using Docker Compose:

```bash
# Build and run container in detached mode
docker compose up -d --build

# View container logs
docker compose logs -f

# Stop container
docker compose down
```

The container will run on port `3000` (`http://localhost:3000`).

---

## 📬 Contact & Socials

- **Email**: [rahmad.mukminullah@gmail.com](mailto:rahmad.mukminullah@gmail.com)
- **LinkedIn**: [Rahmad Setiawan M](https://www.linkedin.com/in/mukminullah/)
- **GitHub**: [@NaturalizerINA](https://github.com/NaturalizerINA)
- **Threads**: [@rahmadsm_art](https://www.threads.net/@rahmadsm_art)
- **Medium**: [@rahmad-mukminullah](https://medium.com/@rahmad-mukminullah)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
