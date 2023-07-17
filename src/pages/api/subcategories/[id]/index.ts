import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'
import { ICategoryWithSubCategories } from '@/lib/types'

const handleApiGpsDevices = (req: NextApiRequest, res: NextApiResponse) => {
  const categories: ICategoryWithSubCategories[] = getFakeData('CATEGORIES')
  const categoryFinded: ICategoryWithSubCategories = categories.find(category => category.id.toString() === req?.query?.id)

  return res.status(200).json({
    code: 'GPD4651',
    results: {
      id: req.query.id,
      title: categoryFinded.title,
      isActive: categoryFinded.isActive,
      description: categoryFinded.description,
      subcategories: categoryFinded.subcategories
    }
  })
}

export default handleApiGpsDevices
