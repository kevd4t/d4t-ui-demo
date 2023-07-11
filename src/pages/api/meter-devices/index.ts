import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiGpsDevices = (req: NextApiRequest, res: NextApiResponse) => {
  const meterDevices = getFakeData('METER_DEVICES')

  return res.status(200).json({
    code: '0001',
    info: { prev: null, next: 2 },
    results: meterDevices
  })
}

export default handleApiGpsDevices
