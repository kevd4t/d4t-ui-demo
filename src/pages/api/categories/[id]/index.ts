import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiCategoryByID = (req: NextApiRequest, res: NextApiResponse) => {
  const categories = getFakeData('CATEGORIES')

  return res.status(200).json({
    id: req.query.id,
    title: categories[0].title,
    description: categories[0].description,
    isActive: categories[0].isActive
  })
}

export default handleApiCategoryByID
