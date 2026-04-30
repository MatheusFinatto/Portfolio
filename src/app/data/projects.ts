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
      en: "Async Order Import",
      pt: "Importação Assíncrona de Pedidos",
    },
    desc: {
      en: "Order import system from CSV files. Background processing handles thousands of rows without slowing down the app. Each import is tracked row by row with a full audit trail accessible via API.",
      pt: "Sistema de importação de pedidos via CSV. O processamento em segundo plano lida com milhares de linhas sem travar o app. Cada importação é rastreável linha a linha, com histórico completo de auditoria acessível via API.",
    },
    stack: ["NestJS", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    github: null,
    demo: null,
    techDecisions: {
      en: [
        {
          title: "Why NestJS?",
          body: "Coming from React where every architectural decision is yours to make, NestJS felt like a relief. Modules, dependency injection, decorators: everything has a designated place. I picked it partly to learn it properly, partly because it keeps the codebase easy to navigate as it grows.",
        },
        {
          title: "Why a queue instead of processing inline?",
          body: "Processing a 10k-row CSV inside an HTTP request means the client waits minutes for a response. BullMQ moves the work to a background worker. The API responds immediately with a job ID, and the client polls for progress. The worker can also retry failed rows independently without touching the request cycle.",
        },
        {
          title: "Per-row audit trail",
          body: "Each import is modeled as a batch with individual row records. If row 847 fails validation, the client sees exactly which row and why, not just 'import failed'. That design came from thinking about the person who has to debug a broken import at the end of the workday.",
        },
        {
          title: "Self-imposed challenge",
          body: "Most of this stack (NestJS, Redis, BullMQ, Docker Compose) I hadn't used in production before building this. I picked them deliberately to push myself into backend territory I wasn't comfortable with yet.",
        },
      ],
      pt: [
        {
          title: "Por que NestJS?",
          body: "Vindo do React, onde cada decisão de arquitetura é sua, o NestJS foi um alívio. Módulos, injeção de dependência, decorators: tudo tem um lugar certo. Escolhi ele pra aprender de verdade e porque mantém o código navegável conforme cresce.",
        },
        {
          title: "Por que uma fila em vez de processar na requisição?",
          body: "Processar um CSV de 10 mil linhas de forma síncrona trava a requisição HTTP por minutos. O BullMQ move o trabalho para um worker em segundo plano. A API responde imediatamente com um ID de job, e o cliente acompanha o progresso. O worker também consegue retentar linhas com falha de forma independente.",
        },
        {
          title: "Rastreamento por linha",
          body: "Cada importação é modelada como um lote com registros individuais por linha. Se a linha 847 falha na validação, o cliente vê exatamente qual linha e por quê, e não apenas 'importação falhou'. Essa decisão veio de pensar em quem vai debugar uma importação quebrada no final do expediente.",
        },
        {
          title: "Desafio intencional",
          body: "A maior parte da stack (NestJS, Redis, BullMQ, Docker Compose) eu não tinha usado em produção antes. Escolhi essas tecnologias deliberadamente pra me forçar a avançar no backend.",
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
          body: "I wanted to build something that felt like real CS, not another CRUD app. Chess engines sit at the intersection of algorithms, performance, and game theory. Minimax on paper is one thing; implementing it from scratch and watching it play gives you a completely different understanding.",
        },
        {
          title: "The Alpha-Beta pruning problem",
          body: "Without pruning, Minimax explores every possible game state exponentially, making it unplayable at any real search depth. Alpha-Beta skips branches that can't possibly improve the current best result. Getting this right was the hardest part: prune too aggressively and you miss strong moves.",
        },
        {
          title: "Two modes, two purposes",
          body: "The Lichess bot proves the engine works under real pressure: time limits, varied opponents, no control over input. The React interface serves the opposite case: anyone can play against the machine in the browser, no account needed. They show different things about the same engine.",
        },
        {
          title: "Real opponents, real pressure",
          body: "Connecting to the Lichess Bot API forced the engine to handle things a scripted opponent would never reveal: timeouts, flagging on time, moves arriving out of order. That validated the engine in a way no unit test could.",
        },
      ],
      pt: [
        {
          title: "Por que um motor de xadrez no TCC?",
          body: "Queria construir algo que parecesse ciência da computação de verdade, não mais um CRUD. Motores de xadrez ficam na interseção de algoritmos, performance e teoria dos jogos. Minimax no papel é uma coisa; implementar do zero e ver ele jogar é outra completamente diferente.",
        },
        {
          title: "O problema da Poda Alfa-Beta",
          body: "Sem poda, o Minimax explora cada estado do jogo de forma exponencial, tornando-o injogável em qualquer profundidade real. O Alfa-Beta ignora ramos que não podem melhorar o melhor resultado atual. Acertar isso foi a parte mais difícil: podar demais e você perde jogadas fortes.",
        },
        {
          title: "Dois modos, dois propósitos",
          body: "O bot integrado ao Lichess prova que o motor funciona sob pressão real: tempo limitado, adversários variados, sem controle sobre o input. A interface React serve o caso oposto: qualquer pessoa pode jogar contra a máquina no browser, sem precisar de conta. As duas frentes mostram coisas diferentes sobre o mesmo motor.",
        },
        {
          title: "Oponentes reais, pressão real",
          body: "Conectar à API Bot do Lichess forçou o motor a lidar com coisas que um oponente programado nunca revelaria: timeouts, perda por tempo, movimentos chegando fora de ordem. Isso validou o motor de uma forma que nenhum teste unitário conseguiria.",
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
          body: "The client is not technical and can't call me every time a new listing needs to go live. Sanity's Studio UI is clean enough for non-developers. I embedded it at /studio so there's nothing extra to install. The client handles all content from there, independently.",
        },
        {
          title: "Next.js over a simpler SPA",
          body: "Property pages need to rank on Google. Next.js gives server-side rendering for dynamic listings and static generation for pages that rarely change. A plain SPA would've been faster to build but would've hurt local search visibility, a bad tradeoff for a business that depends on it.",
        },
        {
          title: "Structured data for local SEO",
          body: "I added JSON-LD schema markup (RealEstateAgent + LocalBusiness) to the layout. Invisible to users, but it tells search engines the business name, address, coordinates, and category. This kind of detail is often what separates a site that ranks from one that doesn't.",
        },
      ],
      pt: [
        {
          title: "Por que Sanity CMS?",
          body: "O cliente não é técnico e não pode me ligar toda vez que um imóvel novo precisa ir ao ar. O Studio do Sanity é simples o suficiente pra não-desenvolvedores, então embedei direto no /studio pra não precisar de nada extra. O cliente gerencia todo o conteúdo por lá, de forma independente.",
        },
        {
          title: "Next.js em vez de uma SPA simples",
          body: "Páginas de imóveis precisam aparecer no Google. O Next.js dá SSR para listagens dinâmicas e geração estática para páginas que mudam pouco. Uma SPA comum seria mais rápida de construir, mas prejudicaria o SEO local, um tradeoff ruim pra um negócio que depende disso.",
        },
        {
          title: "Dados estruturados pra SEO local",
          body: "Adicionei schema markup JSON-LD (RealEstateAgent + LocalBusiness) ao layout. Invisível pro usuário, mas informa aos buscadores o nome, endereço, coordenadas e ramo da empresa. Esse tipo de detalhe frequentemente separa um site que rankeia de um que não rankeia.",
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
      en: "Full-stack pizzeria platform — frontend, backend, and database all packaged with Docker. Built with vanilla JS, Node.js, and MySQL.",
      pt: "Plataforma de pizzaria com frontend, backend e banco de dados, tudo empacotado com Docker. JS puro, Node.js e MySQL.",
    },
    stack: ["Node.js", "JavaScript", "MySQL", "Docker"],
    github: "https://github.com/MatheusFinatto/Pizzaria-website-with-docker",
    demo: "https://pizzaria-design-showcase.netlify.app/",
    techDecisions: {
      en: [
        {
          title: "Why vanilla JS?",
          body: "I'd been working with React for a while and wanted to understand what it was doing for me. Building without a framework forces you to manage state, DOM updates, and events manually. It's uncomfortable, and that discomfort was the point.",
        },
        {
          title: "Why Docker?",
          body: "I wanted the whole stack (frontend, Node.js backend, MySQL) to run with a single <code>docker compose up</code>. No 'works on my machine' problems. Configuring the Dockerfiles and compose file from scratch taught me more about deployment than any tutorial.",
        },
      ],
      pt: [
        {
          title: "Por que JS puro?",
          body: "Estava trabalhando com React há um tempo e queria entender o que ele estava fazendo por mim. Construir sem framework te força a gerenciar estado, atualização do DOM e eventos manualmente. É desconfortável, e esse desconforto era o objetivo.",
        },
        {
          title: "Por que Docker?",
          body: "Dois motivos: aprender conteinerização na prática e querer que a stack inteira (frontend, backend Node.js, MySQL) rodasse com um único <code>docker compose up</code>.  Configurar os Dockerfiles e o arquivo compose do zero me ensinou mais sobre deploy do que qualquer tutorial.",
        },
      ],
    },
  },
];
