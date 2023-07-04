import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'sonner'

import { TSetRecoverAccountViewType } from '@/lib/types'

import { Input } from '@/components/common/inputs/Input'
import { Button } from '@/components/ui'
import { useRouter } from 'next/router'

interface IDataNewPassword {
  password: string
  confirmPassword: string
}

export const SendNewPassword = ({ setRecoverAccountViewType }: { setRecoverAccountViewType: TSetRecoverAccountViewType }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IDataNewPassword>()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async ({ password, confirmPassword }: IDataNewPassword) => {
    setIsLoading(true)

    if (password !== confirmPassword) {
      toast.error('Las Contraseñas no Conciden')
      setIsLoading(false)
      return
    }

    setTimeout(async () => {
      const res = await fetch('/api/recover-account/password', {
        method: 'POST',
        body: JSON.stringify({ password, confirmPassword })
      })

      if (!res.ok) {
        toast.error('Ha ocurrido un error')
        setIsLoading(false)
        return
      }

      const data = await res.json()

      toast.success(data.results.message)

      setIsLoading(false)
      router.push('/iniciar-sesion')
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-3'>
      <Input
        id='password'
        type='password'
        register={register}
        label='Contraseña'
        placeholder='Ingrese Contraseña'
        messageErrors={errors}
        inputErrors={{ required: { value: true, message: 'Requerido' } }}
        tabIndex={1}
      />

      <Input
        id='confirmPassword'
        type='password'
        register={register}
        label='Confirmación de Contraseña'
        placeholder='Confirme Contraseña'
        messageErrors={errors}
        inputErrors={{ required: { value: true, message: 'Requerido' } }}
        tabIndex={2}
      />

      <Button type='submit' tabIndex={3} isLoading={isLoading} disabled={isLoading}>
        Actualizar Contraseña
      </Button>
    </form>
  )
}
