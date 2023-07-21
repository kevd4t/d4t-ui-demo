import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockStationById = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('handleApiBlockStationById', req?.query?.id)

  return res.status(200).json({
    code: 'GPSD0943',
    results: {
      message: `Estación ${req.query.id} Bloqueada`
    }
  })
}

export default handleApiBlockStationById
