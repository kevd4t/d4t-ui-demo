import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiFleetById = (req: NextApiRequest, res: NextApiResponse) => {
  const fleets = getFakeData('FLEETS')
  const fleetFinded = fleets.find(fleet => fleet.id.toString() === req.query.id)

  return res.status(200).json({
    code: '0001',
    results: fleetFinded
  })
}

export default handleApiFleetById
