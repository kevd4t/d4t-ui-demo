import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiCategories = (req: NextApiRequest, res: NextApiResponse) => {
  const categories = getFakeData('CATEGORIES')

  return res.status(200).json({
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: categories
  })
}

export default handleApiCategories
