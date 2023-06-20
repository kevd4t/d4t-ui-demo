/* eslint-disable no-undef */
export async function fetcher<JSON = any> (input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json() as Promise<JSON>
}
