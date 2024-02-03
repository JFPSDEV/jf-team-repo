export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'OPTIONS'
  | 'HEAD';

export async function fetcher<TResult, TPayload>(
  url: string,
  method: HttpMethod = 'GET',
  body?: TPayload | Record<string, any>
): Promise<TResult> {
  const headers = {
    'Content-Type': 'application/json'
  };

  const options: RequestInit = {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) })
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Erreur lors de la requête: ${response.status} - ${response.statusText}`
      );
    }

    const responseData: TResult = await response.json();
    return responseData;
  } catch (error) {
    console.error('Erreur lors de la requête:', error);
    throw error;
  }
}
