import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiCategories = (req: NextApiRequest, res: NextApiResponse) => {
  const stations = getFakeData('STATIONS')

  setTimeout(() => {
    return res.status(200).json({
      info: {
        nextPage: 2,
        prevPage: null
      },
      results: stations
    })
  }, 3000)
}

export default handleApiCategories
