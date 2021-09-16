export const endpointUrl = (path: string) => {
  let baseURL = 'http://localhost:8110/PenguinStats'
  if (process.env.NODE_ENV === 'production') baseURL = 'https://penguin-stats.io/PenguinStats'

  return baseURL + path
}