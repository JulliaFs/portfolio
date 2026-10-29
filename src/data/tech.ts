/*
  Tecnologias. O NÍVEL de cada uma é ela quem define (regra do briefing): enquanto estiver `null`,
  o site mostra "nível a preencher". Níveis: 'daily' | 'projects' | 'studying'.
  Para esconder uma tecnologia, apague a linha.
*/
export type Level = 'daily' | 'projects' | 'studying';
export type Tech = { name: string; level: Level | null };

export const levelOrder: (Level | null)[] = ['daily', 'projects', 'studying', null];

export const tech: Tech[] = [
  { name: 'HTML', level: null },
  { name: 'CSS', level: null },
  { name: 'JavaScript', level: null },
  { name: 'TypeScript', level: null },
  { name: 'React', level: null },
  { name: 'Next.js', level: null },
  { name: 'Vite', level: null },
  { name: 'Tailwind CSS', level: null },
  { name: 'Bootstrap', level: null },
  { name: 'Zustand', level: null },
  { name: 'Supabase (Postgres, Auth, RLS)', level: null },
  { name: 'SQL / Oracle', level: null },
  { name: 'Java (POO)', level: null },
  { name: 'Python', level: null },
  { name: 'Flask', level: null },
  { name: 'PostgreSQL', level: null },
  { name: 'Google Apps Script', level: null },
  { name: 'PWA', level: null },
  { name: 'Git e GitHub', level: null },
  { name: 'Vercel', level: null },
  { name: 'Acessibilidade web (WCAG, ARIA)', level: null },
  { name: 'Modelagem (UML, casos de uso, ER)', level: null },
  { name: "Ren'Py", level: null },
  { name: 'Desenvolvimento com IA (Claude)', level: null },
  { name: 'Claude Code (agentes, subagentes, MCP)', level: null },
  { name: 'Gemini / Vertex AI', level: null },
];
