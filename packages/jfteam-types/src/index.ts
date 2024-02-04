export type TCallBacks = Record<string, () => void>;

export interface TGameParams {
  colorScheme: 'light' | 'dark' | 'auto';
}

export * from './email-form';

export * from './auth-email';
