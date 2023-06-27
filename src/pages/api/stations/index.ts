import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiCategories = (req: NextApiRequest, res: NextApiResponse) => {
  const stations = getFakeData('STATIONS')

  return res.status(200).json({
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: stations
  })
}

export default handleApiCategories
