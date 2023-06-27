import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiCityById = (req: NextApiRequest, res: NextApiResponse) => {
  const cities = getFakeData('CITIES')

  return res.status(200).json({
    id: req.query.id,
    title: cities[0].title,
    description: cities[0].description,
    isActive: cities[0].isActive
  })
}

export default handleApiCityById
