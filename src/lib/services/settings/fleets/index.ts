export const handleFetchUrlFleets = ({ pageIndex, pageSize, search }) => {
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/status-type?page=${pageIndex}&limit=${pageSize}${searchText}`

  return url
}

export const handleFetchUrlTruckByFleetId = ({ pageIndex, pageSize, search, fleetId }) => {
  const searchText = search ? `&search=${search}` : ''

  const url = `/api/fleets/${fleetId}/trucks?page=${pageIndex}&limit=${pageSize}${searchText}`

  return url
}
