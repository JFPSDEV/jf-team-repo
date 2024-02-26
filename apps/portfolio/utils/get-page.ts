import { fetcher } from '@jfteam/utils';

import { ELocale } from './enums';

const apiUrl = process?.env?.API_URL;

export async function getPage<TResult>(pageName: string, locale: ELocale): Promise<TResult> {
  const url = `${apiUrl}/${pageName}/${locale}`;
  return fetcher(url);
}
