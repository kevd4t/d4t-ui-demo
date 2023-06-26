import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'
import { IFleet } from '@/lib/types'

const handleApiFleets = (req: NextApiRequest, res: NextApiResponse) => {
  const fleets: IFleet[] = getFakeData('FLEETS')

  setTimeout(() => {
    return res.status(200).json({
      info: {
        nextPage: 2,
        prevPage: 3
      },
      results: fleets
    })
  }, 3000)
}

export default handleApiFleets
