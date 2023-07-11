import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockUserById = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    code: 'US0943',
    results: {
      message: `Usuario ${req.query.id} Bloqueado`
    }
  })
}

export default handleApiBlockUserById
