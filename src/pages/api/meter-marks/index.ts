import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiGpsMarks = (req: NextApiRequest, res: NextApiResponse) => {
  const meterMarks = getFakeData('METER_MARKS')

  return res.status(200).json({
    code: '0001',
    results: meterMarks
  })
}

export default handleApiGpsMarks
