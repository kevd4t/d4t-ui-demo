import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiDrivers = (req: NextApiRequest, res: NextApiResponse) => {
  const drivers = getFakeData('DRIVERS')

  return res.status(200).json({
    info: {
      code: 'DR001',
      message: 'Conductores Exitoso'
    },
    pagination: {
      count: 24,
      page: 2,
      next: 2,
      prev: null
    },
    results: drivers
  })
}

export default handleApiDrivers
