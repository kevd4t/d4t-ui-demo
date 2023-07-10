import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiAllTrucksByFleetId = (req: NextApiRequest, res: NextApiResponse) => {
  const trucks = getFakeData('TRUCKS')

  return res.status(200).json({
    code: 'UN002',
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: trucks
  })
}

export default handleApiAllTrucksByFleetId
