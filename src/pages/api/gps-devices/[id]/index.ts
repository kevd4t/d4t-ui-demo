import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiGpsDevices = (req: NextApiRequest, res: NextApiResponse) => {
  const gpsDevices = getFakeData('GPS_DEVICES')

  return res.status(200).json({
    id: req.query.id,
    title: gpsDevices[0].title,
    description: gpsDevices[0].description,
    isActive: gpsDevices[0].isActive
  })
}

export default handleApiGpsDevices
