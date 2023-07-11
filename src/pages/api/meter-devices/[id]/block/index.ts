import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockMeterDeviceById = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('handleApiBlockMeterDeviceById', req?.query?.id)

  return res.status(200).json({
    code: 'US0943',
    results: {
      message: `Medidor ${req.query.id} Bloqueado`
    }
  })
}

export default handleApiBlockMeterDeviceById
