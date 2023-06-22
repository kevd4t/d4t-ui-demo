import { fetcher } from '@/lib/utils/fetcher'

export const fetchStatus = async ({ queryKey }) => {
  const [, { pageIndex, pageSize, search }] = queryKey

  const searchText = search ? `&search=${search}` : ''

  const data = await fetcher(`/api/type-status?page=${pageIndex}&limit=${pageSize}${searchText}`)
  return data
}
