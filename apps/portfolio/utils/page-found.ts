import { redirect, notFound } from 'next/navigation';
import { ELocale } from './enums';

export const pageFound = (locale: string) => {
  const found = Object.values(ELocale).find((current) => current === locale);

  return !!found;
};
