/**
 * Single source of truth for page content.
 * Every section reads from here so copy edits never touch markup.
 */

export const identity = {
  handle: "singu",
  legalName: "anany rai",
  age: 20,
  born: "2006-08-14",
  program: "b.s. economics",
  university: "iit kanpur",
  year: "3rd year",
  role: "technical lead, programming club",
} as const;

/** Quick facts. Not rendered right now, kept for reference. */
export const facts: ReadonlyArray<{ key: string; value: string }> = [
  { key: "name", value: "anany rai" },
  { key: "age", value: "20" },
  { key: "school", value: "iit kanpur" },
  { key: "major", value: "economics, 3rd year" },
  { key: "programming", value: "rust, python, zig" },
  { key: "role", value: "technical lead, programming club" },
];

export const focus = {
  headline: "and that's why i always say, 'shum-shum-schlippety-dop!'",
  body: "i love defi tradfi, currently into information markets/info finance.",
} as const;

/** side: "bid" = something built, "ask" = something won. */
export type ProofRow = {
  label: string;
  value: string;
  side: "bid" | "ask";
};

export const proof: ReadonlyArray<ProofRow> = [
  { label: "takneek 2026, agent zero", value: "1st place, inter-hall", side: "ask" },
  { label: "iit pokerbots 2026", value: "national rank #38", side: "ask" },
  { label: "namaste arbitrum", value: "3rd place, defi track", side: "ask" },
  { label: "monad blitz delhi v4", value: "honourable mention", side: "ask" },
  { label: "summer of bitcoin", value: "proposal round, 2025 & 2026", side: "ask" },
];

export type Build = {
  slug: string;
  name: string;
  /** One line. Quoted verbatim from the project's own README where one exists. */
  tagline: string;
  /** The technical dive. Written to be read by someone who knows the domain. */
  body: string;
  stack: ReadonlyArray<string>;
  /** What the build won. */
  award?: string;
  /** For work still in flight. */
  status?: string;
  /** Honest attribution when the work was not solo. */
  role?: string;
  links?: ReadonlyArray<{ label: string; href: string }>;
  featured?: boolean;
  /** No public repo. Renders without links instead of with a dead one. */
  closedSource?: boolean;
};

export const builds: ReadonlyArray<Build> = [
  {
    slug: "flurbo",
    name: "flurbo",
    tagline:
      "price how events connect. one shared pool for single questions and combos. " +
      "aka what i did all semester instead of studying.",
    body:
      "most prediction markets make you bet one question at a time, and if you want a combo " +
      "(a and b, a but not b, whatever) someone has to quote it to you by rfq. flurbo throws related " +
      "questions into one pool and prices every way they can land together off one lmsr cost function, " +
      "so you can buy any yes/no pattern over up to three questions and the prices always add up to 1. " +
      "you also see the joint and conditional prices for every pair, so you can literally see how much " +
      "the market thinks two things move together. the factored engine handles up to 32 events in a pool, " +
      "solidity enforces execution with conservative fixed-point, rust does the reference math. base " +
      "outcomes wrap into erc-20s that trade on a kuru order book. results get proposed on reality.eth " +
      "with a bond, go to kleros if someone challenges, then get relayed to monad. there's also an sdk so " +
      "you can write agents in ts, python, rust or c++ that research, forecast and trade on their own " +
      "(paper mode first, chill).",
    stack: ["rust", "solidity", "foundry", "lmsr", "kuru clob", "reality.eth", "kleros", "envio"],
    status: "live on monad testnet, early access is open",
    links: [
      { label: "live", href: "https://flurbo.tech" },
      { label: "source", href: "https://github.com/Singularityy0/Flurbo" },
    ],
    featured: true,
  },
  {
    slug: "schmeckles",
    name: "schmeckles",
    tagline: "5 min mon/usd capped-call options on monad testnet. you can't get liquidated, like at all.",
    body:
      "payout goes linear between strike and cap and maxes out at 10 musdc a ticket, so worst case you " +
      "lose the premium and that's it. pricing is fixed-point black-scholes (call spread, zero rate) with a " +
      "jump guard so upside shocks actually get priced instead of ignored. the contract locks the max " +
      "liability before it even takes your money, so it literally can't sell something it can't pay out. " +
      "a rust keeper posts verified supra pull v2 proofs inside a 15 sec expiry window so it can't fake the " +
      "settlement price, and if settlement is 10 min late anyone can hit cancel and buyers get their money back.",
    stack: ["solidity", "foundry", "rust", "alloy", "next.js", "viem", "supra pull v2"],
    award: "honourable mention, monad blitz delhi v4",
    links: [
      { label: "live", href: "https://schmeckles.singu.online/" },
      { label: "source", href: "https://github.com/Singularityy0/schleem" },
    ],
  },
  {
    slug: "agent-zero",
    name: "agent zero",
    tagline: "an agentic coding ide that only runs small open models. nothing over 80b, no big frontier stuff.",
    body:
      "hard rule: every model anywhere in the pipeline is 80b params or less, on free tier, pay as you go " +
      "or local. a planner breaks the task into max 4 tiny steps and each agent only sees the context its " +
      "own step needs. retrieval actually reads the code (typescript compiler api + tree-sitter for python, " +
      "go, rust, c and c++) and ranks stuff with pagerank over the call graph. the router picks a model for " +
      "every request based on how hard it is, context fit, cost, spend so far and rate limits, and it always " +
      "tells you which model did what. compaction is deterministic instead of asking a model to summarize " +
      "itself, and there's 12 safeguards (incl a merkle state tree) that catch loops before they burn all " +
      "your tokens.",
    stack: ["rust", "typescript", "electron", "react", "tree-sitter", "pagerank"],
    award: "1st place, takneek 2026 inter-hall",
    role: "team lead",
    links: [{ label: "source", href: "https://github.com/Singularityy0/AgentZero" }],
  },
  {
    slug: "pclmm",
    name: "pclmm",
    tagline: "a concentrated liquidity amm on solana, made to teach a two week camp.",
    body:
      "instead of spreading liquidity thin over the whole curve you park it in price ranges, that's where " +
      "the 4000x comes from. prices are q64.96 fixed-point and the invariant solves with newton-raphson, so " +
      "18 decimals stay exact, no drift, no overflowing 256 bits. positions sit on a 256-bit tickbitmap so " +
      "crossing ticks stays cheap even when the book is super sparse. rust on anchor, taught from scratch " +
      "over two weeks.",
    stack: ["rust", "anchor", "solana", "q64.96", "newton-raphson", "tickbitmap"],
    role: "mentor, two week pclub camp",
    closedSource: true,
  },
  {
    slug: "tare",
    name: "tare",
    tagline: "defi evidence, explained.",
    body:
      "figures out what a vault position actually is by digging through nested morpho v1/v2 and erc-4626 " +
      "layers. every number tells you where it came from: read over rpc, calculated, priced off chainlink, " +
      "or checked against the graph, plus the source, block number and when it was grabbed. if rpc and the " +
      "indexer disagree it shows you instead of quietly picking one. agents can pull the same stuff over " +
      "http and mcp.",
    stack: ["typescript", "react", "vite", "node", "the graph", "chainlink", "zod", "mcp"],
    status: "built for ethglobal online 2026. didn't win lol, still think it's cool tho",
    links: [
      { label: "live", href: "https://tare.visk404.dev/" },
      { label: "source", href: "https://github.com/rocketpowerkille/Tare" },
    ],
  },
  {
    slug: "zero-day-futures",
    name: "zero-day futures",
    tagline: "0dte futures. matching off-chain, risk boundary on-chain.",
    body:
      "an axum matcher keeps the order book off-chain and takes eip-712 signed orders, so your intent is " +
      "verifiable without having to trust the matcher. risk checks run right next to it on simulated oracle " +
      "feeds, and settlement goes into arbitrum stylus contracts so the hot path is rust the whole way down.",
    stack: ["rust", "axum", "eip-712", "arbitrum stylus"],
    award: "3rd place, namaste arbitrum defi track",
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
    when: "3 to 6 nov 2026",
    title: "co-organized the prediction markets community hub",
    where: "devcon 8, mumbai",
    body:
      "a community hub on market design, liquidity, resolution, futarchy and governance, with sessions " +
      "that went into the cryptographic privacy stuff those markets need to work at scale.",
    links: [
      { label: "forum thread", href: "https://forum.devcon.org/t/prediction-markets-community-hub/8824" },
    ],
  },
  {
    when: "may 2026 to now",
    title: "technical lead, programming club",
    where: "iit kanpur",
    body:
      "running a team of 15 junior developers through algorithmic and systems projects. won a $300 " +
      "ecosystem grant to direct the pclub x ethereum foundation \"road to devcon\" workshop, then wrote " +
      "and taught the curriculum: zk circuits, erc-4337 stealth mechanics and memory-safe execution, to " +
      "a cohort of 80+ systems engineers. shipped the event site too, carrying the problem statement and " +
      "the competition's own erc-20 token.",
    links: [{ label: "build a plumbus", href: "https://buildaplumbus.pclub.in/" }],
  },
  {
    when: "2025 and 2026",
    title: "summer of bitcoin, proposal round",
    body:
      "cleared the technical evaluations and reached the final proposal round in 2025, then was seeded " +
      "straight into the 2026 proposal round on the strength of the previous year.",
  },
  {
    when: "jun 2025 to may 2026",
    title: "secretary, programming club",
    where: "iit kanpur",
    body:
      "built the web3 spring camp from nothing: bip protocols, decentralized identity and defi primitives, " +
      "aimed at students who wanted to implement protocols rather than read about them. also ran the " +
      "intro to rust sessions and wrote the roadmaps that took juniors from ownership rules to shipping " +
      "solana programs.",
  },
  {
    when: "jun 2025 to may 2026",
    title: "secretary, science and maths society",
    where: "iit kanpur",
    body:
      "set the mathematical and algorithmic problem sets for campus competitions, scaling difficulty " +
      "deliberately to surface the strongest analytical talent across batches. lead mentor on the " +
      "flagship winter camp, where i designed the number theory curriculum.",
  },
];

export type Channel = {
  channel: string;
  handle: string;
  /** Absent means there is nothing to click, only a handle to copy. */
  href?: string;
};

export const contact: ReadonlyArray<Channel> = [
  { channel: "github", handle: "singularityy0", href: "https://github.com/Singularityy0" },
  { channel: "x", handle: "@singuularityyy", href: "https://x.com/singuularityyy" },
  { channel: "instagram", handle: "@me_singularity", href: "https://www.instagram.com/me_singularity/" },
  { channel: "discord", handle: "singu07" },
  { channel: "email", handle: "singucodes@gmail.com", href: "mailto:singucodes@gmail.com" },
  { channel: "email, academic", handle: "ananyk24@iitk.ac.in", href: "mailto:ananyk24@iitk.ac.in" },
];

/** One line above the prose. */
export const humanIntro = "20, third year econ at iit kanpur. here's the non-defi stuff.";

export type HumanBlock = { key: string; body: string };

export const humanBlocks: ReadonlyArray<HumanBlock> = [
  {
    key: "before all this",
    body:
      "i wanted to be a dinosaur. not study them, not dig them up, BE one. turns out that plan has some " +
      "logistical problems, but the vibe never really left. i'd rather be inside the thing than read about " +
      "it from outside, which is probs why i write protocols instead of threads about protocols.",
  },
  {
    key: "why my projects have stupid names",
    body:
      "schmeckles and flurbos are both rick and morty currencies. a plumbus is that household thing nobody " +
      "can explain. all three are real software now: a fully collateralized options market, a combinatorial " +
      "market maker, and the site that ran an ethereum foundation workshop and its competition token. if i'm " +
      "gonna spend weeks on settlement math that has to be right to the last decimal, it's getting a dumb " +
      "name. keeps me from taking myself too seriously.",
  },
  {
    key: "stories i keep going back to",
    body:
      "tolkien's whole legendarium, the hobbit above everything else in it. the alien series, any order, any " +
      "cut, idc. invincible, because it actually lets consequences land. undertale is the one game i'll argue " +
      "about for hours, cause underneath it's really asking whether a system remembers what you did to it.",
  },
  {
    key: "sound",
    body:
      "i used to produce edm. lining up a track teaches you a kind of patience that reading docs just doesn't. " +
      "these days i mostly listen tho: the strokes, her's, peter cat recording co.",
  },
  {
    key: "pingu and tingu",
    body:
      "a penguin and a tiger, both plushies. singu, pingu, tingu. yes i know what i did there and yes i stand " +
      "by it. they're also non-negotiable, i don't sleep properly unless both of them are where they're " +
      "supposed to be, and i stopped pretending otherwise a long time ago.",
  },
];

/** Closing line. */
export const humanCoda = "also lawn tennis, when i'm not staring at a terminal.";

/** Small, at the end, deliberately not a hero image. */
export const humanPhoto = {
  src: "/singu.webp",
  width: 560,
  height: 926,
  alt:
    "a collage of me looking down at a desk, surrounded by a velociraptor, flowey from undertale, " +
    "a xenomorph, a fighter jet and an enormous cat.",
  caption: "me, and most of the things on this page, in one photograph.",
} as const;
