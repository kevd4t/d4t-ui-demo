import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiUserById = (req: NextApiRequest, res: NextApiResponse) => {
  const users = getFakeData('USERS')
  const userFinded = users.find(user => user.id.toString() === req.query.id)

  return res.status(200).json({
    code: '0001',
    results: userFinded
  })
}

export default handleApiUserById
