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
      en: "Order import system from CSV files with background processing — thousands of rows handled without slowing down the app. Each import is tracked row by row with a full audit trail accessible via API.",
      pt: "Sistema de importação de pedidos via CSV com processamento em segundo plano — milhares de linhas sem travar o app. Cada importação é rastreável linha a linha, com histórico completo de auditoria acessível via API.",
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
      en: "CS graduation thesis: a chess engine built from scratch using classic AI algorithms (Minimax + Alpha-Beta Pruning), connected to the Lichess platform for real online matches.",
      pt: "TCC de Ciência da Computação: motor de xadrez construído do zero com algoritmos clássicos de IA (Minimax + Poda Alfa-Beta), conectado à plataforma Lichess para partidas online reais.",
    },
    stack: ["Python", "Minimax", "Alpha-Beta", "Lichess API"],
    github: "https://github.com/MatheusFinatto/ChessAI-Final_Thesis",
    demo: "https://chess-matheusfinatto.netlify.app/",
  },
  {
    id: "03",
    year: "2026",
    name: {
      en: "Finatto Incorporadora",
      pt: "Finatto Incorporadora",
    },
    desc: {
      en: "Live website for a real estate company (finattoincorporadora.com.br). The client manages listings, photos, and team members through a built-in admin panel — no developer needed for content updates. Includes dark mode, WhatsApp button, SEO optimization, and property filtering.",
      pt: "Site no ar de uma incorporadora imobiliária (finattoincorporadora.com.br). O cliente atualiza imóveis, fotos e equipe por um painel de administração embutido, sem precisar de um programador. Dark mode, botão de WhatsApp, otimização para buscadores e filtros de imóveis.",
    },
    stack: ["Next.js", "Sanity CMS", "TypeScript", "Styled Components"],
    github: "https://github.com/MatheusFinatto/site-finatto",
    demo: "https://finattoincorporadora.com.br/",
  },
  {
    id: "04",
    year: "2022",
    name: {
      en: "Pizzaria (Docker)",
      pt: "Pizzaria (Docker)",
    },
    desc: {
      en: "Full-stack pizzeria platform — frontend, backend, and database all packaged with Docker. Built with vanilla JS, Node.js, and MySQL.",
      pt: "Plataforma de pizzaria com frontend, backend e banco de dados, tudo empacotado com Docker. JS puro, Node.js e MySQL.",
    },
    stack: ["Node.js", "JavaScript", "MySQL", "Docker"],
    github: "https://github.com/MatheusFinatto/Pizzaria-website-with-docker",
    demo: "https://pizzaria-design-showcase.netlify.app/",
  },
];
