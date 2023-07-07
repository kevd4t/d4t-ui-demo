import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'
import { IMeterModel } from '@/lib/types'

const handleApiMeterModels = (req: NextApiRequest, res: NextApiResponse) => {
  const meterMark: IMeterModel[] = getFakeData('METER_MODELS')

  return res.status(200).json({
    id: req.query.id,
    title: meterMark[0].title,
    description: meterMark[0].description,
    isActive: meterMark[0].isActive,
    image: meterMark[0].image,
    type: meterMark[0].type
  })
}

export default handleApiMeterModels
