/*
  Casos de trabalho (fonte: "Portfólio AI Builder — Jullia.md", 29/10/2026). Só em português por enquanto.
  Campos entre colchetes no original viram `resultPending` / `demo`: o site mostra "a preencher".
  ANTES DE PUBLICAR: alinhar com a Mirae o que pode aparecer (nomes de sistemas, telas, números).
*/
import type { Lang } from '../i18n/utils';

export type CaseText = {
  title: string;
  summary: string;
  problem: string;
  built: string;
  ai: string;
  memory?: string;
  /** onde uma pessoa decide, e não a IA */
  human: string;
  /** o que deu errado e o que mudou depois */
  wrong: string;
  result: string;
};

export type Case = {
  slug: string;
  tools: string[];
  /** número que ela ainda precisa informar (ex.: tempo antes e depois) */
  resultPending?: string;
  text: { pt: CaseText } & Partial<Record<Lang, CaseText>>;
};

export const cases: Case[] = [
  {
    slug: 'verify',
    tools: ['Python (Flask)', 'PostgreSQL', 'Cloudflare Access', 'APIs do Google Workspace', 'Claude Code'],
    resultPending: 'tempo médio por cadastro, antes e depois',
    text: {
      pt: {
        title: 'Verify: o credenciamento médico saiu da planilha',
        summary: 'Um app interno que controla cada etapa do credenciamento e substitui uma planilha e 12 Apps Scripts.',
        problem: 'O cadastro de médicos vivia numa planilha compartilhada e em 12 Apps Scripts. As regras de documento por hospital estavam copiadas em vários scripts e divergiam. O formulário coletava 13 documentos, mas a auditoria só validava 6 a 8.',
        built: 'O Verify, um app interno que recebe o médico e controla cada etapa do credenciamento. Tem painel administrativo, regras por cliente editáveis na tela e login Google protegido. Conversa com o portal do médico, com a base de médicos e com o painel dos gestores, e cada sistema escreve só nos próprios dados.',
        ai: 'Escrevi a especificação com o Claude atuando como product owner comigo e construí o código com o Claude Code. Usei IA também para mapear as regras escondidas nos scripts antigos antes de migrá-las.',
        human: 'A IA lê documentos e sugere, mas só uma pessoa aprova a etapa inicial, cada documento e o envio ao hospital. Se a IA pular ou inventar um item, ele vai para revisão: ela nunca aprova sozinha. Ela também recebe os dados sem CPF nem nome de pessoa física.',
        wrong: 'No sistema antigo, o código lia campos no lugar errado e a IA decidiu por meses sem esses dados, sem nenhum erro aparente. No Verify, a tela mostra quantos campos vieram preenchidos, e o item sem dados vai para revisão humana. O alerta da IA ainda é cauteloso demais: a maioria é aceita por uma pessoa mesmo assim.',
        result: 'As regras ficaram num lugar só. Os 5 gestores acompanham os credenciamentos pelo painel de gestão, sem pedir status por mensagem. Mais de 270 testes automatizados, com dados fictícios, rodam antes de cada publicação.',
      },
    },
  },
  {
    slug: 'plantoes',
    tools: ['Python', 'pyautogui', 'Reconhecimento de imagem', 'TeamViewer', 'Claude Code'],
    resultPending: 'tempo do processo manual',
    text: {
      pt: {
        title: 'Plantões lançados sozinhos num sistema sem API',
        summary: 'Uma automação que digita os plantões do mês numa tela remota e confere o resultado dia a dia.',
        problem: 'Todo mês, centenas de plantões médicos precisam ser digitados no sistema de um hospital parceiro, acessado por TeamViewer e sem API. Qualquer tecla na tela errada gravava um plantão incompleto.',
        built: 'Uma automação em Python que lê a exportação do sistema de escalas e digita os plantões na tela remota. Antes de cada gravação, confirma por imagem que a janela certa está aberta. No fim, confere dia a dia o relatório do sistema contra a origem.',
        ai: 'Desenhei as 5 etapas e as travas de segurança com o Claude Code. Ele também escreveu o script de conferência que pegou o erro do primeiro mês.',
        human: 'A automação só grava depois de confirmar por imagem que a janela certa está aberta. Para forçar uma gravação, é preciso digitar a palavra "salvar" por extenso. No fim, a conferência mostra qualquer diferença para uma pessoa resolver.',
        wrong: 'No primeiro mês, um ENTER apertado com a tela errada gravou um plantão incompleto. A conferência pegou o erro e virou etapa fixa do processo.',
        result: 'Setembro/2026 foi o primeiro mês no processo novo: 243 plantões e 2.556 horas lançadas, com a conferência fechando sem diferença. A conferência pegou um plantão gravado incompleto, com 12 horas a menos, que teria passado despercebido.',
      },
    },
  },
  {
    slug: 'painel-credenciamento',
    tools: ['Python (Flask)', 'Importador de CSV/colagem', 'Google Sheets API', 'Claude Code'],
    text: {
      pt: {
        title: 'Painel de credenciamento quando a fonte de dados sumiu',
        summary: 'Um painel que reconstrói o acompanhamento de um cliente depois que o acesso à planilha-mãe foi cortado.',
        problem: 'Um cliente grande (uma rede de clínicas) cortou o acesso à planilha-mãe de onde vinham os dados. O script que acompanhava a jornada de cada médico parou no primeiro passo, e o follow-up da equipe congelou.',
        built: 'Um painel novo que importa as tabelas que o cliente ainda exporta (colar na tela ou subir o arquivo). Ele reconhece qual tabela é, descarta o que é de outra empresa, apaga CPF e CRM dos campos livres e junta os registros pelo ID. Depois confere a planilha interna contra a base do cliente e aponta divergências, como status encerrado de um lado e aberto do outro.',
        ai: 'O Claude Code portou as regras do script antigo para o painel novo e me ajudou a auditar o painel anterior antes de reescrever. Escolhi as regras de negócio; a IA fez a tradução e os testes.',
        human: 'O painel aponta as divergências, e a equipe decide o que fazer com cada uma. Ele não corrige nada sozinho na base do cliente.',
        wrong: 'Na primeira carga, 2 médicos não batiam. Em vez de ajustar a conta para fechar, investiguei a diferença: eram médicos sem ID que o painel do cliente contava duas vezes.',
        result: 'Na primeira importação real, 204 médicos casaram com a base do cliente. As 2 diferenças foram explicadas: médicos sem ID que o painel do cliente contava duas vezes. A equipe voltou a ter o andamento de cada médico em uma tabela com filtros.',
      },
    },
  },
  {
    slug: 'equipe-de-agentes',
    tools: ['Claude Code (sessões, subagentes, skills, memória)', 'Python', 'MCP (ClickUp, Gmail, Google Drive)', 'Git'],
    text: {
      pt: {
        title: 'Uma equipe de agentes Claude tocando vários sistemas ao mesmo tempo',
        summary: 'Um orquestrador transforma pedidos em linguagem natural em instruções para o agente de cada sistema.',
        problem: 'Eu cuidava sozinha de vários sistemas ao mesmo tempo: o app de credenciamento, o portal do médico, o painel dos gestores, a base de médicos, planilhas e automações. Reexplicar o contexto toda vez a uma IA tomava mais tempo que o trabalho em si.',
        built: 'Um sistema de agentes Claude Code com um dono por assunto. Hoje são mais de 20 conversas registradas. Um agente orquestrador recebe meus pedidos em linguagem natural, transforma cada um em instrução concreta (o que mudar, onde, critério de pronto) e envia ao agente certo. Outro agente lê meu ClickUp e avisa os demais sobre o que é deles.',
        ai: 'Os agentes são a própria solução: cada um é uma sessão do Claude Code especializada em um sistema.',
        memory: 'Escrevi uma ferramenta em Python (só biblioteca padrão) que gera um índice das conversas e um handoff de cada uma: decisões, entregáveis e pendências. Um agente novo carrega o contexto com um comando. A ferramenta mascara CPF, CRM e senhas antes de guardar qualquer coisa, por causa da LGPD.',
        human: 'Eu defino o problema, aprovo o roteiro e testo o resultado. O código é escrito pelos agentes. No Verify, nada vai para produção sem o meu OK.',
        wrong: 'Duas sessões de IA editaram o mesmo código ao mesmo tempo, e uma gravou por cima da outra sem nenhum erro. Agora cada sessão confere o estado do código antes e depois de aplicar, e salva na hora. É uma regra de processo, ainda sem trava técnica.',
        result: 'Aprovo um roteiro inteiro de uma vez em vez de entrar em cada conversa. O contexto de um projeto passa de um agente para outro sem eu reescrever nada. Nas últimas 3 semanas, foram cerca de 190 pedidos por semana.',
      },
    },
  },
];

export const localizedCase = (c: Case, lang: Lang): { text: CaseText; translated: boolean } => {
  const own = c.text[lang];
  return own ? { text: own, translated: true } : { text: c.text.pt, translated: lang === 'pt' };
};
