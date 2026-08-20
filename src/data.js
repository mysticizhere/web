// Portfolio content. The components only read from here.
//
// PROJECT IMAGES
// Drop a .png / .jpg into src/assets/projects/, import it at the top of this
// file, and hand it to that project's `image`:
//
//   import dbInternals from './assets/projects/database-internals.png';
//   ...
//   { id: 1, title: 'Database Internals', image: dbInternals, ... }
//
// Importing (rather than writing a bare path string) means Vite fingerprints
// the file for cache-busting and fails the build on a typo instead of leaving
// you a broken image at runtime. Leave `image: null` and the card falls back to
// a hatched placeholder showing the project title.
import Telsa from './assets/projects/Tesla.png'
import Maplex from './assets/projects/Maplex.png'
import OGC from './assets/projects/OGC.jpeg'
import compiler from './assets/projects/compiler.png'
import Nimbus from './assets/projects/Nimbus.png'
import Path from './assets/projects/Path.png'
import DBI from './assets/projects/DBI.png'


export const projects = [
  {
    id: 1,
    period: '2026',
    title: 'Database Internals',
    description:
      'A local Postgres lab for learning query performance from the inside. Visualizes execution plans with estimate-vs-actual error highlighting, and walks the real B+tree of any index via pageinspect. Includes 14 auto-graded exercises on a 10M-row dataset, each graded by asserting against the resulting plan rather than the output. Sandbox mode rolls back every experiment, so index designs cost nothing to test. Benchmark sweeps chart selectivity crossovers, write amplification, and pagination strategies side by side.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Python'],
    github: 'https://github.com/mysticizhere/dbi',
    image: DBI,
  },
  {
    id: 2,
    period: '2026',
    title: 'Maplex',
    description:
      'An MCP server exposing OGC API Processes 1.0 capabilities through an LLM-friendly interface. Supports process discovery, process details, execution, job status, and results retrieval. Designed to work with OGC/pygeoapi deployments and existing geospatial processing workflows. Makes geospatial tools more accessible to users with limited GIS or technical knowledge. Users can explore geospatial capabilities, plan projects, and execute workflows using natural language. Provides factual, real-time geospatial responses through an LLM.',
    tech: ['Python', 'MCP', 'Docker'],
    github: 'https://github.com/mysticizhere/maplex',
    image: Maplex,
  },
  {
    id: 3,
    period: '2026',
    title: 'OGC',
    description: 'Backend architecture for high-performance OGC API implementations with a focus on scalability and reliability. Includes a custom ORM wrapper, structured FastAPI exception handling, and robust validation mechanisms. Implements comprehensive security measures across API endpoints and data workflows. Optimized for efficient geospatial data access, processing, and API performance. Designed to provide a reusable and maintainable foundation for production-grade OGC services. Built to support scalable, secure, and standards-compliant geospatial applications.',
    tech: ['FastAPI', 'Python', 'Docker'],
    github: 'https://github.com/mysticizhere/ogc',
    image: OGC,
  },
  {
    id: 4,
    period: '2026',
    title: 'TinyCC',
    description:
      'A lightweight compiler frontend for a small C-like language, written in C++17. Implements a complete pipeline from source text through lexical analysis, parsing, lowering, and verification. Compiles programs into a flat three-address intermediate representation (IR). Includes a verifier for semantic and IR-level validation, such as use-before-definition and unreachable code. Built with CMake and supported by a focused test suite covering lexer, parser, and verifier behavior. Designed as a clean foundation for future compiler backends, interpreters, or code-generation pipelines.',
    tech: ['C++', 'CMake', 'Compiler Design'],
    github: 'https://github.com/mysticizhere/tinycc',
    image: compiler,
  },
  {
    id: 5,
    period: '2025',
    title: 'Tesla Trial',
    description:
      'A 2D platformer game built with Phaser.io for the GameDev.js 2024 game jam in 10 days. Inspired by the jam theme “Power”, the game explores an alternate universe where Tesla’s early experiments go wrong. Features custom animations, platforming mechanics, a boss fight, and an endless game mode. Built as a collaborative project while learning and experimenting with the Phaser game engine. The project is open source, with the code available on GitHub for others to explore and contribute to. Created as an original game jam project focused on experimentation, creativity, and fun.',
    tech: ['Javascript', 'CSS', 'Phaser'],
    github: 'https://github.com/mysticizhere/GameTesla',
    image: Telsa,
  },
  {
    id: 6,
    period: '2024',
    title: 'Pathfinder',
    description:
      'A web-based visualizer for exploring and understanding graph pathfinding algorithms such as BFS, DFS, and Dijkstras algorithm.Built with React and React Hooks to create an interactive and responsive visualization experience.Provides step-by-step algorithm execution to help users understand how different approaches traverse graphs and find paths.Includes optimized rendering and loading strategies for smooth performance on larger graphs.Designed as an educational tool for experimenting with graph structures and comparing pathfinding algorithms.Focuses on making complex graph algorithms intuitive through interactive visualizations.',
    tech: ['Javascript', 'CSS', 'React', 'Graphs'],
    github: 'https://github.com/mysticizhere/pathfinder',
    image: Path,
  },
  {
    id: 7,
    period: '2023',
    title: 'NIMBUS 2K22',
    description:
      'A full-stack web application for efficiently sending bulk email and SMS notifications to registered fest participants.Integrated Amazon SES for large-scale email delivery and Twilio for SMS communication.Built an interactive UI with Framer Motion, GSAP, and Three.js for animations and 3D visualizations.Used PostgreSQL with Prisma ORM for reliable data management and React Query for efficient frontend data fetching. Designed for scalable, responsive, and engaging communication during large-scale fest events.',
    tech: ['Javascript', 'SCSS', '3js'],
    github: 'https://github.com/pixonoids/Nimbus-2k22',
    image: Nimbus,
  },
];

export const posts = [
  {
    id: 1,
    date: 'Jul 2026',
    readTime: '6 min read',
    title: 'Why I Switched to React Server Components',
    excerpt:
      'What changed in my mental model after moving a mid-size app from client-only rendering to RSC, and where it still gets awkward.',
    tags: ['React', 'Performance'],
    content: [
      'For most of the last two years I built everything as a client-rendered React app: fetch on mount, show a spinner, render. It works, but it means the browser does a lot of work before anyone sees content.',
      'Moving to React Server Components changed that. Data fetching moved to the server, and the client bundle got smaller because a lot of components no longer needed to ship any JavaScript at all.',
      'The rough edges are real: state management gets more nuanced once you have server and client components in the same tree, and debugging hydration mismatches took longer than I expected.',
      'Overall the switch was worth it for pages where most of the content is server-fetched and only a few pieces need interactivity. For heavily interactive views, I still reach for a fully client-rendered approach.',
    ],
  },
  {
    id: 2,
    date: 'May 2026',
    readTime: '8 min read',
    title: 'Building a Real-Time Cursor System with WebSockets',
    excerpt:
      'Notes from building live multiplayer cursors for TaskFlow, including the throttling tricks that kept it smooth.',
    tags: ['WebSockets', 'Real-time'],
    content: [
      'Live cursors look simple until you try to build them. The naive version — broadcast every mousemove event — floods the socket and makes everything choppy.',
      'The fix was throttling on the client to about 20 updates per second, and interpolating positions on the receiving end so movement still looks smooth between updates.',
      'I also had to handle disconnects gracefully: a cursor that stops updating needs to fade out after a short timeout instead of freezing in place forever.',
      'The whole system ended up being a small piece of code, but it is the detail people notice first when they open TaskFlow with a teammate.',
    ],
  },
  {
    id: 3,
    date: 'Mar 2026',
    readTime: '7 min read',
    title: 'A Practical Guide to TypeScript Generics',
    excerpt:
      'The generic patterns I actually use day to day, without the abstract examples that make generics feel harder than they are.',
    tags: ['TypeScript'],
    content: [
      'Most TypeScript generics tutorials start with abstract examples that do not look like anything in a real codebase. This is the version I wish I had when I started.',
      'The pattern I use most is a generic API response wrapper: one type that describes success and error shapes, parameterized by the data type for each endpoint.',
      'The second most useful pattern is generic component props, especially for list and table components that need to stay strongly typed across different data shapes.',
      'Once these two patterns clicked, most of the generics I write day to day stopped feeling like a separate skill and started feeling like normal TypeScript.',
    ],
  },
  {
    id: 4,
    date: 'Jan 2026',
    readTime: '5 min read',
    title: 'What Two Years as a Developer Taught Me About Debugging',
    excerpt:
      'The habits that actually made me faster at finding bugs, and the ones that just felt productive.',
    tags: ['Career', 'Process'],
    content: [
      'Two years in, the biggest change in how I debug is not tooling, it is sequencing: reproduce first, understand second, fix last.',
      'Early on I would jump straight to fixing based on a guess. That worked often enough to be a bad habit, and cost me hours on the bugs where the first guess was wrong.',
      'Reading error messages fully, all the way to the bottom of the stack trace, catches more bugs than any debugging tool I have used.',
      'The most useful single habit has been writing down what I expected to happen before I start debugging. It makes the actual bug easier to spot by contrast.',
    ],
  },
];

export const profile = {
  name: 'Bhanu Pratap',
  role: 'Full-Stack Developer',
  bio: "I'm Bhanu, a full-stack developer with 2+ years of experience shipping production software. I love deep-diving into system internals, problem solving, creating art, creating video games and talking about physics and maths.",
  available: 'Available for new opportunities',
  email: 'bhanu.pratap@12280.com',
  github: 'github.com/mysticizhere/',
  linkedin: 'linkedin.com/in/bhanupratap12280/',
};
