/* Disciplinas do 1º ano de ADS, da grade publicada no site da FIAP (consulta em 30/10/2026). */
type Text = Record<'pt' | 'en' | 'es', string>;

export const subjects: { name: string; topics: Text }[] = [
  {
    name: 'Intelligent Agents for Software Development',
    topics: {
      pt: 'IA generativa, LLMs, integração por APIs, prompts, MCP, agentes, RAG e bancos vetoriais',
      en: 'Generative AI, LLMs, API integration, prompts, MCP, agents, RAG and vector databases',
      es: 'IA generativa, LLM, integración por API, prompts, MCP, agentes, RAG y bases vectoriales',
    },
  },
  {
    name: 'Computational Thinking Using Python',
    topics: {
      pt: 'Lógica de programação e Python, do básico ao avançado',
      en: 'Programming logic and Python, from basics to advanced',
      es: 'Lógica de programación y Python, de lo básico a lo avanzado',
    },
  },
  {
    name: 'Domain Driven Design Using Java',
    topics: {
      pt: 'Domain Driven Design, orientação a objetos, JDBC e APIs',
      en: 'Domain Driven Design, object orientation, JDBC and APIs',
      es: 'Domain Driven Design, orientación a objetos, JDBC y API',
    },
  },
  {
    name: 'Building Relational Database',
    topics: {
      pt: 'Modelagem relacional, normalização, SQL e Oracle',
      en: 'Relational modeling, normalization, SQL and Oracle',
      es: 'Modelado relacional, normalización, SQL y Oracle',
    },
  },
  {
    name: 'Front-end Design Engineering',
    topics: {
      pt: 'HTML5, CSS3, JavaScript, TypeScript, Bootstrap, React, padrões W3C e SEO',
      en: 'HTML5, CSS3, JavaScript, TypeScript, Bootstrap, React, W3C standards and SEO',
      es: 'HTML5, CSS3, JavaScript, TypeScript, Bootstrap, React, estándares W3C y SEO',
    },
  },
  {
    name: 'Software Engineering and Business Model',
    topics: {
      pt: 'Scrum, levantamento de requisitos, ROI e custo de projeto',
      en: 'Scrum, requirements gathering, ROI and project costing',
      es: 'Scrum, levantamiento de requisitos, ROI y costo de proyecto',
    },
  },
  {
    name: 'Formação Social e Sustentabilidade',
    topics: {
      pt: 'Soluções voltadas à sustentabilidade e à convivência com as diferenças sociais e culturais',
      en: 'Solutions focused on sustainability and on living with social and cultural differences',
      es: 'Soluciones orientadas a la sostenibilidad y a la convivencia con las diferencias sociales y culturales',
    },
  },
];
