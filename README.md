# Developer Portfolio 🖥️

Personal portfolio for **Umair Khan** (`123umair`) — a dark, terminal-inspired bento-grid portfolio built with React + TypeScript + Vite and Tailwind CSS.

## ✨ Features

- **Bento grid layout** — intro, credentials, and details sections animate in on scroll (IntersectionObserver)
- **Projects grid with signal connectors** — each project card is wired to the grid's mid line; green signal pulses travel from project to project through the gaps
- **Live project previews** — real screenshots of deployed apps, clicking a preview opens the live site
- **"Coming soon" build animation** — unreleased projects get a build-in-progress panel: sweeping scan line, glowing COMING SOON, indeterminate progress bar and blinking terminal cursor

## 🚀 Projects Shown

| Project | Stack | Status |
| --- | --- | --- |
| [WanderLust](https://wander-lust-fullstack.vercel.app/) | React · Node.js · Express · MongoDB | Live |
| [Crazeations](https://crazeations-digital.vercel.app/) | React · TypeScript · Tailwind CSS | Live |
| TradeNest | MERN (MongoDB · Express · React · Node.js) | 🚧 In Development |

## 🛠 Tech Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4
- Custom keyframe animations (bento entrances, signal flow, scan line)

## 📦 Run locally

```bash
npm install
npm run dev
```

## 🚢 Build for production

```bash
npm run build
```

Output is served from `dist/`.

---

Deployed on Vercel — add your project entries in [`src/projectsData/Projects.tsx`](src/projectsData/Projects.tsx).
