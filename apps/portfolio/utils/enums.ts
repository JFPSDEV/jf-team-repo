export enum EVartiant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  QUATERNARY = 'quaternary',
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
  FEEDBACK = 'feedback',
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

export enum ESpoiler {
  READ_MORE_FR = '...Lire plus',
  READ_LESS_FR = 'Lire moin',
  READ_MORE_EN = '...Reade more',
  READ_LESS_EN = 'Read less',
}

export const spoiler = {
  [ELocale.FR]: {
    more: ESpoiler.READ_MORE_FR,
    less: ESpoiler.READ_LESS_FR,
  },
  [ELocale.EN]: {
    more: ESpoiler.READ_MORE_EN,
    less: ESpoiler.READ_LESS_EN,
  },
};
