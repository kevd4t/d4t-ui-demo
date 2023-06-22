import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiCategories = (req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    const categories = getFakeData('CATEGORIES')
    return res.status(200).json({
      info: {
        pageCount: 55,
        totalItems: 953,
        totalPages: 30,
        currentPage: 1,
        nextPage: 2,
        prevPage: null
      },
      results: categories
    })
  }, 3000)
}

export default handleApiCategories
