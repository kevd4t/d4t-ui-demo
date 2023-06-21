import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiUsers = (req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    const users = getFakeData('USERS')
    return res.status(200).json({
      info: {
        pageCount: 55,
        totalItems: 953,
        totalPages: 30,
        currentPage: 1,
        nextPage: 2,
        prevPage: null
      },
      results: users
    })
  }, 3000)
}

export default handleApiUsers
