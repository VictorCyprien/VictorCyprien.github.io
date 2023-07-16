export const languages = {
    en: 'English',
    fr: 'Français',
  };

export const flags = {
  en: '\u{1F1EC}\u{1F1E7}',
  fr: '\u{1F1EB}\u{1F1F7}'
};
  
export const defaultLang = 'fr';

export const ui = {
  en: {
    'home': 'Home',
    'work': 'Work',
    'about': 'About',
  },
  fr: {
    'home': 'Accueil',
    'work': 'Travail',
    'about': 'À propos',
  },
} as const;

export const links = {
  en: {
    'home': '/en',
    'work': '/en/work',
    'about': '/en/about',
  },
  fr: {
    'home': '/',
    'work': '/fr/travail',
    'about': '/fr/a_propos',
  },
}