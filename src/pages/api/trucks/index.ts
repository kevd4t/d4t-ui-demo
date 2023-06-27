import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiTrucks = (req: NextApiRequest, res: NextApiResponse) => {
  const trucks = getFakeData('FLEETS')

  return res.status(200).json({
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: trucks
  })
}

export default handleApiTrucks
