import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockMetermarkById = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    code: 'US0943',
    results: {
      message: `Marca ${req.query.id} Bloqueada`
    }
  })
}

export default handleApiBlockMetermarkById
