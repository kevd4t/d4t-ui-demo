import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockCategoryById = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('handleApiBlockGPSDeviceById', req?.query?.id)

  return res.status(200).json({
    code: 'GPSD0943',
    results: {
      message: `Categoria ${req.query.id} Bloqueada`
    }
  })
}

export default handleApiBlockCategoryById
