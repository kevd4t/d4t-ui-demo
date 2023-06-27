import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiStatusType = (req: NextApiRequest, res: NextApiResponse) => {
  const statusType = getFakeData('STATUS_TYPE')

  return res.status(200).json({
    info: {
      currentPage: 1,
      nextPage: 2,
      prevPage: null
    },
    results: statusType
  })
}

export default handleApiStatusType
