import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiGpsDevices = (req: NextApiRequest, res: NextApiResponse) => {
  const gpsDevices = getFakeData('GPS_DEVICES')

  setTimeout(() => {
    return res.status(200).json({
      info: {
        nextPage: 2,
        prevPage: null
      },
      results: gpsDevices
    })
  }, 3000)
}

export default handleApiGpsDevices
