import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockDriverById = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    code: 'DR00543',
    results: {
      message: `Chofer ${req.query.id} Bloqueado`
    }
  })
}

export default handleApiBlockDriverById
