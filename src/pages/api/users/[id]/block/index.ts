import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockUserById = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('handleApiBlockUserById', req?.query?.id)

  return res.status(200).json({
    code: 'US0943',
    results: {
      message: `Usuario ${req.query.id} Bloqueado`
    }
  })
}

export default handleApiBlockUserById
