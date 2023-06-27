import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiGpsMarks = (req: NextApiRequest, res: NextApiResponse) => {
  const gpsMarks = getFakeData('GPS_MARKS')

  return res.status(200).json({
    id: req.query.id,
    title: gpsMarks[0].title,
    description: gpsMarks[0].description,
    isActive: gpsMarks[0].isActive
  })
}

export default handleApiGpsMarks
