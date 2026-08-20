# Portfolio

A single-page portfolio built in React + Vite, implemented from the Claude Design
canvas at [`design/Portfolio.dc.html`](design/Portfolio.dc.html) and since taken
further than the canvas.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle
```

> **Node version:** Vite is pinned to the `6.x` line because the installed Node is
> `20.12.2`. Vite 7 and 8 require `^20.19.0 || >=22.12.0` — upgrade Node first if
> you want to move up.

## Layout

```
index.html            Vite entry
src/
  main.jsx            mounts <App>, imports both stylesheets
  App.jsx             route state (home | post) + nav handlers
  data.js             projects, posts, profile
  hooks/
    useReveal.js      IntersectionObserver fade-in for [data-reveal]
  components/
    Hero  About  Projects  Blog  Contact
    PostDetail        blog post reader
    ThreeHero.jsx     lazy-loaded three.js icosahedron
    CustomCursor.jsx  dot + ring, fine-pointer only
    TiltCard.jsx      3D pointer tilt wrapper
    Icons.jsx         Lucide mail / github / linkedin at stroke-width 2.75
  styles/
    organic.css       the Organic design system, verbatim — do not edit
    app.css           page styles, built only from Organic tokens
design/               imported Claude Design source, for reference
```

## The page

Two full-height screens open the site:

1. **Hero** — name, role, and the three.js icosahedron, on the cream ground.
2. **Intro** — the bio and the three section links, set on an angled brown band.

The band is a full-bleed trapezium drawn with `clip-path` on `.band::before`,
filled with `--color-accent-700`. Its left edge is shorter than its right, so the
top and bottom run at opposing angles. The Blog section reuses the same band, and
text inside any `.band` flips to the cream `--color-bg`.

Project thumbnails are `400×260` and tilt in 3D toward the pointer via
`TiltCard`, which writes `--tilt-x` / `--tilt-y` so the transform itself stays in
CSS.

## How it maps to the design

| Design | Implementation |
| --- | --- |
| `state.route` + `sc-if` branches | `route` state in `App.jsx` |
| `sc-for list="{{ projects }}"` | `.map()` in the section components |
| `props.customCursor` / `show3DHero` / `featuredOnly` | props on `<App>`, same defaults |
| inline `style="…"` on every element | classes in `app.css`, same tokens |
| `attachRevealObservers()` re-run on route change | `useReveal(routeKey)` |
| `data-reveal` opacity/transform written by JS | `[data-reveal]` + `.is-visible` |

Diverging from the canvas on purpose: the intro is now a full screen on the band,
the resume section and the contact form are gone, and the contact block is a
centred set of icon links.

## Styling rules

`src/styles/organic.css` is the design system and is treated as read-only — it
came from the canvas and will be overwritten on the next import. Everything in
`app.css` is expressed in its tokens (`--color-*`, `--space-*`, `--radius-*`,
`--font-*`); no raw hex, font names, or magic spacing values.

## Project images

Drop a `.png` / `.jpg` into `src/assets/projects/`, import it in `src/data.js`,
and hand it to that project's `image`:

```js
import dbInternals from './assets/projects/database-internals.png';

export const projects = [
  { id: 1, title: 'Database Internals', image: dbInternals, /* ... */ },
];
```

Cards are 400x260 and draw the image with `object-fit: cover`, so anything off
-ratio is centre-cropped rather than squashed — export around 800x520 for 2x
displays. A project left at `image: null` falls back to a hatched placeholder
showing its title. See [`src/assets/projects/README.md`](src/assets/projects/README.md).

There is no case-study view: the "View Case Study" link is gone, so projects
carry only what the card shows — `period`, `title`, `description`, `tech`,
`github`, `image`.

## Known placeholders

- Projects have no images yet, so every card shows the title fallback.
- Blog posts in `data.js` are still the design's sample copy.
- Contact links point at `profile.email` / `profile.github` / `profile.linkedin`
  in `data.js`, which are still example values.
