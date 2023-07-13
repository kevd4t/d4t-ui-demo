import { NextApiRequest, NextApiResponse } from 'next'

const handleApiBlockGPSDeviceById = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('handleApiBlockGPSDeviceById', req?.query?.id)

  return res.status(200).json({
    code: 'GPSD0943',
    results: {
      message: `Dispositivo ${req.query.id} Bloqueado`
    }
  })
}

export default handleApiBlockGPSDeviceById
