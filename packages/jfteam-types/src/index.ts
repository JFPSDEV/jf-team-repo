import { ELocale } from './locale';

export type TCallBacks = Record<string, () => void>;

export interface TGameParams {
  colorScheme: 'light' | 'dark' | 'auto';
  locale: ELocale;
}

export * from './email-form';

export * from './auth-email';
export * from './locale';
export * from './theme';
