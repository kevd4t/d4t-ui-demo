import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiMeterModels = (req: NextApiRequest, res: NextApiResponse) => {
  const meterModels = getFakeData('METER_MODELS')

  return res.status(200).json({
    code: '0001',
    results: meterModels
  })
}

export default handleApiMeterModels
