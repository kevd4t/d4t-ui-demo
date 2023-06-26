export const handleFetchUrlUsers = ({ pageIndex, pageSize, search, filters }) => {
  const status = (filters?.status?.length) ? filters?.status : null
  const role = (filters?.role?.length) ? filters?.role : null

  const filterStatus = status ? `&status=${status}` : ''
  const filterRoles = role ? `&role=${role}` : ''
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/users?page=${pageIndex}&limit=${pageSize}${filterRoles}${filterStatus}${searchText}`

  return url
}
