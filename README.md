# Maya's Portfolio

A modern, clean resume portfolio website built with React, Vite, and TailwindCSS.

## Setup

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   └── common/          # Reusable base components
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Container.jsx
│       └── Section.jsx
├── data/                # Static data files
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── styles/              # Additional stylesheets
├── App.jsx              # Main app component
└── index.css            # Global styles with TailwindCSS
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS
- **Inter + Playfair Display** - Google Fonts

## Development

The project uses TailwindCSS for styling with design tokens configured in `tailwind.config.js`. Global styles are in `src/index.css`.

## Next Steps

Phase 2: Build out the core sections (Hero, About, Projects, Skills, Experience, Contact)
