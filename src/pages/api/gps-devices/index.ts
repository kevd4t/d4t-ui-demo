import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiGpsDevices = (req: NextApiRequest, res: NextApiResponse) => {
  const gpsDevices = getFakeData('GPS_DEVICES')

  return res.status(200).json({
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: gpsDevices
  })
}

export default handleApiGpsDevices
