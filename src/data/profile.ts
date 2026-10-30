/*
  Dados pessoais, fornecidos por ela (currículo de 29/10/2026). `null` = "a preencher" no site.
  O telefone NÃO entra no site público (evita spam); decidir com ela.
*/
export const profile = {
  github: 'https://github.com/JulliaFs',
  email: 'julliaferreirafs@gmail.com' as string | null,
  linkedin: 'https://linkedin.com/in/jullia-f-silva-8766a0372' as string | null,
  employer: { name: 'Mirae Serviços Médicos', url: 'https://sejamirae.com' },
  photo: '/img/foto.jpg' as string | null,
  cv: { pt: '/curriculo-pt.pdf', en: null, es: null } as Record<'pt' | 'en' | 'es', string | null>, // PDF sem o telefone
  graduation: { pt: 'dez/2027', en: 'Dec 2027', es: 'dic. 2027' } as Record<'pt' | 'en' | 'es', string>,
  tagline: { pt: null, en: null, es: null } as Record<'pt' | 'en' | 'es', string | null>,
  about: {
    pt: 'Sou a Jullia, estudante de Análise e Desenvolvimento de Sistemas na FIAP. Há um ano uso IA para tirar do papel ferramentas que a operação da Mirae Serviços Médicos usa todo dia. Meu jeito de trabalhar: começo pelo problema de quem opera, desenho a solução com agentes de IA (Claude Code, Gemini) e coloco em produção em dias, não meses.',
    en: "I'm Jullia, a Systems Analysis and Development student at FIAP. For a year I've been using AI to build tools that the operations team at Mirae Serviços Médicos uses every day. How I work: I start from the problem of the person doing the job, design the solution with AI agents (Claude Code, Gemini) and ship to production in days, not months.",
    es: 'Soy Jullia, estudiante de Análisis y Desarrollo de Sistemas en FIAP. Desde hace un año uso IA para crear herramientas que el equipo de operaciones de Mirae Serviços Médicos usa todos los días. Mi forma de trabajar: empiezo por el problema de quien opera, diseño la solución con agentes de IA (Claude Code, Gemini) y la pongo en producción en días, no en meses.',
  } as Record<'pt' | 'en' | 'es', string | null>,
};
