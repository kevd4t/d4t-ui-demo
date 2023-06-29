import { Input } from '@/components/common/inputs/Input'
import { Spinner } from '@/components/common/loaders/Spinner'
import { Button } from '@/components/ui'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface IDataSignIn {
  email: string
  password: string
}

export const FormSignIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<IDataSignIn>()
  const router = useRouter()

  const onSubmit = ({ email, password }: IDataSignIn) => {
    setIsLoading(true)

    if (email === 'admin@gmail.com' && password === '123456') {
      setTimeout(() => {
        toast.success('Sesion Iniciada')
        setIsLoading(false)
        router.push('/dashboard')
      }, 1000)
    } else {
      setTimeout(() => {
        toast.error('Correo o Contraseña Invalidos')
        setIsLoading(false)
      }, 2000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-3'>
      <Input
        id='email'
        type='email'
        register={register}
        label='Correo Electronico'
        placeholder='Ingrese Correo Electronico'
        messageErrors={errors}
        inputErrors={{ required: { value: true, message: 'Correo Requerido' } }}
        tabIndex={1}
      />

      <Input
        id='password'
        type='password'
        register={register}
        label='Contraseña'
        placeholder='Ingrese Contraseña'
        messageErrors={errors}
        inputErrors={{ required: { value: true, message: 'Contraseña Requerida' } }}
        tabIndex={2}
      />

      <Button type='submit' tabIndex={3} disabled={isLoading}>
        {
          isLoading
            ? (<Spinner className='border-white' />)
            : ' Iniciar Sesion'
        }
      </Button>
    </form>
  )
}
