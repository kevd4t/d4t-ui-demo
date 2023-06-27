export const handleFetchUrlRoutes = ({ pageIndex, pageSize, search, filters }) => {
  const status = (filters?.status?.length) ? filters?.status : null
  const city = (filters?.city) ? filters?.city : null

  const filterStatus = status ? `&status=${status}` : ''
  const searchText = search ? `&search=${search}` : ''
  const filterCity = city ? `&city=${city}` : ''

  const url = `/api/routes?page=${pageIndex}&limit=${pageSize}${searchText}${filterCity}${filterStatus}`

  return url
}
