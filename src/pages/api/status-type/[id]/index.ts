import { NextApiRequest, NextApiResponse } from 'next'
import { IStatusType } from '@/lib/types'
import { getFakeData } from '@/lib/data'

const handleApiGpsDevices = (req: NextApiRequest, res: NextApiResponse) => {
  const statusTypes: IStatusType[] = getFakeData('STATUS_TYPE')
  const statusTypeFinded: IStatusType = statusTypes.find(statusType => statusType.id.toString() === req?.query?.id)

  return res.status(200).json({
    code: 'GPD4651',
    results: {
      id: req.query.id,
      title: statusTypeFinded.title,
      isActive: statusTypeFinded.isActive,
      description: statusTypeFinded.description,
      status: statusTypeFinded.status
    }
  })
}

export default handleApiGpsDevices
