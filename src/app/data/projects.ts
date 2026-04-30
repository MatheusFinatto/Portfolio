export type Decision = { title: string; body: string };

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
  techDecisions?: { en: Decision[]; pt: Decision[] };
};

export const featuredProjects: Project[] = [
  {
    id: "01",
    year: "2026",
    name: {
      en: "Async Webhook Ingestion Platform",
      pt: "Plataforma de Ingestão Assíncrona de Webhooks",
    },
    desc: {
      en: "B2B platform that receives order webhooks from marketplace partners and processes them asynchronously with idempotency and resiliency guarantees. HMAC signature validation, at-least-once delivery, exponential backoff retries, and a dead-letter queue for permanent failures.",
      pt: "Plataforma B2B que recebe webhooks de pedidos de parceiros marketplace e os processa de forma assíncrona com garantias de idempotência e resiliência. Validação HMAC, entrega at-least-once, retries com backoff exponencial e dead-letter queue para falhas permanentes.",
    },
    stack: ["NestJS", "PostgreSQL", "RabbitMQ", "Docker"],
    github: null,
    demo: null,
    techDecisions: {
      en: [
        {
          title: "HMAC validation and idempotency",
          body: "Requests without a valid HMAC-SHA256 signature are rejected upfront. Event IDs are persisted so duplicate deliveries get detected and discarded. At-least-once delivery without double-processing.",
        },
        {
          title: "Why RabbitMQ over inline processing?",
          body: "Marketplace partners need a fast acknowledgment. Process inline and any internal slowdown (database write, downstream call) becomes their problem. RabbitMQ breaks that coupling: the receiver responds in under 100ms and actual processing happens in a separate consumer.",
        },
        {
          title: "Exponential backoff and dead-letter queue",
          body: "<ul><li>Transient failures retry with exponential backoff</li><li>Messages that exhaust retries go to a DLQ instead of being dropped</li><li>Dedicated endpoint to inspect DLQ contents without touching the database</li></ul>",
        },
        {
          title: "ADRs as first-class docs",
          body: "Every non-obvious decision has an ADR committed alongside the code: what was considered, what was picked, and why. Future maintainers don't have to guess.",
        },
      ],
      pt: [
        {
          title: "Validação HMAC e idempotência",
          body: "Requisições sem assinatura HMAC-SHA256 válida são rejeitadas antes de qualquer coisa. IDs de evento ficam persistidos para detectar e descartar entregas duplicadas. Entrega at-least-once sem reprocessamento.",
        },
        {
          title: "Por que RabbitMQ em vez de processamento inline?",
          body: "Parceiro marketplace quer um 200 rápido. Se você processa o pedido inline, qualquer lentidão interna (write no banco, chamada downstream) é problema deles. O RabbitMQ quebra esse acoplamento: o receiver responde em menos de 100ms e o processamento real acontece num consumer separado.",
        },
        {
          title: "Backoff exponencial e dead-letter queue",
          body: "<ul><li>Falhas transitórias são retentadas com backoff exponencial</li><li>Mensagens que esgotam as tentativas vão pra uma DLQ em vez de serem descartadas</li><li>Endpoint dedicado pra inspecionar a DLQ sem precisar acessar o banco</li></ul>",
        },
        {
          title: "ADRs como documentação de primeira classe",
          body: "Cada decisão não óbvia tem um ADR commitado junto ao código: o que foi considerado, o que foi escolhido e por quê. Futuros mantenedores não precisam adivinhar.",
        },
      ],
    },
  },
  {
    id: "02",
    year: "2024",
    name: {
      en: "Chess AI",
      pt: "Motor de Xadrez IA",
    },
    desc: {
      en: "CS graduation thesis: a chess engine built from scratch using classic AI algorithms (Minimax + Alpha-Beta Pruning). Two fronts: a bot that plays real online games on Lichess, and a React interface for anyone to play against the machine in the browser.",
      pt: "TCC de Ciência da Computação: motor de xadrez construído do zero com algoritmos clássicos de IA (Minimax + Poda Alfa-Beta). Duas frentes: um bot que joga partidas reais no Lichess, e uma interface React para qualquer pessoa jogar contra a máquina no browser.",
    },
    stack: ["Python", "Minimax", "Alpha-Beta", "Lichess API"],
    github: "https://github.com/MatheusFinatto/ChessAI-Final_Thesis",
    demo: "https://chess-matheusfinatto.netlify.app/",
    techDecisions: {
      en: [
        {
          title: "Why a chess engine for a thesis?",
          body: "Didn't want to build another CRUD. Chess engines sit at the intersection of algorithms, performance, and game theory. Minimax on paper is one thing; watching it play after you implement it is another.",
        },
        {
          title: "The Alpha-Beta pruning problem",
          body: "Without pruning, Minimax is exponential and unplayable at any real depth. Alpha-Beta skips branches that can't beat the current best. Getting the balance right was the hardest part: prune too aggressively and you start missing strong moves.",
        },
        {
          title: "Two modes, two purposes",
          body: "Two ways to validate the same engine:<ul><li>Lichess bot: real games, time limits, varied opponents, no control over input</li><li>React interface: anyone can play in the browser, no account needed</li></ul>",
        },
        {
          title: "Real opponents, real pressure",
          body: "A scripted opponent never reveals edge cases. The Lichess API did: timeouts, flagging on time, moves arriving out of order. No unit test would catch that.",
        },
      ],
      pt: [
        {
          title: "Por que um motor de xadrez no TCC?",
          body: "Não queria fazer mais um CRUD. Motores de xadrez ficam na interseção de algoritmos, performance e teoria dos jogos. Minimax no papel é uma coisa; ver ele jogar depois de implementar é outra.",
        },
        {
          title: "O problema da Poda Alfa-Beta",
          body: "Sem poda, o Minimax é exponencial e injogável em qualquer profundidade real. O Alfa-Beta ignora ramos que não podem superar o melhor resultado atual. Acertar o equilíbrio foi a parte mais difícil: podar demais e você começa a perder jogadas fortes.",
        },
        {
          title: "Dois modos, dois propósitos",
          body: "Duas formas de validar o mesmo motor:<ul><li>Bot no Lichess: partidas reais, tempo limitado, adversários variados, sem controle sobre o input</li><li>Interface React: qualquer pessoa joga no browser, sem precisar de conta</li></ul>",
        },
        {
          title: "Oponentes reais, pressão real",
          body: "Oponente programado nunca revela edge cases. A API do Lichess revelou: timeouts, perda por tempo, movimentos chegando fora de ordem. Nenhum teste unitário pegaria isso.",
        },
      ],
    },
  },
  {
    id: "03",
    year: "2026",
    name: {
      en: "Finatto Incorporadora",
      pt: "Finatto Incorporadora",
    },
    desc: {
      en: "Live website for a real estate company. The client manages listings, photos, and team members through a built-in admin panel. No developer needed for content updates. Includes dark mode, WhatsApp button, SEO optimization, and property filtering.",
      pt: "Site real e em produção de uma incorporadora imobiliária. O cliente atualiza imóveis, fotos e equipe por um painel de administração embutido, sem precisar interagir com código ou banco de dados.  Conta com features como dark mode, botão de WhatsApp, otimização para buscadores e filtros de imóveis.",
    },
    stack: ["Next.js", "Sanity CMS", "TypeScript", "Styled Components"],
    github: "https://github.com/MatheusFinatto/site-finatto",
    demo: "https://finattoincorporadora.com.br/",
    techDecisions: {
      en: [
        {
          title: "Why Sanity CMS?",
          body: "The client isn't technical. Sanity's Studio is clean enough for non-developers, embedded at /studio so nothing extra to install. Content updates don't go through me.",
        },
        {
          title: "Next.js over a simpler SPA",
          body: "Property pages need to rank on Google. A plain SPA would've been faster to build but would've killed local search visibility. Next.js gives SSR for dynamic listings and static generation for pages that rarely change.",
        },
        {
          title: "Structured data for local SEO",
          body: "JSON-LD schema markup (RealEstateAgent + LocalBusiness) in the layout. Invisible to users, but tells search engines the business name, address, coordinates, and category. That detail is often what separates a site that ranks from one that doesn't.",
        },
      ],
      pt: [
        {
          title: "Por que Sanity CMS?",
          body: "O cliente não é técnico. O Studio do Sanity é simples o suficiente pra não-desenvolvedores, embedado no /studio sem nada extra pra instalar. Atualizações de conteúdo não passam por mim.",
        },
        {
          title: "Next.js em vez de uma SPA simples",
          body: "Páginas de imóveis precisam aparecer no Google. Uma SPA seria mais rápida de construir, mas mataria o SEO local. O Next.js dá SSR pra listagens dinâmicas e geração estática pra páginas que mudam pouco.",
        },
        {
          title: "Dados estruturados pra SEO local",
          body: "Schema markup JSON-LD (RealEstateAgent + LocalBusiness) no layout. Invisível pro usuário, mas informa aos buscadores o nome, endereço, coordenadas e ramo da empresa. Esse detalhe frequentemente separa um site que rankeia de um que não rankeia.",
        },
      ],
    },
  },
  {
    id: "04",
    year: "2022",
    name: {
      en: "Pizzaria (Docker)",
      pt: "Pizzaria (Docker)",
    },
    desc: {
      en: "Full-stack pizzeria platform: frontend, backend, and database all packaged with Docker. Built with vanilla JS, Node.js, and MySQL.",
      pt: "Plataforma de pizzaria com frontend, backend e banco de dados, tudo empacotado com Docker. JS puro, Node.js e MySQL.",
    },
    stack: ["Node.js", "JavaScript", "MySQL", "Docker"],
    github: "https://github.com/MatheusFinatto/Pizzaria-website-with-docker",
    demo: "https://pizzaria-design-showcase.netlify.app/",
    techDecisions: {
      en: [
        {
          title: "Why vanilla JS?",
          body: "Had been using React for a while and wanted to understand what it was actually doing for me. Without a framework, you manage state, DOM updates, and events manually. Uncomfortable on purpose.",
        },
        {
          title: "Why Docker?",
          body: "Wanted the whole stack (frontend, Node.js backend, MySQL) running with a single <code>docker compose up</code>. No 'works on my machine' issues. Writing the Dockerfiles from scratch taught me more about deployment than any tutorial.",
        },
      ],
      pt: [
        {
          title: "Por que JS puro?",
          body: "Estava usando React há um tempo e queria entender o que ele fazia por mim. Sem framework, você gerencia estado, DOM e eventos manualmente. Desconfortável de propósito.",
        },
        {
          title: "Por que Docker?",
          body: "Queria a stack inteira (frontend, backend Node.js, MySQL) rodando com um único <code>docker compose up</code>. Sem 'funciona na minha máquina'. Escrever os Dockerfiles do zero me ensinou mais sobre deploy do que qualquer tutorial.",
        },
      ],
    },
  },
];
