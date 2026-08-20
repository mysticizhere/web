# Project images

Drop screenshots here as `.png` / `.jpg` / `.webp`, then wire each one up in
`src/data.js`:

```js
import dbInternals from './assets/projects/database-internals.png';

export const projects = [
  { id: 1, title: 'Database Internals', image: dbInternals, /* ... */ },
];
```

Cards are **400 x 260** (a 20:13 ratio) and the image is drawn with
`object-fit: cover`, so anything wider or taller is centre-cropped rather than
squashed. Export around **800 x 520** so it stays sharp on a 2x display.

Any project left at `image: null` falls back to a hatched placeholder showing
the project title.

## Why import instead of a path string

Importing lets Vite fingerprint the file (`database-internals-a1b2c3.png`) for
cache-busting, and a typo fails the build instead of leaving a broken image at
runtime. The alternative is `public/` — files there are served verbatim from
`/projects/foo.png` with no hashing and no build-time check. Use `public/` only
if something outside the bundle needs a stable URL.
