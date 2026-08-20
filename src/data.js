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
    title: 'How I automated 10M+ prescriptions for auto digitization',
    excerpt:
      'We built two autonomous hourly crons that scan, re-process, and auto-approve millions of prescription digitization predictions — without a single human click. Here’s the story of what we solved and how.',
    tags: ['Backend', 'Scalability', 'Performance', 'Database', 'Automation'],
    content: [
      { type: 'paragraph', text: 'At our platform, every prescription a user uploads goes through an AI-powered digitization pipeline. A Vision Language Model reads the image, extracts medicine names, dosages, and instructions, and produces a structured prediction. A pharmacist then reviews it before it reaches the user.' },
      { type: 'paragraph', text: 'Sounds clean. In practice, after years of running this at scale, two classes of predictions had quietly piled up in our databases: predictions that were never properly processed — ingested but incomplete because an upstream model failed mid-deployment, a service timed out, or the pipeline changed while records were in-flight — and predictions where the model was confident enough that routing them to a human reviewer was just ceremony. The model was right. No one needed to check.' },
      { type: 'paragraph', text: 'We had millions of these sitting untouched. The solution: two coordinated background jobs — crons — that run every hour and quietly process the backlog, permanently.' },

      { type: 'heading', text: 'Why Not Just Run a Script?' },
      { type: 'paragraph', text: 'The first instinct is to write a one-time script, point it at the database, and let it rip. We’ve all done it.' },
      { type: 'paragraph', text: 'The problem is volume. At millions of records, a one-shot script either runs for days — holding database locks and hammering downstream services — crashes halfway through and leaves no clean resume point, or both.' },
      { type: 'paragraph', text: 'You also can’t just fire-and-forget at full throttle. Our downstream AI service had a hard concurrency limit — throw more than ten simultaneous requests at it and it starts rejecting them. And each prescription needed order details fetched from another service’s database before it could be processed.' },
      { type: 'paragraph', text: 'So you have: large scale, a rate-limited downstream, multi-service data dependencies, and the very real possibility of mid-run interruptions. A one-shot script was never going to work here.' },

      { type: 'heading', text: 'The Two-Cron Design' },
      { type: 'paragraph', text: 'We split the work cleanly across two services that already owned their respective domains.' },
      { type: 'paragraph', text: 'The reingest cron lives in the prediction service. Every hour, it scans for prescriptions that were processed but are missing key enrichment data, re-runs them through the full VLM pipeline, and writes updated predictions back to the database. It runs for up to 50 minutes, then stops — leaving a 10-minute buffer before the next trigger fires.' },
      { type: 'paragraph', text: 'The auto-approval cron lives in the digitization service. It scans for predictions that meet a high-confidence threshold and automatically marks them as approved, removing them from the pharmacist queue without any human review needed.' },
      { type: 'paragraph', text: 'Together they form a conveyor belt: the reingest cron continuously feeds fresh, properly-enriched predictions into the system, and the auto-approval cron clears the easy wins silently in the background.' },

      { type: 'heading', text: 'The Interesting Problems' },

      { type: 'subheading', text: 'Keeping Domain Boundaries Honest' },
      { type: 'paragraph', text: 'The digitization service scans its own job table to find candidates for reingestion. But the prediction ID — the internal identifier the prediction service uses to track each record — is completely foreign to the digitization service. It doesn’t own that concept.' },
      { type: 'paragraph', text: 'An early version of the code had the digitization service generating prediction IDs and passing them in the candidate response. This was wrong. One service was reaching into another’s domain.' },
      { type: 'paragraph', text: 'The fix was strict: the digitization service returns only what it knows — the prescription reference, the document image data, the document type. The prediction service is then solely responsible for figuring out whether a prediction already exists for that prescription, or whether it needs to mint a new one.' },
      {
        type: 'code',
        lang: 'pseudocode',
        text: `// digitization service — returns only what it owns
candidate = {
  prescription_ref,
  document_image,
  document_type
}

// prediction service — owns the mapping
existing = find_prediction_by_prescription_ref(candidate.prescription_ref)
prediction_id = existing ? existing.id : create_prediction(candidate)`,
      },
      { type: 'paragraph', text: 'This sounds like a minor distinction but it matters enormously as systems grow. When you break this rule once, it compounds.' },

      { type: 'subheading', text: 'Pagination That Actually Scales' },
      { type: 'paragraph', text: 'Scanning millions of database rows naively — page 1, page 2, page 3 style offsets — gets progressively slower as you go deeper. By page 10,000, the database is reading and discarding a hundred thousand rows just to give you the next ten. At our volumes this was measured in seconds per page, not milliseconds.' },
      { type: 'paragraph', text: 'The fix is keyset pagination. Instead of saying “give me rows 10,000–10,010,” you say “give me the 10 rows whose ID is less than the last ID I saw.” The database jumps directly to that point in the index. It doesn’t matter if you’re on page 1 or page 100,000 — the query takes the same time.' },
      {
        type: 'code',
        lang: 'sql',
        text: 'fetch jobs WHERE id < last_seen_id ORDER BY id DESC LIMIT 10',
      },
      { type: 'paragraph', text: 'We also scan newest-first. Recently uploaded prescriptions are most likely to be in an active cart, so they benefit most from being reprocessed early.' },

      { type: 'subheading', text: 'Surviving Restarts Without Losing Progress' },
      { type: 'paragraph', text: 'The cron runs for 50 minutes and processes roughly 1,300 prescriptions per run. If the pod gets killed halfway through — which happens — you don’t want to restart from the beginning. That’s double-processing, wasted VLM calls, and a backlog that never actually shrinks.' },
      { type: 'paragraph', text: 'After every batch, we write the current position — the last ID we processed — to a document in the prediction service’s own database. On the next run, the cron reads that position and continues from exactly where it stopped. No re-scanning. No duplicates.' },
      {
        type: 'code',
        lang: 'pseudocode',
        text: `on startup:
  position = load_cursor_from_db()

after batch:
  save_cursor_to_db(current_position)`,
      },

      { type: 'subheading', text: 'Talking to Another Service’s Database Directly' },
      { type: 'paragraph', text: 'Order details for each prescription live in a separate order service — different team, different database, different tech stack. The original design called a REST API for each prescription. That’s fine at tens of records. At ten concurrent prescriptions per batch running for 50 minutes, it becomes a lot of HTTP overhead.' },
      { type: 'paragraph', text: 'We switched to a direct, read-only database connection to the order service. The query joins two tables, pulls back the relevant SKUs from a JSON column, and returns in under 10 milliseconds. Same result, a fraction of the overhead.' },
      { type: 'paragraph', text: 'The one gotcha: the database stores that JSON column in a binary format internally. Without explicitly telling the database driver how to decode it, you get raw bytes back instead of a usable object. One configuration line at connection time fixed it.' },

      { type: 'subheading', text: 'Keeping Concurrency Under Control' },
      { type: 'paragraph', text: 'Ten prescriptions in parallel sounds manageable. But each one involves four async operations: a database lookup, an order details fetch, a VLM model call, and a final write back to the database. That’s forty concurrent operations per batch.' },
      { type: 'paragraph', text: 'We used a semaphore — a simple counter that caps how many predictions can be in-flight simultaneously. Each prescription grabs a slot when it starts and releases it when it finishes. The rest wait. This guarantees we never exceed the downstream model’s limit, regardless of how fast the preceding steps complete.' },
      {
        type: 'code',
        lang: 'pseudocode',
        text: `semaphore = Semaphore(10)

for prescription in batch:
  semaphore.acquire()
  async:
    try:
      order = fetch_order_details(prescription)
      prediction = call_vlm(prescription, order)
      save(prediction)
    finally:
      semaphore.release()`,
      },

      { type: 'heading', text: 'Numbers From the First Production Run' },
      { type: 'paragraph', text: 'The first run hit the database on a cold start — no cached cursor, no warm-up, just 50 minutes of work.' },
      {
        type: 'stats',
        items: [
          { label: 'Runtime', value: '~50 min' },
          { label: 'Prescriptions processed', value: '1,340' },
          { label: 'Successful', value: '1,339' },
          { label: 'Failed', value: '1' },
        ],
      },
      { type: 'paragraph', text: 'At this rate, roughly 32,000 prescriptions per day get reprocessed. The multi-million record backlog clears in weeks. After that, the cron stays active but mostly idle each hour — it has nothing left to do but keep up with fresh volume.' },
      { type: 'paragraph', text: 'Combined with the auto-approval cron running beside it, the vast majority of prescriptions now flow end-to-end without a human ever touching them.' },
      { type: 'paragraph', text: 'That’s the goal. Two crons, running quietly every hour, doing what used to require manual intervention at scale.' },
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
