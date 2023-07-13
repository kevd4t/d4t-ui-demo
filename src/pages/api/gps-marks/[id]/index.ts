import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'
import { IGPSMark } from '@/lib/types'

const handleApiGpsMarks = (req: NextApiRequest, res: NextApiResponse) => {
  const gpsMarks: IGPSMark[] = getFakeData('GPS_MARKS')

  return res.status(200).json({
    code: 'GM0346',
    results: {
      id: req.query.id,
      title: gpsMarks[0].title,
      description: gpsMarks[0].description,
      isActive: gpsMarks[0].isActive,
      gpsModels: gpsMarks[0].gpsModels,
      image: gpsMarks[0].image
    }
  })
}

export default handleApiGpsMarks
