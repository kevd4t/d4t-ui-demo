import { fetcher } from '@/lib/utils/fetcher'

export const fetchStatusType = async ({ queryKey }) => {
  const [, { pageIndex, pageSize, search }] = queryKey

  const searchText = search ? `&search=${search}` : ''

  const data = await fetcher(`/api/status-type?page=${pageIndex}&limit=${pageSize}${searchText}`)
  return data
}
