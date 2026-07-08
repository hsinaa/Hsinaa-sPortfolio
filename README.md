# Hasnae Amansag — Portfolio

A clean, modular React portfolio built with Vite.  
Every piece of content lives in its own file — no hunting through component code to update your bio or add a project.

---

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

---

## Project Structure

```
portfolio/
├── public/
│   └── cv.pdf                  ← place your CV here
│
├── src/
│   ├── data/                   ← ✏️  EDIT YOUR CONTENT HERE
│   │   ├── personal.js         name, bio, contact links, hero tags
│   │   ├── education.js        education timeline entries
│   │   ├── experience.js       work experience entries
│   │   ├── projects.js         project cards + modal content
│   │   ├── skills.js           skill categories and items
│   │   ├── certifications.js   certification cards
│   │   └── navigation.js       navbar links
│   │
│   ├── styles/
│   │   └── tokens.js           ← 🎨  EDIT COLORS / FONTS HERE
│   │
│   ├── components/             reusable UI building blocks
│   │   ├── ui.jsx              Button, Tag, SectionLabel, SectionTitle
│   │   ├── MeshCanvas.jsx      animated hero background
│   │   ├── TimelineItem.jsx    timeline card + wrapper
│   │   └── ProjectModal.jsx    project detail overlay
│   │
│   ├── sections/               one file per page section
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx                 assembles all sections in order
│   └── main.jsx                React root + global styles
│
├── index.html
├── vite.config.js
└── vercel.json
```

---

## How to Edit Content

### Update your personal info / bio / contact
→ Edit **`src/data/personal.js`**

### Add a new education entry
→ Open **`src/data/education.js`** and copy the commented template at the bottom.

### Add a new job / internship
→ Open **`src/data/experience.js`** and copy the commented template.

### Add a new project
→ Open **`src/data/projects.js`** and copy the commented template at the bottom.  
To add an architecture diagram, put an image in `public/diagrams/` and set `diagramUrl: "/diagrams/your-image.png"`.

### Add / remove a skill or category
→ Edit **`src/data/skills.js`**

### Add a certification
→ Edit **`src/data/certifications.js`** and copy the commented template.

### Add / remove a credential URL on a cert card
→ Set the `url` field in **`src/data/certifications.js`**. A "View credential" button will appear automatically.

### Change colors or fonts
→ Edit **`src/styles/tokens.js`** — changes apply everywhere instantly.

### Add or remove a whole section
→ Open **`src/App.jsx`**, import your section file, and add it to the JSX.  
→ Add a matching entry in **`src/data/navigation.js`** for the navbar link.

---

## Your CV

Place your CV PDF at **`public/cv.pdf`**.  
All "Download CV" buttons link to `/cv.pdf` automatically.

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel          # follow the prompts
```

### Option B — GitHub + Vercel dashboard
1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Vercel auto-detects Vite. Leave all settings as-is and click **Deploy**.
4. Every `git push` to `main` triggers an automatic redeploy.

The `vercel.json` at the root handles SPA routing so deep links work correctly.

---

## Adding Architecture Diagrams

1. Put your image in `public/diagrams/`, e.g. `public/diagrams/k8s.png`
2. In `src/data/projects.js`, set:
   ```js
   diagramUrl: "/diagrams/k8s.png"
   ```
3. The modal will show the image instead of the placeholder.
# Hsinaa-sPortfolio
