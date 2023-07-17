import { NextApiRequest, NextApiResponse } from 'next'
import { getFakeData } from '@/lib/data'
import { IState } from '@/lib/types'

const handleApiStatesById = (req: NextApiRequest, res: NextApiResponse) => {
  const states: IState[] = getFakeData('STATES')
  const stateFinded: IState = states.find(state => state.id.toString() === req?.query?.id)

  console.log({ stateFinded })

  return res.status(200).json({
    code: 'EST6534',
    info: { prev: null, next: 3 },
    results: {
      id: req.query.id,
      title: stateFinded.title,
      cities: stateFinded.cities
    }
  })
}

export default handleApiStatesById
