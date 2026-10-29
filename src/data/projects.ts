/*
  Conteúdo dos projetos. Hoje só existe a versão em português (rascunho para a usuária aprovar).
  Quando os textos forem aprovados, adicionar `en` e `es` com o mesmo formato e ligar em `localized()`.
  Nada aqui foi inventado: tudo vem dos READMEs e documentos de cada projeto.
*/
import type { Lang } from '../i18n/utils';

export type ProjectText = {
  name: string;
  tagline: string;
  problem?: string;
  built?: string;
  decisions: string[];
  result?: string;
};

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  featured: boolean;
  status: 'live' | 'beta' | 'school' | 'study' | 'wip' | 'work';
  stack: string[];
  repoPrivate: boolean;
  links: ProjectLink[];
  /** true quando o link depende de resposta dela (aparece "a preencher") */
  pendingLink?: string;
  screens: { src: string; alt: string; caption: string }[];
  /** quantos prints ainda faltam, para mostrar o marcador */
  screensPending: boolean;
  text: { pt: ProjectText } & Partial<Record<Lang, ProjectText>>;
};

export const projects: Project[] = [
  {
    slug: 'meiro',
    featured: true,
    status: 'beta',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Zustand', 'Supabase', 'PWA'],
    repoPrivate: false,
    links: [
      { label: 'withmeiro.xyz', href: 'https://withmeiro.xyz' },
      { label: 'GitHub', href: 'https://github.com/JulliaFs/Meiro' },
    ],
    screens: [
      { src: '/img/meiro/landing.png', alt: 'Página inicial do Meiro com chamada para a lista de espera', caption: 'Landing pública, com lista de espera e conteúdo em três idiomas.' },
      { src: '/img/meiro/dashboard.png', alt: 'Painel do Meiro mostrando horas da semana, o que fazer agora e progresso', caption: 'Painel: o dia em uma tela.' },
    ],
    screensPending: false,
    text: {
      pt: {
        name: 'Meiro',
        tagline: 'O sistema operacional dos estudos: faculdade, cursos, anotações, flashcards e metas num lugar só.',
        problem: 'Estudante de graduação organiza a vida acadêmica em cinco lugares ao mesmo tempo, e nada conversa entre si. Manter tudo sincronizado vira um trabalho paralelo ao de estudar.',
        built: 'Um app web instalável (PWA) com 17 páginas e um painel que responde a uma pergunta: o que eu preciso fazer agora? A landing pública tem lista de espera e conteúdo em português, inglês e espanhol; o acesso ao app é por convite.',
        decisions: [
          'A segurança fica no banco, não na tela: cada tabela só mostra as linhas da própria pessoa (RLS no Postgres), e esconder um botão é só interface.',
          'Cadastro só por convite, de verdade. A primeira versão checava a aprovação no navegador, o que não protegia nada; a atual desliga o cadastro público.',
          'A chave de administrador nunca chega ao navegador: o convite roda numa função no servidor que confere se quem chama é admin.',
          'O "Professor Particular IA" monta o prompt para a pessoa usar na IA que já tem: custo zero e nenhuma chave de terceiro para vazar.',
          'A troca de banco local para Supabase não exigiu mexer nas páginas, porque o acesso a dados fica atrás de uma interface única.',
        ],
        result: 'Em beta fechado em withmeiro.xyz, com 17 páginas, 28 componentes e 16 tabelas no banco.',
      },
    },
  },
  {
    slug: 'app-ibcd',
    featured: false,
    status: 'live',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Supabase', 'PWA'],
    repoPrivate: true,
    links: [{ label: 'familiaibcd.com.br', href: 'https://familiaibcd.com.br' }],
    pendingLink: 'Crédito ao Kaue (pergunta 4)',
    screens: [],
    screensPending: true,
    text: {
      pt: {
        name: 'App da IBCD',
        tagline: 'O app da minha igreja: agenda, avisos, Modo Culto e pedidos de oração.',
        problem: 'A comunicação da igreja acontecia no domingo e se perdia durante a semana. O público vai de jovens a idosos, então o app precisava servir aos dois.',
        built: 'Um MVP planejado para 8 dias e custo zero. Idosos usam Início, Agenda e Avisos com fonte grande e poucos toques; jovens e adultos usam anotações, oração e o Modo Culto. Depois do lançamento, o app evoluiu em dupla, em revezamento, com fila de tarefas no GitHub.',
        decisions: [
          'Regra de corte do MVP: o que exigia dados reais de pessoas, decisão da liderança ou mais de 8 horas de trabalho ficou fora.',
          'A escala de voluntários ficou para a V2 em vez de mostrar uma escala falsa que criaria uma expectativa que ainda não dava para cumprir.',
          'Acessibilidade desde o início: fonte grande e "3 toques para tudo" para quem tem menos familiaridade com celular.',
          'Trabalho em dupla com combinados escritos no repositório, porque a memória do assistente de IA não é compartilhada entre os computadores.',
        ],
        result: 'Lançado em 11/10/2026 e em uso real pela comunidade.',
      },
    },
  },
  {
    slug: 'prumo',
    featured: true,
    status: 'wip',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Zustand', 'Supabase', 'Edge Functions', 'PWA'],
    repoPrivate: true,
    links: [],
    screens: [],
    screensPending: true,
    text: {
      pt: {
        name: 'Prumo',
        tagline: 'Finanças pessoais que mostram quanto de cada mês já está comprometido.',
        problem: 'Contas, cartões e cartões de loja espalhados, com parcelas que ninguém lembra até a fatura chegar.',
        built: 'Importação de faturas em PDF, CSV e OFX com tela de revisão, detecção de parcelas e duplicatas, categorias que aprendem com cada correção, orçamento por categoria, avisos de vencimento e um comparador de "com qual cartão ficar". Sincronização bancária via Open Finance (Pluggy).',
        decisions: [
          'O arquivo da fatura é lido no próprio navegador e nunca é enviado nem guardado; só os lançamentos confirmados são salvos.',
          'Dois "meses" diferentes, cada um para uma pergunta: o da fatura (caixa) e o da compra (consumo).',
          'Sugestões de economia por regras claras, sem IA, cada uma mostrando quanto economiza por mês.',
          'A chave do serviço bancário nunca chega ao navegador, e o banco usa RLS em todas as tabelas.',
          'A lógica de dinheiro (faturas, parcelas, duplicatas, categorias) tem 78 testes automatizados.',
        ],
        result: 'App pessoal em uso, instalável no Android (PWA).',
      },
    },
  },
  {
    slug: 'oria',
    featured: false,
    status: 'school',
    stack: ['Java (POO)', 'Oracle SQL', 'UML', 'HTML', 'CSS', 'Tailwind'],
    repoPrivate: false,
    links: [{ label: 'GitHub', href: 'https://github.com/JulliaFs/Oria' }],
    screens: [],
    screensPending: true,
    text: {
      pt: {
        name: 'ÓRIA',
        tagline: 'App financeiro que olha para a frente: diz o que fazer para chegar numa meta.',
        problem: 'Apps de controle de gastos mostram o que já aconteceu. A proposta da ÓRIA é sugerir mudanças concretas para alcançar um objetivo, como montar uma reserva ou quitar uma dívida.',
        built: 'O projeto do ano na FIAP, documentado por três ângulos: histórias de usuário, casos de uso e modelos lógico e físico com 14 entidades para Oracle. Também inclui o painel em HTML e Tailwind e as classes de domínio em Java orientado a objetos.',
        decisions: [
          'O modelo vai além do básico: perfil financeiro, metas, dívidas, investimentos, simulações e plano de ação com sugestões aceitas ou recusadas.',
          'O produto cobre os cinco itens do enunciado: receita, gasto, dívida, investimento e meta.',
        ],
        result: 'Entregue como projeto acadêmico, com documentação, modelagem e código.',
      },
    },
  },
  {
    slug: 'site-acessivel',
    featured: false,
    status: 'study',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    repoPrivate: false,
    links: [{ label: 'GitHub', href: 'https://github.com/JulliaFs/site-acessivel' }],
    pendingLink: 'Endereço publicado, se existir (pergunta 5)',
    screens: [],
    screensPending: true,
    text: {
      pt: {
        name: 'Site acessível: Tropicália',
        tagline: 'Refatoração de um site para funcionar com teclado e leitor de tela.',
        problem: 'Um site sobre Tropicália que não era usável por quem navega sem mouse ou com leitor de tela.',
        built: 'Refatoração do HTML, CSS e JavaScript com atributos ARIA, textos alternativos, ordem de tabulação e um menu de acessibilidade.',
        decisions: [
          'Acessibilidade tratada como parte da estrutura da página, não como acabamento.',
        ],
        result: 'Site refatorado e publicado no GitHub.',
      },
    },
  },
  // Projetos de trabalho (fonte: Portfólio AI Builder, tabela "Outros projetos"). Alinhar com a Mirae antes de publicar.
  {
    slug: 'documentos-lidos-por-ia',
    featured: false,
    status: 'work',
    stack: ['Google Apps Script', 'Gemini', 'Autocrat', 'pdf-lib'],
    repoPrivate: true,
    links: [],
    screens: [],
    screensPending: true,
    text: { pt: { name: 'Documentos lidos por IA', tagline: 'Gera as fichas e os termos de cada hospital: o Gemini lê os documentos do médico e preenche o que falta.', built: 'O Gemini lê os documentos enviados pelo médico (RG, diploma, CRM) e preenche os campos que faltam, cerca de 25 segundos por médico. Formulários de quadradinho são escritos direto no PDF.', decisions: [] } },
  },
  {
    slug: 'aba-de-credenciamento',
    featured: false,
    status: 'work',
    stack: ['Node.js', 'PostgreSQL (view somente leitura)'],
    repoPrivate: true,
    links: [],
    screens: [],
    screensPending: true,
    text: { pt: { name: 'Aba de credenciamento no painel dos gestores', tagline: 'Mostra a cada gestor só os médicos dos clientes dele, com a fase de cada um.', result: 'Em produção com 5 gestores.', decisions: [] } },
  },
  {
    slug: 'diagnostico-de-gestao',
    featured: false,
    status: 'work',
    stack: ['Python', 'PostgreSQL', 'AWS'],
    repoPrivate: true,
    links: [{ label: 'diagnostico.sejamirae.com', href: 'https://diagnostico.sejamirae.com' }],
    screens: [],
    screensPending: true,
    text: { pt: { name: 'Diagnóstico de Gestão da Equipe Médica', tagline: 'Autoavaliação executiva em 4 pilares, com painel que o time comercial configura sozinho.', built: 'Construído sozinha, do design ao deploy.', result: 'Em teste interno.', decisions: [] } },
  },
  {
    slug: 'medact',
    featured: false,
    status: 'work',
    stack: ['Next.js', 'Supabase'],
    repoPrivate: true,
    links: [],
    screens: [],
    screensPending: true,
    text: { pt: { name: 'MedAct', tagline: 'Plataforma B2B de credenciamento.', built: 'Fui a desenvolvedora principal.', decisions: [] } },
  },
  {
    slug: 'eclipse',
    featured: false,
    status: 'wip',
    stack: ["Ren'Py", 'Python'],
    repoPrivate: true,
    links: [],
    pendingLink: 'Decidir se o Eclipse entra (pergunta 6)',
    screens: [],
    screensPending: true,
    text: {
      pt: {
        name: 'Eclipse',
        tagline: "Visual novel em Ren'Py, ambientada num noir vitoriano.",
        problem: 'Um projeto autoral para explorar narrativa interativa.',
        built: 'Prólogo e telas em andamento.',
        decisions: [],
        result: 'Em desenvolvimento, ainda no começo.',
      },
    },
  },
];

export const localized = (p: Project, lang: Lang): { text: ProjectText; translated: boolean } => {
  const own = p.text[lang];
  return own ? { text: own, translated: true } : { text: p.text.pt, translated: lang === 'pt' };
};
