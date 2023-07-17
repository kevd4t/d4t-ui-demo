import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'

const handleApiStates = (req: NextApiRequest, res: NextApiResponse) => {
  const states = getFakeData('STATES')

  return res.status(200).json({
    code: 'ST5435',
    info: {
      nextPage: 2,
      prevPage: null
    },
    results: states
  })
}

export default handleApiStates
