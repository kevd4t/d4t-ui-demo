import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiRoutes = (req: NextApiRequest, res: NextApiResponse) => {
  const routes = getFakeData('ROUTES')

  return res.status(200).json({
    id: req.query.id,
    title: routes[0].title,
    description: routes[0].description,
    isActive: routes[0].isActive
  })
}

export default handleApiRoutes
