import { useState } from 'react'

import { IRecoverAccountView, TRecoverAccountViewType } from '@/lib/types'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { SendVerificationCode } from './SendVerificationCode'
import { SendNewPassword } from './SendNewPassword'
import { SendEmail } from './SendEmail'

export const FormRecoverAccount = () => {
  const [recoverAccountView, setRecoverAccountView] = useState<IRecoverAccountView>({ type: 'SEND_EMAIL' })

  const setRecoverAccountViewType = (type: TRecoverAccountViewType) => {
    setRecoverAccountView({ type })
  }

  if (recoverAccountView.type === 'SEND_EMAIL') {
    return (
      <Card className='max-w-md w-full -mt-20 rounded-md p-6 backdrop-blur-sm'>
        <CardHeader className='pb-2'>
          <img
            src='/images/logo.png'
            alt='logo'
            className='mb-4 h-20 mx-auto'
          />

          <CardTitle>Recuperar Cuenta</CardTitle>
          <CardDescription>Enviaremos un codigo de verificacion a tu correo.</CardDescription>
        </CardHeader>

        <CardContent>
          <SendEmail setRecoverAccountViewType={setRecoverAccountViewType} />
        </CardContent>
      </Card>
    )
  }

  if (recoverAccountView.type === 'CODE_PIN') {
    return (
      <Card className='max-w-md w-full -mt-20 rounded-md p-6 backdrop-blur-sm'>
        <CardHeader className='pb-2'>
          <img
            src='/images/logo.png'
            alt='logo'
            className='mb-4 h-20 mx-auto'
          />

          <CardTitle>Codigo de Verificación</CardTitle>
          <CardDescription>Ingrese el codigo que recibió via correo electrónico</CardDescription>
        </CardHeader>

        <CardContent>
          <SendVerificationCode setRecoverAccountViewType={setRecoverAccountViewType} />
        </CardContent>
      </Card>
    )
  }

  if (recoverAccountView.type === 'SET_NEW_PASSWORD') {
    return (
      <Card className='max-w-md w-full -mt-20 rounded-md p-6 backdrop-blur-sm'>
        <CardHeader className='pb-2'>
          <img
            src='/images/logo.png'
            alt='logo'
            className='mb-4 h-20 mx-auto'
          />

          <CardTitle>Nueva Contraseña</CardTitle>
          <CardDescription>Ingrese su nueva contraseña</CardDescription>
        </CardHeader>

        <CardContent>
          <SendNewPassword setRecoverAccountViewType={setRecoverAccountViewType} />
        </CardContent>
      </Card>
    )
  }

  return (
    <div>
      Default
    </div>
  )
}
