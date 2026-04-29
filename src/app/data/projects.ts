export type Project = {
  id: string;
  year: string;
  name: { en: string; pt: string };
  desc: { en: string; pt: string };
  stack: string[];
  github: string | null;
  demo: string | null;
  featured?: boolean;
  isNew?: boolean;
};

export const featuredProjects: Project[] = [
  {
    id: "01",
    year: "2026",
    name: {
      en: "Async Order Import",
      pt: "Importação Assíncrona de Pedidos",
    },
    desc: {
      en: "Order import system from CSV files with async background processing. Worker decoupled from the API via Redis/BullMQ queues to handle thousands of rows without blocking requests. Batch-oriented modeling with per-row traceability and dedicated audit endpoints.",
      pt: "Sistema de importação de pedidos via CSV com processamento assíncrono. Worker desacoplado da API via filas Redis/BullMQ para suportar milhares de linhas sem bloquear requisições. Modelagem por lote com rastreabilidade por linha e endpoints de auditoria.",
    },
    stack: ["NestJS", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    github: null,
    demo: null,
  },
  {
    id: "02",
    year: "2024",
    name: {
      en: "Chess AI",
      pt: "Motor de Xadrez IA",
    },
    desc: {
      en: "CS final thesis: a chess engine built from scratch using Minimax with Alpha-Beta Pruning, integrated with the Lichess Bot API for real-time online matches.",
      pt: "TCC: motor de xadrez construído do zero com Minimax e Poda Alfa-Beta, integrado à API Lichess Bot para partidas online em tempo real.",
    },
    stack: ["Python", "Minimax", "Alpha-Beta", "Lichess API"],
    github: "https://github.com/MatheusFinatto/ChessAI-Final_Thesis",
    demo: "https://chess-matheusfinatto.netlify.app/",
  },
  {
    id: "03",
    year: "2023",
    name: {
      en: "PokeNext",
      pt: "PokeNext",
    },
    desc: {
      en: "Modern Pokédex built with Next.js and PokéAPI. Fully responsive, leverages static rendering and SSR for fast page loads. Shows command of the Next.js data-fetching model.",
      pt: "Pokédex moderna com Next.js e PokéAPI. Responsiva, com SSG e SSR para páginas rápidas. Demonstra domínio do modelo de data-fetching do Next.js.",
    },
    stack: ["Next.js", "React", "TailwindCSS", "PokéAPI"],
    github: "https://github.com/MatheusFinatto/PokeNext",
    demo: "https://poke-next-snowy-xi.vercel.app",
  },
  {
    id: "04",
    year: "2022",
    name: {
      en: "Pizzaria (Docker)",
      pt: "Pizzaria (Docker)",
    },
    desc: {
      en: "Full-stack pizzeria platform with containerized frontend and backend. Built with vanilla JS, Node.js, and MySQL — a clear end-to-end ownership demonstration.",
      pt: "Plataforma de pizzaria full-stack containerizada. JS vanilla, Node.js e MySQL — demonstração clara de ownership end-to-end.",
    },
    stack: ["Node.js", "JavaScript", "MySQL", "Docker"],
    github: "https://github.com/MatheusFinatto/Pizzaria-website-with-docker",
    demo: "https://pizzaria-design-showcase.netlify.app/",
  },
];
