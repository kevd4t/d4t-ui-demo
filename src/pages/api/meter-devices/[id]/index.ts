import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'
import { IMeterDevice } from '@/lib/types'

const handleApiMeterDevices = (req: NextApiRequest, res: NextApiResponse) => {
  const meterDevices: IMeterDevice[] = getFakeData('METER_DEVICES')

  return res.status(200).json({
    code: '0001',
    results: {
      id: req.query.id,
      serial: meterDevices[0].serial,
      images: meterDevices[0].images,
      meterModel: meterDevices[0].meterModel,
      meterUnit: meterDevices[0].meterUnit,
      station: meterDevices[0].station,
      status: meterDevices[0].status,
      type: meterDevices[0].type
    }
  })
}

export default handleApiMeterDevices
