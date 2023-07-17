import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockSubcategoryById = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('handleApiBlockSubcategoryById', req?.query?.id)

  return res.status(200).json({
    code: 'GPSD0943',
    results: {
      message: `Subcategoria ${req.query.id} Bloqueada`
    }
  })
}

export default handleApiBlockSubcategoryById
