export const handleFetchUrlGpsMarks = ({ pageIndex, pageSize, search }) => {
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/status-type?page=${pageIndex}&limit=${pageSize}${searchText}`

  return url
}

export const handleFetchUrlGpsModelByGpsMarkId = ({ pageIndex, pageSize, search, gpsMarkId }) => {
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/gps-marks/${gpsMarkId}/gps-models?page=${pageIndex}&limit=${pageSize}${searchText}`

  return url
}
