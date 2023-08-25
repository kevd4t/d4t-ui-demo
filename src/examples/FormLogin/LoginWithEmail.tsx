import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'

import { ILoginWithEmail, LOGIN_WITH_EMAIL, loginSchema } from '../../lib/schemas/login.schema'
import { UserAuthenticated } from '../../lib/types'
import { useFetch } from '../../lib/hooks'

import { Button, Form, Input } from '../../components'
import { z } from "zod"

export const LoginWithEmail = () => {
  const form = useForm<ILoginWithEmail>({ resolver: zodResolver(LOGIN_WITH_EMAIL) })
  const { data, loading, error, fetcher } = useFetch<UserAuthenticated>()

  const onSubmit = async ({ email, password }: ILoginWithEmail) => {
    const loginData: z.infer<typeof loginSchema> = {
      identifier: email,
      type: 'EMAIL',
      password
    }

    const validation = loginSchema.safeParse(loginData)

    // await fetcher(await login(data))

    if (!validation.success) {
      console.error('Campos Invalidos')
      return
    }

    console.log(loginData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-full'>
        <h5 className='font-black text-2xl text-left w-full'>
          Iniciar Sesion
        </h5>

        <Input
          id='email'
          type='email'
          tabIndex={1}
          label='Correo Electrónico'
          disabled={loading}
          placeholder='user@email.com'
          form={form}
        />

        <Input
          id='password'
          name='password'
          type='password'
          tabIndex={2}
          label='Contraseña'
          placeholder='*******'
          disabled={loading}
          form={form}
        />

        <Button 
          disabled={loading}
          tabIndex={3}
          type='submit'
          className='w-full'
        >
          Iniciar Sesion
        </Button>
    </form>
  </Form>
  )
}
