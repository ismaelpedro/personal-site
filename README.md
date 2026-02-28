# ismaelpedro.dev

Personal website of **Ismael Pedro** — Software Engineer.

Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Dark minimalist design** with dot-grid background and Geist Mono typography
- **Multi-language** — EN, PT, and ES with instant switching
- **Light/dark theme** toggle
- **Location-aware CV download** — automatically serves the Brazil (PT) or Spain (ES) resume based on the visitor's region
- **Contact modal** with one-click email copy, LinkedIn, X, and WhatsApp links
- **Fully static** — no backend, no database, deploy anywhere

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Vite](https://vitejs.dev) | Build tooling |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Geist Mono](https://fonts.google.com/specimen/Geist+Mono) | Typography |

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, About, Philosophy, Skills, Experience
│   └── ui/           # ContactModal, SectionLabel
├── context/
│   └── AppContext.tsx        # Theme, language, translations
├── hooks/
│   ├── useUserLocation.ts    # IP geolocation → region detection
│   └── useTypingAnimation.ts # Typing effect for hero roles
├── data/
│   ├── experience.ts         # Career data
│   └── skills.ts             # Skills, education, language proficiencies
├── i18n/
│   └── translations.ts       # EN / PT / ES strings
└── types/
    └── index.ts              # Shared TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 18+
- yarn

### Install & Run

```bash
# Clone the repository
git clone https://github.com/ismaelpedro/ismaelpedro.dev.git
cd ismaelpedro.dev

# Install dependencies
yarn

# Start dev server
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
yarn build
```

Output goes to `dist/`. Deploy to Vercel, Netlify, GitHub Pages, or any static host.

### Add Your Resumes

Place your PDF files in `public/resumes/`:

```
public/
└── resumes/
    ├── resume_ismael_br.pdf   # Brazilian Portuguese version
    └── resume_ismael_es.pdf   # Spanish version
```

The site will automatically serve the correct version based on the visitor's location.

## Location Detection

The `useUserLocation` hook calls [ipapi.co](https://ipapi.co) (free tier, no API key required) to detect the visitor's continent. Visitors from **North/South America** receive the Brazil CV; all others receive the Spain CV. Falls back to the Brazil version if geolocation fails.

## Customisation

- **Career data** → [src/data/experience.ts](src/data/experience.ts)
- **Skills** → [src/data/skills.ts](src/data/skills.ts)
- **Translations** → [src/i18n/translations.ts](src/i18n/translations.ts)

## License

MIT — see [LICENSE](./LICENSE) for details.
