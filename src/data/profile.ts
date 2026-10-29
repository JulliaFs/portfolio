/*
  Dados pessoais, fornecidos por ela (currículo de 29/10/2026). `null` = "a preencher" no site.
  O telefone NÃO entra no site público (evita spam); decidir com ela.
*/
export const profile = {
  github: 'https://github.com/JulliaFs',
  email: 'julliaferreirafs@gmail.com' as string | null,
  linkedin: 'https://linkedin.com/in/jullia-f-silva-8766a0372' as string | null,
  photo: null as string | null,        // ex.: '/img/foto.jpg' (colocar o arquivo em public/img)
  cv: { pt: '/curriculo-pt.pdf', en: null, es: null } as Record<'pt' | 'en' | 'es', string | null>, // fonte: curriculo/curriculo-pt.html
  tagline: { pt: null, en: null, es: null } as Record<'pt' | 'en' | 'es', string | null>,
  about: {
    pt: 'Sou a Jullia, estudante de Análise e Desenvolvimento de Sistemas na FIAP. Há um ano uso IA para tirar do papel ferramentas que a operação da Mirae Serviços Médicos usa todo dia. Meu jeito de trabalhar: começo pelo problema de quem opera, desenho a solução com agentes de IA (Claude Code, Gemini) e coloco em produção em dias, não meses.',
    en: null,
    es: null,
  } as Record<'pt' | 'en' | 'es', string | null>,
};
