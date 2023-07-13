import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'
import { IGPSDevice } from '@/lib/types'

const handleApiGpsDevices = (req: NextApiRequest, res: NextApiResponse) => {
  const gpsDevices: IGPSDevice[] = getFakeData('GPS_DEVICES')

  return res.status(200).json({
    code: 'GPD4651',
    results: {
      id: req.query.id,
      serial: gpsDevices[0].serial,
      status: gpsDevices[0].status,
      gpsMark: gpsDevices[0].gpsMark,
      gpsModel: gpsDevices[0].gpsModel,
      fleet: gpsDevices[0]?.fleet,
      truck: gpsDevices[0]?.truck,
      images: gpsDevices[0].images
    }
  })
}

export default handleApiGpsDevices
