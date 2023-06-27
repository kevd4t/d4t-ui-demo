import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiGpsMarks = (req: NextApiRequest, res: NextApiResponse) => {
  const gpsMarks = getFakeData('GPS_MARKS')

  return res.status(200).json({
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: gpsMarks
  })
}

export default handleApiGpsMarks
