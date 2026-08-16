# Anuj Srivastava — Portfolio

Single-page React portfolio. All content lives in one file (`src/portfolioData.js`)
so copy, projects, and links can be edited without touching layout code.

## Tech Stack

- **React 19** + **Vite 6** — app shell and build tooling
- **Framer Motion** — section reveals and the project-list expand
- **lucide-react** — icon set
- Plain CSS (`src/styles.css`), themed with CSS custom properties (dark + light)

## Project Structure

```
├── index.html            # HTML entry point + Open Graph meta tags
├── vite.config.js        # Vite + React plugin config
├── src/
│   ├── main.jsx          # React entry
│   ├── App.jsx           # Page layout and sections
│   ├── portfolioData.js  # ALL CONTENT — edit this file
│   ├── designTokens.js   # Animation presets and interaction timings
│   └── styles.css        # Global styles + theme tokens
└── public/
    ├── Anuj_Resume.pdf   # Linked from the hero and contact section
    └── assets/           # Screenshots, demo videos, portrait
```

Page order: Hero → Projects → Skills → Experience & Education → About → Contact.

---

## Adding your photos and videos

All media goes in **`public/assets/`**. Anything in that folder is served from the
site root, so a file saved as `public/assets/procurehub.png` is referenced in code
as `/assets/procurehub.png` (note the leading slash, and no `public`).

### 1. Project screenshots

Open `src/portfolioData.js`, find the project in the `projects` array, and set its
`media` field:

```js
media: { type: "image", src: "/assets/procurehub.png" },
```

### 2. Project demo videos

Same field, `type: "video"`. The video autoplays, loops, and is permanently muted
(browsers block autoplay with sound), so it behaves like an animated GIF but at a
fraction of the file size:

```js
media: { type: "video", src: "/assets/procurehub-demo.mp4" },
```

Use MP4 (H.264). Keep clips **under 10 seconds and under 3 MB** — a demo video is
the single easiest way to blow the page's load budget. Record the screen, trim to
the one moment that shows the product working, and export at 1280×720 or smaller.

### 3. Your portrait photo

In the same file, scroll to the `about` object near the bottom and set `photo`:

```js
export const about = {
  heading: "About",
  photo: "/assets/anuj.jpg",   // was null
  photoAlt: "Anuj Srivastava",
  ...
};
```

The About section switches to a two-column layout automatically once `photo` is
set, and collapses back to a single column on mobile. The image is cropped to a
4:5 portrait ratio, so use a photo where your face sits in the upper-middle.

### If you leave media empty

Nothing breaks. A project with `media: null` renders a clean titled panel in the
site's accent colour, and `photo: null` renders the About section as text only.

### Image sizing guide

| Slot | Recommended size | Format |
|---|---|---|
| Project screenshot | 1200 × 750 | PNG or JPG, under 400 KB |
| Project demo video | 1280 × 720 | MP4 (H.264), under 3 MB |
| Portrait photo | 800 × 1000 | JPG, under 300 KB |
| Open Graph preview (`index.html`) | 1200 × 630 | PNG or JPG |

Compress before committing — [squoosh.app](https://squoosh.app) does this in the
browser. The whole page should stay under ~1.5 s to load.

---

## Adding or reordering projects

Every project is an object in the `projects` array in `src/portfolioData.js`. The
`featured` flag decides how it appears:

- **`featured: true`** — full card with screenshot, story paragraph, and metric
  row. Always visible. **Keep this to three.** Curation is the signal; a wall of
  twelve cards reads as "can't tell good from bad."
- **`featured: false`** — compact row, hidden until the visitor clicks
  *"Show all N projects"*. Add as many as you like here.

A featured project can also carry a `metrics` array, which renders as the
number row under the description:

```js
metrics: [
  { value: "48", label: "API endpoints" },
  { value: "Live", label: "in daily use" },
],
```

Concrete beats adjectives — request rates, query times, test counts, user counts.
If a project genuinely has no number, name the hard part you solved instead.

---

## Theme

Dark is the default. The header toggle switches to light and the choice is saved
to `localStorage`; visitors who have never toggled get whichever matches their OS
setting. Both palettes are defined as custom properties at the top of
`src/styles.css` — `:root` for dark, `:root[data-theme="light"]` for light. Change
`--accent` in both blocks to re-skin the whole site.

---

## Getting Started

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite dev server with hot reloading at **http://127.0.0.1:5173**.

### Build for production

```bash
npm run build
```

Outputs to `dist/`.

### Preview the production build

```bash
npm run preview
```

Serves `dist/` at **http://127.0.0.1:4173** for a final check before deploying.

## Deployment

Builds to a static `dist/` folder; set up for Vercel. Before deploying, check that
`public/Anuj_Resume.pdf` is the current résumé and that the Open Graph tags in
`index.html` still describe the site — those tags are what render when the link is
pasted into Slack, LinkedIn, or WhatsApp.
