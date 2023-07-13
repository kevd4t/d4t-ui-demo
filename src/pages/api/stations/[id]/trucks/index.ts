import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiTrucksByStationId = (req: NextApiRequest, res: NextApiResponse) => {
  const trucks = getFakeData('TRUCKS')

  return res.status(200).json({
    code: 'T04534',
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: trucks
  })
}

export default handleApiTrucksByStationId
