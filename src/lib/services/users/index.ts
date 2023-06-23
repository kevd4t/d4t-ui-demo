import { fetcher } from '@/lib/utils/fetcher'

export const fetchUsers = async ({ queryKey }) => {
  const { pageIndex = 1, pageSize, search, filters } = queryKey[1]

  const filterStatus = filters?.status && (filters?.status.length > 0) ? `&status=${filters?.status}` : ''
  const filterRoles = filters?.role && (filters?.role.length > 0) ? `&role=${filters?.role}` : ''
  const searchText = search ? `&search=${search}` : ''

  const data = await fetcher(`/api/users?page=${pageIndex}&limit=${pageSize}${filterRoles}${filterStatus}${searchText}`)
  return data
}
