import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiRoutes = (req: NextApiRequest, res: NextApiResponse) => {
  const routes = getFakeData('ROUTES')

  return res.status(200).json({
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: routes
  })
}

export default handleApiRoutes
