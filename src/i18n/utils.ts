import { ui, links, defaultLang, projectLinks } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function buildLinks(lang: keyof typeof links) {
  return function t(key: keyof typeof links[typeof defaultLang]) {
    return links[lang][key] || links[defaultLang][key];
  }
}

export function buildLinksProject(lang: keyof typeof projectLinks) {
  return function t(key: keyof typeof projectLinks[typeof defaultLang]) {
    return projectLinks[lang][key] || projectLinks[defaultLang][key];
  }
}

