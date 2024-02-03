import { useState, useEffect } from 'react';

import { fetcher, type HttpMethod } from '@jfteam/utils';

export function useFetch<TResult, TPayload>(
  url: string,
  method: HttpMethod = 'GET',
  payload?: TPayload | Record<string, any>
) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<TResult | null>(null);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, [url, method, payload]);

  return { loading, error, data };
}
