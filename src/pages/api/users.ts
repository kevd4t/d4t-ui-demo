import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiUsers = (req: NextApiRequest, res: NextApiResponse) => {
  console.log('handleApiUsers')
  const users = getFakeData('USERS')
  return res.status(200).json(users)
}

export default handleApiUsers
