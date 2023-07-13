import { useRouter } from 'next/router'

import type { IFetchData, IUserDetail, ReactElement } from '@/lib/types'
import { useFetch } from '@/lib/hooks/useFetch'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'

const { ROUTES } = siteConfig

const EditUserPage = () => {
  const router = useRouter()
  const { error, isLoading } = useFetch<IFetchData<IUserDetail>>(`/api/stations/${router.query.id}`)

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
      <HeaderPage allowGoBack title={`Editar Estación ${router.query.id}`} />
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
