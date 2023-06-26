/* eslint-disable no-undef */
export async function fetcher<JSON = any> (input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init)
  if (!res.ok) throw new Error(res.statusText)

  return res.json() as Promise<JSON>
}
