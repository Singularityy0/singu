/**
 * Single source of truth for page content.
 * Every section reads from here so copy edits never touch markup.
 */

export const shell = {
  user: "singu",
  host: "wagmi",
  cwd: "~",
} as const;

export const identity = {
  handle: "singu",
  legalName: "Anany Rai",
  age: 20,
  born: "2006-08-14",
  program: "B.S. Economics",
  school: "IIT Kanpur",
  year: "3rd year",
  role: "Technical Lead, Programming Club",
} as const;

/** The whoami readout. Keys stay lowercase and short so the column stays tight. */
export const facts: ReadonlyArray<{ key: string; value: string }> = [
  { key: "name", value: "Anany Rai" },
  { key: "age", value: "20" },
  { key: "school", value: "IIT Kanpur" },
  { key: "reading", value: "Economics, 3rd year" },
  { key: "writing", value: "Rust, C/C++, Zig" },
  { key: "role", value: "Technical Lead, Programming Club" },
];

export const focus = {
  headline: "DeFi fanatic who writes Rust.",
  body:
    "I live in market microstructure, concentrated liquidity, and zero-copy deserialization. " +
    "Most of what I build is arithmetic that has to be exactly right at the tick level: " +
    "Q64.96 fixed-point, Newton-Raphson convergence, order books that settle in microseconds. " +
    "I care about the math under the price, not the narrative on top of it.",
} as const;

/** side: "bid" = something built, "ask" = something won. Drives the accent color. */
export type ProofRow = {
  label: string;
  value: string;
  side: "bid" | "ask";
};

export const proof: ReadonlyArray<ProofRow> = [
  { label: "Takneek 2026, Agent Zero", value: "1st place, inter-hall", side: "ask" },
  { label: "IIT Pokerbots 2026", value: "National rank #38", side: "ask" },
  { label: "Namaste Arbitrum", value: "3rd place, DeFi track", side: "ask" },
  { label: "Monad Blitz Delhi v4", value: "Honourable mention", side: "ask" },
  { label: "Summer of Bitcoin", value: "Proposal round, 2025 & 2026", side: "ask" },
];

export const nav: ReadonlyArray<{ label: string; href: string }> = [
  { label: "builds", href: "/builds" },
  { label: "proof", href: "/proof" },
  { label: "human", href: "/human" },
  { label: "contact", href: "/contact" },
];

export type Build = {
  slug: string;
  name: string;
  /** One line. Quoted verbatim from the project's own README where one exists. */
  tagline: string;
  /** The technical dive. Written to be read by someone who knows the domain. */
  body: string;
  stack: ReadonlyArray<string>;
  /** Amber. What the build won. */
  award?: string;
  /** Teal. For work still in flight. */
  status?: string;
  /** Dim. Honest attribution when the work was not solo. */
  role?: string;
  links?: ReadonlyArray<{ label: string; href: string }>;
  /** Renders the wide cell at the top of the grid. */
  featured?: boolean;
  /** No public repo. Renders without links instead of with a dead one. */
  closedSource?: boolean;
};

export const builds: ReadonlyArray<Build> = [
  {
    slug: "schmeckles",
    name: "schmeckles",
    tagline: "A fully collateralized, five-minute MON/USD capped-call market on Monad Testnet.",
    body:
      "Payout is linear between strike and cap and hard-bounded at 10 mUSDC a ticket, so a buyer's " +
      "worst case is the premium and there is no liquidation path at all. Pricing is a fixed-point " +
      "Black-Scholes call spread at zero rate, with a jump guard that prices upside shocks explicitly " +
      "instead of assuming them away. The contract reserves maximum liability before it will accept " +
      "payment, which makes an undercollateralized sale unrepresentable. A Rust keeper submits verified " +
      "Supra Pull V2 proofs inside a 15 second expiry window, so it cannot forge a settlement price, and " +
      "if settlement misses by 10 minutes any account can trigger cancellation and release buyer funds.",
    stack: ["solidity", "foundry", "rust", "alloy", "next.js", "viem", "supra pull v2"],
    award: "Honourable mention, Monad Blitz Delhi v4",
    links: [
      { label: "live", href: "https://schmeckles.vercel.app/" },
      { label: "source", href: "https://github.com/Singularityy0/schleem" },
    ],
    featured: true,
  },
  {
    slug: "flurbo",
    name: "flurbo",
    tagline:
      "An on-chain combinatorial market maker for prediction markets. One shared liquidity pool that " +
      "prices arbitrary multi-leg and conditional claims coherently instead of quoting them by RFQ.",
    body:
      "Pricing is an LMSR cost function, factored so arbitrary Boolean combinations across events stay " +
      "coherent rather than being quoted one leg at a time. The factored state carries up to 32 binary " +
      "events at treewidth 2 or lower, and on-chain quoting is conservative fixed-point with explicit " +
      "error bounds, so a quote is never optimistic about its own precision. A single collateral pool " +
      "backs base and composed claims at the same time, and base events wrap to ERC-20 so they can " +
      "anchor against a Kuru CLOB. Rust computes the reference pricing and Solidity enforces execution, " +
      "which keeps the maths auditable separately from the accounting.",
    stack: ["rust", "solidity", "foundry", "lmsr", "fixed-point", "kuru clob"],
    status: "Building now, for Monad Metropolis 2026",
    links: [{ label: "source", href: "https://github.com/Singularityy0/Flurbo" }],
  },
  {
    slug: "agent-zero",
    name: "agent zero",
    tagline: "An agentic coding IDE built for small open-weight models.",
    body:
      "Built to a hard constraint: every model anywhere in the pipeline is 80B parameters or fewer, on " +
      "free-tier, pay-as-you-go or local hardware. A planner splits an objective into at most four " +
      "narrowly scoped steps and each agent sees only the context its own step needs. Retrieval reads " +
      "real code through the TypeScript compiler API and tree-sitter across Python, Go, Rust, C and C++, " +
      "then ranks candidates with PageRank over the call graph. The router places every request on task " +
      "complexity, context fit, cost, spend so far and rate-limit cooldown, and never hides which model " +
      "took which piece of work. Compaction folds context deterministically rather than asking a model to " +
      "summarize itself, and twelve safeguards, including a Merkle state tree, catch loops before they " +
      "burn tokens.",
    stack: ["rust", "typescript", "electron", "react", "tree-sitter", "pagerank"],
    award: "1st place, Takneek 2026 inter-hall",
    role: "Team lead",
    links: [{ label: "source", href: "https://github.com/Singularityy0/AgentZero" }],
  },
  {
    slug: "pclmm",
    name: "pclmm",
    tagline: "A concentrated liquidity market maker on Solana, built as the teaching vehicle for a two-week camp.",
    body:
      "Liquidity concentrates into geometric price ranges instead of spreading thin across the whole " +
      "curve, which is where the 4000x comes from. Prices are Q64.96 fixed-point and the invariant " +
      "solves by Newton-Raphson, holding 18 decimals exactly without drifting or overflowing 256 bits. " +
      "Positions index through a 256-bit TickBitmap so crossing ticks stays cheap no matter how sparse " +
      "the book is. Rust on Anchor, taught from first principles over two weeks.",
    stack: ["rust", "anchor", "solana", "Q64.96", "newton-raphson", "tickbitmap"],
    role: "Mentor, two-week Programming Club camp",
    closedSource: true,
  },
  {
    slug: "tare",
    name: "tare",
    tagline: "DeFi evidence, explained.",
    body:
      "Works out what a vault position actually represents by walking nested Morpho V1/V2 and ERC-4626 " +
      "layers with bounded integer attribution. Every number is labelled by how it was obtained: observed " +
      "over RPC, derived by calculation, priced from Chainlink, or checked against The Graph, and each one " +
      "carries its source identity, block number and capture time. Comparing RPC against indexed data " +
      "surfaces disagreements rather than quietly picking a winner. The same evidence is exposed to agents " +
      "over HTTP and MCP.",
    stack: ["typescript", "react", "vite", "node", "the graph", "chainlink", "zod", "mcp"],
    award: "ETHGlobal Online 2026",
    links: [
      { label: "live", href: "https://tare.visk404.dev/" },
      { label: "source", href: "https://github.com/rocketpowerkille/Tare" },
    ],
  },
  {
    slug: "zero-day-futures",
    name: "zero-day futures",
    tagline: "Zero-day futures with an off-chain matcher and an on-chain risk boundary.",
    body:
      "An Axum matcher keeps the order book off-chain and accepts EIP-712 signed orders, so a trader's " +
      "intent stays verifiable without anyone having to trust the matcher. Risk checks run alongside it " +
      "against simulated oracle feeds, and settlement scaffolds into Arbitrum Stylus contracts so the " +
      "hot path stays in Rust end to end.",
    stack: ["rust", "axum", "eip-712", "arbitrum stylus"],
    award: "3rd place, Namaste Arbitrum DeFi track",
    closedSource: true,
  },
  {
    slug: "bolt",
    name: "book oriented limit trader",
    tagline: "Statistical arbitrage on cointegrated pairs, backtested against a simulated order book.",
    body:
      "Pairs are selected by Engle-Granger cointegration with Augmented Dickey-Fuller tests for " +
      "stationarity, then traded on a Z-score framework under enforced liquidity constraints. A second " +
      "model classifies microstructural regimes out of Shannon entropy, realized volatility and the Hurst " +
      "exponent, tuned by particle swarm optimization, so the strategy switches behaviour instead of " +
      "assuming one regime forever. All of it runs on an event-driven limit-order-book backtester that " +
      "simulates order-depth variation and trade log execution.",
    stack: ["python", "numpy", "pandas", "cointegration", "hurst exponent", "pso"],
    closedSource: true,
  },
];

export type TimelineEntry = {
  /** Mono, tabular, sits in the left rail. */
  when: string;
  title: string;
  where?: string;
  body: string;
  /** Teal marker plus a label, for work that has not happened yet. */
  upcoming?: boolean;
  links?: ReadonlyArray<{ label: string; href: string }>;
};

/** Reverse chronological. Club roles and ecosystem work share one rail because they caused each other. */
export const timeline: ReadonlyArray<TimelineEntry> = [
  {
    when: "3 to 6 Nov 2026",
    title: "Co-organizing the Prediction Markets Community Hub",
    where: "Devcon 8, Mumbai",
    body:
      "A community hub on market design, liquidity, resolution, futarchy and governance, with sessions " +
      "extending into the cryptographic privacy mechanisms those markets need to work at scale.",
    upcoming: true,
    links: [
      { label: "forum thread", href: "https://forum.devcon.org/t/prediction-markets-community-hub/8824" },
    ],
  },
  {
    when: "May 2026 to now",
    title: "Technical Lead, Programming Club",
    where: "IIT Kanpur",
    body:
      "Running a team of 15 junior developers through algorithmic and systems projects. Won a $300 " +
      "ecosystem grant to direct the Pclub x Ethereum Foundation \"Road to Devcon\" workshop, then wrote " +
      "and taught the curriculum: ZK circuits, ERC-4337 stealth mechanics and memory-safe execution, to " +
      "a cohort of 80+ systems engineers. Shipped the event site too, carrying the problem statement and " +
      "the competition's own ERC-20 token.",
    links: [{ label: "build a plumbus", href: "https://buildaplumbus.pclub.in/" }],
  },
  {
    when: "2025 and 2026",
    title: "Summer of Bitcoin, proposal round",
    body:
      "Cleared the technical evaluations and reached the final proposal round in 2025, then was seeded " +
      "straight into the 2026 proposal round on the strength of the previous year.",
  },
  {
    when: "Jun 2025 to May 2026",
    title: "Secretary, Programming Club",
    where: "IIT Kanpur",
    body:
      "Built the Web3 Spring Camp from nothing: BIP protocols, decentralized identity and DeFi primitives, " +
      "aimed at students who wanted to implement protocols rather than read about them. Also ran the " +
      "Intro to Rust sessions and wrote the roadmaps that took juniors from ownership rules to shipping " +
      "Solana programs.",
  },
  {
    when: "Jun 2025 to May 2026",
    title: "Secretary, Science and Maths Society",
    where: "IIT Kanpur",
    body:
      "Set the mathematical and algorithmic problem sets for campus competitions, scaling difficulty " +
      "deliberately to surface the strongest analytical talent across batches. Lead mentor on the " +
      "flagship Winter Camp, where I designed the Number Theory curriculum.",
  },
];

export type Channel = {
  channel: string;
  handle: string;
  /** Absent means there is nothing to click, only a handle to copy. */
  href?: string;
};

export const contact: ReadonlyArray<Channel> = [
  { channel: "github", handle: "Singularityy0", href: "https://github.com/Singularityy0" },
  { channel: "x", handle: "@singuularityyy", href: "https://x.com/singuularityyy" },
  { channel: "instagram", handle: "@me_singularity", href: "https://www.instagram.com/me_singularity/" },
  { channel: "discord", handle: "singu07" },
  { channel: "email", handle: "singucodes@gmail.com", href: "mailto:singucodes@gmail.com" },
  { channel: "email, academic", handle: "ananyk24@iitk.ac.in", href: "mailto:ananyk24@iitk.ac.in" },
];

/** One quiet factual line above the prose. The brief wants age and university here. */
export const humanIntro = "20 years old. Third year of Economics at IIT Kanpur.";

export type HumanBlock = { key: string; body: string };

/** Short prose, not a config file. Each block gets room to say something. */
export const humanBlocks: ReadonlyArray<HumanBlock> = [
  {
    key: "before all this",
    body:
      "I wanted to be a dinosaur. Not to study them, not to dig them up. To be one. I have since " +
      "accepted the logistical problems with that plan, but the instinct never really left: I would " +
      "rather be inside the thing than read about it from outside. It is the same reason I write " +
      "protocols instead of commentary on them.",
  },
  {
    key: "why my projects have stupid names",
    body:
      "Schmeckles and flurbos are both currencies in Rick and Morty. A plumbus is the household object " +
      "nobody can explain. All three are real software now: a fully collateralized options market, a " +
      "combinatorial market maker, and the site that carried an Ethereum Foundation workshop and its " +
      "competition token. If I am going to spend weeks " +
      "on settlement maths that has to be exactly right to the last decimal, the thing is getting a " +
      "ridiculous name. It keeps me honest about how seriously to take myself.",
  },
  {
    key: "stories I keep going back to",
    body:
      "Tolkien's legendarium, the Hobbit above everything else in it. The Alien series, which I will " +
      "watch in any order, in any cut. Invincible, for how willing it is to let consequences actually " +
      "land. Undertale is the one game I will argue about at length, because underneath it is a " +
      "question about whether a system remembers what you did to it.",
  },
  {
    key: "sound",
    body:
      "I used to produce EDM, and I still think time spent lining up a track teaches you something " +
      "about patience that reading documentation does not. These days I mostly listen: The Strokes, " +
      "Her's, and Peter Cat Recording Co.",
  },
  {
    key: "pingu and tingu",
    body:
      "A penguin and a tiger, in plush form. Singu, Pingu, Tingu. I am fully aware of what I did there " +
      "and I stand by it. They are also not negotiable: I do not sleep properly unless both of them are " +
      "where they are supposed to be, and I gave up pretending otherwise a long time ago.",
  },
];

/** Closing line. Quiet, dim, no heading. */
export const humanCoda = "Lawn tennis, when I am not at a terminal.";

/** Small, at the end, deliberately not a hero image. */
export const humanPhoto = {
  src: "/singu.webp",
  width: 560,
  height: 926,
  alt:
    "A collage of me looking down at a desk, surrounded by a velociraptor, Flowey from Undertale, " +
    "a Xenomorph, a fighter jet and an enormous cat.",
  caption: "Me, and most of the things on this page, in one photograph.",
} as const;
