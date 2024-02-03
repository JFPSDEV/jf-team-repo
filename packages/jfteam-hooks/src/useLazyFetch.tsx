import { useState } from 'react';

import { fetcher, type HttpMethod } from '@jfteam/utils';

export function useLazyFetch<TResult, TPayload>(
  url: string,
  method: HttpMethod = 'GET'
): [
  (payload?: TPayload | Record<string, any>) => Promise<void>,
  { loading: boolean; error: unknown; data: TResult | null }
] {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<TResult | null>(null);

  const fetchData = async (payload?: TPayload | Record<string, any>) => {
    setLoading(true);
    try {
      const result: TResult = await fetcher<TResult, TPayload>(
        url,
        method,
        payload
      );
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, { loading, error, data }];
}
