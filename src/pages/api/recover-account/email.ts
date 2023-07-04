import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

import { codeVerificationEmailTempalte } from '@/lib/email-templates/send-code.template'
import { APP_CONFIG } from '@/config'

const handleApiStatusType = async (req: NextApiRequest, res: NextApiResponse) => {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const email = JSON.parse(req.body)

  if (!email) {
    return res.status(404).json({
      code: 'RVA0001',
      results: {
        message: 'Correo Electronico Requerido'
      }
    })
  }

  const resendResult = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'k.blanco@d4t.tech',
    subject: 'Codigo de Verificación',
    html: codeVerificationEmailTempalte({ code: APP_CONFIG.DUMMY_DATA.RECOVER_ACCOUNT_VERIFICATION_CODE.toString() })
  })

  return res.status(200).json({
    code: 'RVA0001',
    results: {
      message: `Correo ${resendResult.id} enviado exitosamente`
    }
  })
}

export default handleApiStatusType
