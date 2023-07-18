import { ui, titleHtml, links, defaultLang, projectLinks, aboutMe , sendMail, footerText } from './ui';

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

export function buildTitleHtml(lang: keyof typeof titleHtml) {
  return function t(key: keyof typeof titleHtml[typeof defaultLang]) {
    return titleHtml[lang][key] || titleHtml[defaultLang][key];
  }
}

export function buildLinks(lang: keyof typeof links) {
  return function t(key: keyof typeof links[typeof defaultLang]) {
    return links[lang][key] || links[defaultLang][key];
  }
}

export function buildAboutMeText(lang: keyof typeof aboutMe) {
  return function t(key: keyof typeof aboutMe[typeof defaultLang]) {
    return aboutMe[lang][key] || aboutMe[defaultLang][key];
  }
}

export function buildLinksProject(lang: keyof typeof projectLinks) {
  return function t(key: keyof typeof projectLinks[typeof defaultLang]) {
    return projectLinks[lang][key] || projectLinks[defaultLang][key];
  }
}

export function buildEmailText(lang: keyof typeof sendMail) {
  return function t(key: keyof typeof sendMail[typeof defaultLang]) {
    return sendMail[lang][key] || sendMail[defaultLang][key];
  }
}


export function buildFooterText(lang: keyof typeof footerText) {
  return function t(key: keyof typeof footerText[typeof defaultLang]) {
    return footerText[lang][key] || footerText[defaultLang][key];
  }
}
