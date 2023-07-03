import { useRouter } from 'next/router'

import type { IFetchData, IUserDetail, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { DetailUser } from '@/components/page/usuarios/DetailUser'
import { useFetch } from '@/lib/hooks/useFetch'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'

const { ROUTES } = siteConfig

const DetailUserPage = () => {
  const router = useRouter()
  const { data, error, isLoading } = useFetch<IFetchData<IUserDetail>>(`/api/users/${router.query.id}`)

  if (error) {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Hubo un Error</h5>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h5 className='font-bold text-4xl'>Cargando...</h5>
      </div>
    )
  }

  return (
    <>
      <HeaderPage title={`Detalle de Usuario ${router.query.id}`} />

      <DetailUser user={data.results} />
    </>
  )
}

DetailUserPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.DETAIL.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default DetailUserPage
