/*
  Tecnologias. Níveis definidos pelo uso nos projetos e pela grade da FIAP (30/10/2026); ela pode ajustar.
  Enquanto estiver `null`, a tecnologia aparece em "Nível a definir". Níveis: 'daily' | 'projects' | 'studying'.
  Para esconder uma tecnologia, apague a linha.
*/
export type Level = 'daily' | 'projects' | 'studying';
export type Tech = { name: string; level: Level | null };

export const levelOrder: (Level | null)[] = ['daily', 'projects', 'studying', null];

export const tech: Tech[] = [
  { name: 'HTML', level: 'projects' },
  { name: 'CSS', level: 'projects' },
  { name: 'JavaScript', level: 'projects' },
  { name: 'TypeScript', level: 'projects' },
  { name: 'React', level: 'projects' },
  { name: 'Next.js', level: 'projects' },
  { name: 'Vite', level: 'projects' },
  { name: 'Tailwind CSS', level: 'projects' },
  { name: 'Bootstrap', level: 'studying' },
  { name: 'Zustand', level: 'projects' },
  { name: 'Supabase (Postgres, Auth, RLS)', level: 'projects' },
  { name: 'SQL / Oracle', level: 'studying' },
  { name: 'Java (POO)', level: 'studying' },
  { name: 'Python', level: 'daily' },
  { name: 'Flask', level: 'daily' },
  { name: 'PostgreSQL', level: 'daily' },
  { name: 'Google Apps Script', level: 'daily' },
  { name: 'PWA', level: 'projects' },
  { name: 'Git e GitHub', level: 'daily' },
  { name: 'Vercel', level: 'projects' },
  { name: 'Acessibilidade web (WCAG, ARIA)', level: 'projects' },
  { name: 'Modelagem (UML, casos de uso, ER)', level: 'projects' },
  { name: "Ren'Py", level: 'projects' },
  { name: 'Desenvolvimento com IA (Claude)', level: 'daily' },
  { name: 'Claude Code (agentes, subagentes, MCP)', level: 'daily' },
  { name: 'Gemini / Vertex AI', level: 'daily' },
];
