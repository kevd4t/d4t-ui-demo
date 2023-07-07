import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'
import { IMeterMark } from '@/lib/types'

const handleApiGpsMarks = (req: NextApiRequest, res: NextApiResponse) => {
  const meterMark: IMeterMark[] = getFakeData('METER_MARKS')

  return res.status(200).json({
    id: req.query.id,
    title: meterMark[0].title,
    description: meterMark[0].description,
    isActive: meterMark[0].isActive,
    models: meterMark[0].models,
    image: meterMark[0].image
  })
}

export default handleApiGpsMarks
