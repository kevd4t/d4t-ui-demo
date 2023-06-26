export const handleFetchUrlGpsDevices = ({ pageIndex, pageSize, search, filters }) => {
  const status = (filters?.status?.length) ? filters?.status : null

  const filterStatus = status ? `&status=${status}` : ''
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/gps-devices?page=${pageIndex}&limit=${pageSize}${searchText}${filterStatus}`

  return url
}
