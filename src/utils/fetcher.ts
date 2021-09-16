export function fetcher<T> (url: string) {
  return fetch(url)
    .then(async (res) => ({
      json: (await res.json()) as T[],
      headers: res.headers
    }))
}