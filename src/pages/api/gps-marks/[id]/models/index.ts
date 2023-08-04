import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'
import { IGPSMark } from '@/lib/types'

const handleApiGpsMarks = (req: NextApiRequest, res: NextApiResponse) => {
  const gpsMarks: IGPSMark[] = getFakeData('GPS_MARKS')
  const gpsMarkId = req?.query?.id

  const gpsMarksFinded = gpsMarks.find(gpsMark => gpsMark.id.toString() === gpsMarkId)

  return res.status(200).json({
    code: 'GPM45034',
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: gpsMarksFinded.gpsModels
  })
}

export default handleApiGpsMarks
