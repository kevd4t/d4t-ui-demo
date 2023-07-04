import { NextApiRequest, NextApiResponse } from 'next'

const handleApiRecoverAccountSetNewPassword = async (req: NextApiRequest, res: NextApiResponse) => {
  const { password, confirmPassword } = JSON.parse(req.body)

  if (!password || !confirmPassword) {
    return res.status(402).json({
      code: 'RVA0001',
      results: {
        message: 'Campos Requeridos'
      }
    })
  }

  if (password !== confirmPassword) {
    return res.status(402).json({
      code: 'RVA0001',
      results: {
        message: 'Las contraseñas no coinciden'
      }
    })
  }

  return res.status(200).json({
    code: 'RVA0001',
    results: {
      message: 'Contraseña Actualizada'
    }
  })
}

export default handleApiRecoverAccountSetNewPassword
