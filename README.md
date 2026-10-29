# Portfólio

Site pessoal em Astro, com páginas estáticas em português, inglês e espanhol. Ainda não está publicado e não tem repositório no GitHub.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera a pasta dist
```

## Onde mexer

| O quê | Arquivo |
|---|---|
| Cores, fontes, espaços (a identidade visual toda) | `src/styles/tokens.css` |
| Textos da interface em PT, EN e ES | `src/i18n/pt.json`, `en.json`, `es.json` |
| Projetos (texto, stack, links, prints) | `src/data/projects.ts` |
| Nível de cada tecnologia | `src/data/tech.ts` |
| Foto, e-mail, LinkedIn, currículo, frase, sobre | `src/data/profile.ts` |
| Prints e imagens | `public/img/` |

## Marcadores "a preencher"

Tudo o que depende dela aparece em amarelo (`a preencher`) até ser informado. Para achar o que falta, procure `null` em `profile.ts` e `tech.ts`.

## Honestidade técnica

O nível de cada tecnologia é definido por ela (`daily`, `projects`, `studying`). Enquanto estiver `null`, o site não afirma nível nenhum.

## Idiomas

Os textos longos dos projetos existem só em português. As páginas em inglês e espanhol mostram esse texto com um aviso de "tradução em revisão" até os textos serem aprovados. Para traduzir, adicione `en` e `es` ao objeto `text` do projeto em `projects.ts`.

## Trocar o visual

Edite só `tokens.css` (e a linha das fontes em `src/layouts/Base.astro`). Os componentes usam apenas as variáveis.

## Publicação (depois)

Vercel com o preset Astro. Quando o domínio existir, preencha `site` em `astro.config.mjs`. O passo a passo de DNS está em `PROPOSTA-V1.md`.
