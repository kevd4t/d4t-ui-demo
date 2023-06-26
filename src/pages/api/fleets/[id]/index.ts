import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiFleetById = (req: NextApiRequest, res: NextApiResponse) => {
  const categories = getFakeData('FLEETS')

  setTimeout(() => {
    return res.status(200).json({
      id: req.query.id,
      title: categories[0].title,
      description: categories[0].description,
      isActive: categories[0].isActive
    })
  }, 3000)
}

export default handleApiFleetById
