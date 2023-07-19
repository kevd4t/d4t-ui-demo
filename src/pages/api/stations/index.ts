import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiCategories = (req: NextApiRequest, res: NextApiResponse) => {
  const stations = getFakeData('STATIONS')

  return res.status(200).json({
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: [
      ...stations[0],
      ...stations[1],
      ...stations[2],
      ...stations[3],
      ...stations[4]
    ]
  })
}

export default handleApiCategories
