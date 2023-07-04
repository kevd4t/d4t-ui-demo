import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'sonner'

import { TSetRecoverAccountViewType } from '@/lib/types'

import { Input } from '@/components/common/inputs/Input'
import { Button } from '@/components/ui'

interface IDataRecoverAccount {
  email: string
}

export const SendEmail = ({ setRecoverAccountViewType }: { setRecoverAccountViewType: TSetRecoverAccountViewType }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IDataRecoverAccount>()
  // const { data, error, fetcher } = useFetch<IFetchData>()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async ({ email }: IDataRecoverAccount) => {
    setIsLoading(true)

    setTimeout(async () => {
      const res = await fetch('/api/recover-account/email', {
        method: 'POST',
        body: JSON.stringify({ email })
      })

      if (!res) {
        toast.error('Ha ocurrido un error')
        setIsLoading(false)
        return
      }

      const data = await res.json()

      console.log('SendEmail data', data)

      setIsLoading(false)
      setRecoverAccountViewType('CODE_PIN')
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-3'>
      <Input
        id='email'
        type='email'
        register={register}
        label='Correo Electronico'
        placeholder='correo@ejemplo.com'
        messageErrors={errors}
        inputErrors={{ required: { value: true, message: 'Correo Requerido' } }}
        tabIndex={1}
      />

      <Button type='submit' tabIndex={2} isLoading={isLoading} disabled={isLoading}>
        Enviar Correo
      </Button>
    </form>
  )
}
