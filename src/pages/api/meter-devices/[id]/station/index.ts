import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'
import { IMeterDevice } from '@/lib/types'

const handleApiStationByMeterDeviceId = (req: NextApiRequest, res: NextApiResponse) => {
  const meterDevices: IMeterDevice[] = getFakeData('METER_DEVICES')

  return res.status(200).json({
    conde: 'MD653',
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: meterDevices[0]?.station
  })
}

export default handleApiStationByMeterDeviceId
