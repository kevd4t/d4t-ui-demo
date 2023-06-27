export const handleFetchUrlCities = ({ pageIndex, pageSize, search }) => {
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/cities?page=${pageIndex}&limit=${pageSize}${searchText}`

  return url
}
