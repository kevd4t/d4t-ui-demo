import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiUserGroups = (req: NextApiRequest, res: NextApiResponse) => {
  const userGroups = getFakeData('USER_GROUPS')

  return res.status(200).json({
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: userGroups
  })
}

export default handleApiUserGroups
