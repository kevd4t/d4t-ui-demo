import { APP_CONFIG } from '@/config'
import { NextApiRequest, NextApiResponse } from 'next'

const handleApiStatusType = async (req: NextApiRequest, res: NextApiResponse) => {
  const code = JSON.parse(req.body)

  if (!code) {
    return res.status(404).json({
      code: 'error',
      results: {
        message: 'Codigo de verficación requerido'
      }
    })
  }

  if (APP_CONFIG.DUMMY_DATA.RECOVER_ACCOUNT_VERIFICATION_CODE !== 24040) {
    return res.status(402).json({
      code: 'error',
      results: {
        message: 'Codigo de verficación invalido'
      }
    })
  }

  return res.status(200).json({
    code: 'RVA0007',
    results: {
      message: 'Codigo de verificación valido',
      success: true
    }
  })
}

export default handleApiStatusType
