import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiUsers = (req: NextApiRequest, res: NextApiResponse) => {
  const users = getFakeData('USERS')

  return res.status(200).json({
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: users
  })
}

export default handleApiUsers
