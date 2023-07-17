import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockStatusById = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('handleApiBlockStatusTypeById', req?.query?.id)

  return res.status(200).json({
    code: 'ES0943',
    results: {
      message: `Estado ${req.query.id} Bloqueado`
    }
  })
}

export default handleApiBlockStatusById
