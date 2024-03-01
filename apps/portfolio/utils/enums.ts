export enum ESpoiler {
  READ_MORE = '...Lire plus',
  READ_LESS = 'Lire moin',
}

export enum EVartiant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export type TVariant = keyof typeof EVartiant;

export enum ELocale {
  FR = 'fr',
  EN = 'en',
}

export enum ENavlink {
  CV = 'cv',
  CONTACT = 'contact',
  PROJECT = 'project',
}

export type TLocale = keyof typeof ELocale;

export enum EPageProps {
  page = 'page',
  locale = 'locale',
  pageName = 'pageName',
}

export interface PageProps {
  [EPageProps.locale]: ELocale;
  [EPageProps.pageName]: string;
}

export enum EPageId {
  CV = 'cv',
  HOME = 'home',
}
