import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiStationByID = (req: NextApiRequest, res: NextApiResponse) => {
  const stations = getFakeData('STATIONS')
  const stationsFinded = stations.find(station => station.id.toString() === req.query.id)

  if (!stationsFinded) {
    return res.status(404).json({
      code: 'ST404',
      results: null
    })
  }

  return res.status(200).json({
    code: 'ST0001',
    results: stationsFinded
  })
}

export default handleApiStationByID
