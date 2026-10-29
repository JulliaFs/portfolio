import pt from './pt.json';
import en from './en.json';
import es from './es.json';

export const langs = ['pt', 'en', 'es'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'pt';
export const langNames: Record<Lang, string> = { pt: 'PT', en: 'EN', es: 'ES' };
export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };

const dict = { pt, en, es } as const;

/** Busca "a.b.c" no idioma; se faltar, cai para o português. */
export function t(lang: Lang, key: string): string {
  const find = (l: Lang) => key.split('.').reduce<any>((o, k) => o?.[k], dict[l]);
  const value = find(lang) ?? find(defaultLang);
  if (typeof value !== 'string') throw new Error(`Chave de tradução ausente: ${key}`);
  return value;
}

/** Prefixa o `base` do Astro (no GitHub Pages o site fica em /portfolio). */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const withBase = (path: string) => (path.startsWith('/') ? `${base}${path}` : path);

const projectSegment: Record<Lang, string> = { pt: 'projetos', en: 'projects', es: 'proyectos' };
const prefix = (lang: Lang) => base + (lang === defaultLang ? '' : `/${lang}`);

const caseSegment: Record<Lang, string> = { pt: 'casos', en: 'cases', es: 'casos' };
export const casePath = (lang: Lang, slug: string) => `${prefix(lang)}/${caseSegment[lang]}/${slug}`;

export const homePath = (lang: Lang) => prefix(lang) || '/';
const sectionBase = (lang: Lang) => (homePath(lang) === '/' ? '' : homePath(lang));
export const projectPath = (lang: Lang, slug: string) => `${prefix(lang)}/${projectSegment[lang]}/${slug}`;
export const sectionPath = (lang: Lang, id: string) => `${sectionBase(lang)}/#${id}`;
