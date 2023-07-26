import { IFetchData, IStation } from '@/lib/types'

export const handleFetchUrlStations = ({ pageIndex, pageSize, search, filters }) => {
  const status = (filters?.status?.length) ? filters?.status : null
  const city = (filters?.city) ? filters?.city : null

  const filterStatus = status ? `&status=${status}` : ''
  const searchText = search ? `&search=${search}` : ''
  const filterCity = city ? `&city=${city}` : ''

  const url = `/api/stations?page=${pageIndex}&limit=${pageSize}${searchText}${filterCity}${filterStatus}`

  return url
}

export const getStationByID = async ({ id }): Promise<IFetchData<IStation>> => {
  const res = await fetch(`/api/stations/${id}`)
  const data = await res.json()

  return data
}
