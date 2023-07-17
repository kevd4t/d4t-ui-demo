import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiCities = (req: NextApiRequest, res: NextApiResponse) => {
  const cities = getFakeData('CITIES')

  return res.status(200).json({
    code: 'CT5436',
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: cities
  })
}

export default handleApiCities
