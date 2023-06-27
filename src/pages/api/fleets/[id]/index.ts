import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiFleetById = (req: NextApiRequest, res: NextApiResponse) => {
  const fleets = getFakeData('FLEETS')

  return res.status(200).json({
    id: req.query.id,
    title: fleets[0].title,
    description: fleets[0].description,
    isActive: fleets[0].isActive
  })
}

export default handleApiFleetById
