import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'

import type { IFetchData, IUserDetail, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { FormEditUser } from '@/components/page/usuarios/FormEditUser'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const EditUserPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    (async () => {
      setIsLoading(true)

      const res = await fetch(`/api/users/${router.query.id}`)

      if (!res.ok) {
        toast.error('Hubo un Error')
        setError('Hubo un Error')
        setIsLoading(false)
        return
      }

      const data: IFetchData<IUserDetail> = await res.json()
      console.log({ data })
      setUser(data.results)
      setIsLoading(false)
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.id])

  if (error) {
    return (
      <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Hubo un Error</h5>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Cargando...</h5>
      </div>
    )
  }

  return (
    <>
      <HeaderPage allowGoBack title={`Editar Usuario ${router.query.id}`} />
      <FormEditUser user={user} />
    </>
  )
}

EditUserPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.DETAIL.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default EditUserPage
