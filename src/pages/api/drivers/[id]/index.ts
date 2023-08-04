import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'
import { IDriver } from '@/lib/types'

const handleApiDriverById = (req: NextApiRequest, res: NextApiResponse) => {
  const drivers = getFakeData('DRIVERS')

  console.log('drivers', drivers)
  console.log('query', req?.query)

  const driverFinded: IDriver = drivers.find(driver => driver.id.toString() === req?.query?.id)

  console.log('driverFinded', driverFinded)

  return res.status(200).json({
    info: {
      code: 'DR001',
      message: 'Conductores Exitoso'
    },
    results: driverFinded || null
  })
}

export default handleApiDriverById
