export type Project = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
};

export const featuredProjects: Project[] = [
  {
    id: 1,
    name: "Chess AI",
    description:
      "Computer Science final thesis: a Chess AI built on the Minimax algorithm with Alpha-Beta Pruning, integrated with Lichess as a playable bot.",
    techStack: ["Python", "Minimax", "Alpha-Beta Pruning", "Lichess API"],
    githubUrl: "https://github.com/MatheusFinatto/ChessAI-Final_Thesis",
    demoUrl: "https://chess-matheusfinatto.netlify.app/",
    imageUrl: "/images/ChessAI-Final_Thesis.png",
  },
  {
    id: 2,
    name: "PokeNext",
    description:
      "Modern Pokédex built with Next.js and PokéAPI. Fully responsive, uses static rendering and SSR to keep pages fast.",
    techStack: ["Next.js", "React", "TailwindCSS", "PokéAPI"],
    githubUrl: "https://github.com/MatheusFinatto/PokeNext",
    demoUrl: "https://poke-next-snowy-xi.vercel.app",
    imageUrl: "/images/PokeNext.png",
  },
  {
    id: 3,
    name: "Pizzaria (Docker)",
    description:
      "Full-stack pizzeria platform with front-end and back-end, containerized with Docker. Built with vanilla JS, Node.js, and MySQL.",
    techStack: ["Node.js", "JavaScript", "MySQL", "Docker"],
    githubUrl: "https://github.com/MatheusFinatto/Pizzaria-website-with-docker",
    demoUrl: "https://pizzaria-design-showcase.netlify.app/",
    imageUrl: "/images/Pizzaria-website-with-docker.png",
  },
  {
    id: 4,
    name: "React Pizzaria",
    description:
      "First React project — a pizzeria UI built during the Compass.uol internship period, featuring a Blip chatbot integration.",
    techStack: ["React", "JavaScript", "Blip"],
    githubUrl: "https://github.com/MatheusFinatto/React-pizzaria-app",
    demoUrl: "https://marios-pizzaria.netlify.app/",
    imageUrl: "/images/React-pizzaria-app.png",
  },
  {
    id: 5,
    name: "Movies Library",
    description:
      "React app consuming the TMDB API to browse movies. First hands-on experience with React and external API integration.",
    techStack: ["React", "JavaScript", "TMDB API"],
    githubUrl: "https://github.com/MatheusFinatto/React-Movies-Library",
    demoUrl: "https://exquisite-eclair-8819bf.netlify.app/",
    imageUrl: "/images/React-Movies-Library.png",
  },
  {
    id: 6,
    name: "Portfolio",
    description:
      "This site. Built with Next.js 16, TypeScript, and SCSS to communicate a mid-senior React + Node profile.",
    techStack: ["Next.js", "React", "TypeScript", "SCSS", "Vercel"],
    githubUrl: "https://github.com/MatheusFinatto/Portfolio",
    imageUrl: "/images/Screenshot.png",
  },
];
