import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiStatusType = (req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    const statusType = getFakeData('STATUS_TYPE')
    console.log(statusType)
    return res.status(200).json({
      info: {
        currentPage: 1,
        nextPage: 2,
        prevPage: null
      },
      results: statusType
    })
  }, 3000)
}

export default handleApiStatusType
