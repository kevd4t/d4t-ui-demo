export const handleFetchUrlTypeStatus = ({ pageIndex, pageSize, search }) => {
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/status-type?page=${pageIndex}&limit=${pageSize}${searchText}`

  return url
}

export const handleFetchUrlStatusByType = ({ pageIndex, pageSize, search, typeStatusId }) => {
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/status-type/${typeStatusId}/status?page=${pageIndex}&limit=${pageSize}${searchText}`

  return url
}
