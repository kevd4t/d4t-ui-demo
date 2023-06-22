import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiCategories = (req: NextApiRequest, res: NextApiResponse) => {
  const categories = getFakeData('CATEGORIES')

  if (req?.query?.id) {
    return res.status(200).json({
      id: req.query.id,
      title: categories[0].title,
      description: categories[0].description,
      isActive: categories[0].isActive
    })
  }

  setTimeout(() => {
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
