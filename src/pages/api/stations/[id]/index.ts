import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiStationByID = (req: NextApiRequest, res: NextApiResponse) => {
  const stations = getFakeData('STATIONS')

  return res.status(200).json({
    id: req.query.id,
    title: stations[0].title,
    description: stations[0].description,
    isActive: stations[0].isActive
  })
}

export default handleApiStationByID
