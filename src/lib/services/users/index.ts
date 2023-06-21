import { fetcher } from '@/lib/utils/fetcher'

// export const fetchUsers = async (page = 1, rol = '*', status = '*', search = null) => {
export const fetchUsers = async ({ queryKey }) => {
  const [, { pageIndex, search, rol, status }] = queryKey

  const data = await fetcher(`/api/users?page=${pageIndex}&rol=${rol}&status=${status}&search=${search}`)
  return data
}
