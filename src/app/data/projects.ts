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
          title: "RabbitMQ over BullMQ",
          body: "<ul><li>BullMQ was the first candidate: less infrastructure, simpler setup</li><li>AMQP's native dead-letter exchange handles failed message routing without custom retry logic on top of Redis</li><li>Explicit consumer ACK/NACK gives at-least-once guarantees at protocol level, not application level</li></ul>",
        },
        {
          title: "NestJS over Express",
          body: "<ul><li>Module system enforces domain boundaries at compile time, not convention that erodes under deadlines</li><li>Built-in DI makes consumer isolation testable without mocking the queue transport</li><li>Validation pipes reject malformed payloads at the boundary before anything touches RabbitMQ</li></ul>",
        },
        {
          title: "PostgreSQL for idempotency",
          body: "<ul><li>Idempotency keyed on <code>event_id</code>; ACID guarantees safe deduplication under concurrent consumers without application-layer coordination</li><li>Queryable event history as a side effect of the same table; audit trail comes for free</li><li>Already in the stack; no extra infrastructure to operate</li></ul>",
        },
        {
          title: "HMAC-SHA256 with timing-safe comparison",
          body: "<ul><li>Constant-time comparison prevents timing oracle attacks on the signature check</li><li>Validated before any queue interaction; bad signatures never touch RabbitMQ</li></ul>",
        },
      ],
      pt: [
        {
          title: "RabbitMQ em vez de BullMQ",
          body: "<ul><li>BullMQ foi o primeiro candidato: menos infraestrutura, setup mais simples</li><li>O dead-letter exchange nativo do AMQP gerencia o roteamento de mensagens com falha sem lógica de retry customizada em cima do Redis</li><li>ACK/NACK explícito do consumer dá garantias at-least-once no nível do protocolo, não da aplicação</li></ul>",
        },
        {
          title: "NestJS em vez de Express",
          body: "<ul><li>O sistema de módulos impõe limites de domínio em tempo de compilação, não convenção que se corrói sob pressão de prazo</li><li>DI nativo torna o isolamento de consumers testável sem mockar o transporte de fila</li><li>Validation pipes rejeitam payloads malformados na fronteira antes de qualquer coisa tocar o RabbitMQ</li></ul>",
        },
        {
          title: "PostgreSQL para idempotência",
          body: "<ul><li>Idempotência por <code>event_id</code>; ACID garante deduplicação segura sob consumers concorrentes sem coordenação na camada de aplicação</li><li>Histórico de eventos consultável como efeito colateral da mesma tabela; audit trail de graça</li><li>Já estava no stack; sem infraestrutura extra para operar</li></ul>",
        },
        {
          title: "HMAC-SHA256 com comparação em tempo constante",
          body: "<ul><li>Comparação em tempo constante previne ataques de timing oracle na verificação de assinatura</li><li>Validado antes de qualquer interação com a fila; assinaturas inválidas nunca tocam o RabbitMQ</li></ul>",
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
          title: "Python: one language, two fronts",
          body: "<ul><li>Flask exposes the engine as an API; React frontend calls it directly, no runtime boundary to bridge</li><li>Same language powers the Lichess bot and the web backend; no context switching</li><li>Measured: not a bottleneck at 5–6 ply depth; faster iteration for algorithm experimentation outweighed raw throughput concerns</li></ul>",
        },
        {
          title: "Alpha-Beta cutoff tuning was the real work",
          body: "<ul><li>Plain Alpha-Beta prunes correctly but quality depends heavily on move ordering</li><li>Piece-square tables for move ordering → better cutoffs → meaningful depth gains within time limits</li><li>Over-pruning loses strong moves; calibrating that balance took most of the implementation time</li></ul>",
        },
        {
          title: "Lichess over a sandboxed environment",
          body: "<ul><li>Real opponents are a better stress test than scripted suites: out-of-order moves, clock flagging, network disconnects, edge positions you'd never construct manually</li><li>Bot ELO gives a concrete, comparable quality signal; a private sandbox gives none</li><li>No sandbox; bugs had real game consequences, which forced rigorous edge case handling</li></ul>",
        },
      ],
      pt: [
        {
          title: "Python: uma linguagem, duas frentes",
          body: "<ul><li>Flask expõe o motor como API; frontend React consome diretamente, sem camada de adaptação entre runtimes</li><li>Mesma linguagem no bot do Lichess e no backend web; sem troca de contexto entre runtimes</li><li>Medido: não é gargalo a 5–6 ply; iteração mais rápida para experimentação de algoritmos pesou mais do que preocupações com throughput</li></ul>",
        },
        {
          title: "Ajuste dos cutoffs do Alfa-Beta foi o trabalho de verdade",
          body: "<ul><li>Alfa-Beta puro poda corretamente, mas a qualidade depende muito da ordenação de movimentos</li><li>Tabelas piece-square para ordenação de movimentos → cutoffs melhores → ganhos reais de profundidade dentro dos limites de tempo</li><li>Poda agressiva demais perde jogadas fortes; calibrar esse equilíbrio consumiu a maior parte do tempo de implementação</li></ul>",
        },
        {
          title: "Lichess em vez de ambiente sandboxed",
          body: "<ul><li>Adversários reais são stress test melhor que suites programadas: movimentos fora de ordem, perda por tempo, desconexões, posições que jamais seriam construídas manualmente</li><li>ELO do bot dá sinal de qualidade concreto e comparável; sandbox privado não dá nenhum</li><li>Sem sandbox; bugs tinham consequências reais em partidas, o que forçou tratamento rigoroso de edge cases</li></ul>",
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
          title: "Why Sanity",
          body: "<ul><li>Studio embeds at <code>/studio</code>; no separate deployment, no extra login for the client</li><li>GROQ handles relational content queries expressively; fits the listings model well</li><li>Free tier fits a small production client</li></ul>",
        },
        {
          title: "ISR for listings, static for stable pages",
          body: "<ul><li>Property listings change but not on every request; ISR gives fresh data without per-request SSR cost</li><li>About/contact pages are fully static; no reason to pay SSR latency for content that never changes</li><li>Revalidation interval tuned to actual listing update frequency, not set arbitrarily</li></ul>",
        },
        {
          title: "Styled Components over Tailwind",
          body: "<ul><li>Theme provider propagates dark mode tokens across all components from a single token set; one change to retheme everything</li><li>Tailwind <code>dark:</code> prefix would scatter token logic across every className</li><li>Scoped styles prevent bleed between property card variants with dynamic data</li></ul>",
        },
        {
          title: "JSON-LD structured data for local SEO",
          body: "<ul><li><code>RealEstateAgent</code> + <code>LocalBusiness</code> markup in root layout: name, address, coordinates, category</li><li>Often the difference between ranking and not in local search; added before launch, not as an afterthought</li></ul>",
        },
      ],
      pt: [
        {
          title: "Por que Sanity",
          body: "<ul><li>Studio embarcado em <code>/studio</code>; sem deploy separado, sem login extra para o cliente</li><li>GROQ gerencia queries de conteúdo relacional de forma expressiva; encaixa bem no modelo de listagens</li><li>Free tier serve para cliente pequeno em produção</li></ul>",
        },
        {
          title: "ISR para listagens, estático para páginas estáveis",
          body: "<ul><li>Listagens de imóveis mudam, mas não a cada request; ISR entrega dados frescos sem custo de SSR por request</li><li>Páginas como sobre/contato são totalmente estáticas; sem motivo para pagar latência de SSR por conteúdo que nunca muda</li><li>Intervalo de revalidação calibrado para a frequência real de atualização das listagens, não definido arbitrariamente</li></ul>",
        },
        {
          title: "Styled Components em vez de Tailwind",
          body: "<ul><li>Theme provider propaga tokens de dark mode por todos os componentes a partir de um único conjunto de tokens; uma mudança para re-tematizar tudo</li><li>O prefixo <code>dark:</code> do Tailwind espalharia a lógica de tokens por cada className</li><li>Estilos escopados evitam vazamento entre variantes de cards de imóveis com dados dinâmicos</li></ul>",
        },
        {
          title: "Dados estruturados JSON-LD para SEO local",
          body: "<ul><li>Markup <code>RealEstateAgent</code> + <code>LocalBusiness</code> no layout raiz: nome, endereço, coordenadas, ramo</li><li>Frequentemente a diferença entre rankear ou não em busca local; adicionado antes do lançamento, não como afterthought</li></ul>",
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
          title: "Vanilla JS, no React",
          body: "<ul><li>Deliberate constraint to understand what React abstracts before reaching for it</li><li>Manual DOM updates and event delegation make the cost of state management explicit; every re-render written by hand</li></ul>",
        },
        {
          title: "Docker Compose for the full stack",
          body: "<ul><li>Entire stack (static files, Node.js API, MySQL) starts with one <code>docker compose up</code></li><li>Wrote Dockerfiles without relying on base image assumptions; made containerization concrete rather than abstract</li></ul>",
        },
        {
          title: "Relational model: orders, items, pizzas",
          body: "<ul><li>Order → items → pizzas is a relational domain with clear foreign key chains; no benefit to the document model for a fixed schema</li></ul>",
        },
        {
          title: "Node.js backend",
          body: "<ul><li>Single language front-to-back; no context switching between runtimes</li><li>Non-blocking I/O handles concurrent order submissions without thread management overhead</li></ul>",
        },
      ],
      pt: [
        {
          title: "JS puro, sem React",
          body: "<ul><li>Restrição deliberada para entender o que o React abstrai antes de usá-lo</li><li>Atualizações manuais de DOM e event delegation tornam o custo do gerenciamento de estado explícito; cada re-render escrito à mão</li></ul>",
        },
        {
          title: "Docker Compose para o stack completo",
          body: "<ul><li>Stack inteira (arquivos estáticos, API Node.js, MySQL) sobe com um <code>docker compose up</code></li><li>Dockerfiles escritos sem depender de suposições sobre imagens base; tornou containerização concreta em vez de abstrata</li></ul>",
        },
        {
          title: "Modelo relacional: pedidos, itens, pizzas",
          body: "<ul><li>Pedido → itens → pizzas é um domínio relacional com cadeias claras de foreign key; sem benefício no modelo de documentos para um schema fixo</li></ul>",
        },
        {
          title: "Backend Node.js",
          body: "<ul><li>Mesma linguagem de ponta a ponta; sem troca de contexto entre runtimes</li><li>I/O não-bloqueante gerencia submissões de pedidos concorrentes sem overhead de gerenciamento de threads</li></ul>",
        },
      ],
    },
  },
];
