import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockFleetById = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('handleApiBlockUserById', req?.query?.id)

  return res.status(200).json({
    code: 'US0943',
    results: {
      message: `Flota ${req.query.id} Bloqueada`
    }
  })
}

export default handleApiBlockFleetById
