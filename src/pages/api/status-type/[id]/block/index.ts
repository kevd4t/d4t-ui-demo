import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockStatusTypeById = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('handleApiBlockStatusTypeById', req?.query?.id)

  return res.status(200).json({
    code: 'GPSD0943',
    results: {
      message: `Tipo de estado ${req.query.id} Bloqueado`
    }
  })
}

export default handleApiBlockStatusTypeById
