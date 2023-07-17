import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'

import { IFetchData, IStatus } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormEditTypeStatus } from '@/components/page/ajustes/estados/FormEditTypeStatus'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const EditTypeStatusSettingsPage = () => {
  const [typeStatus, setTypeStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  const getCategoryDetail = async () => {
    setIsLoading(true)

    const res = await fetch(`/api/status-type/${router.query.id}`)

    if (!res.ok) {
      toast.error('Hubo un Error')
      setError('Hubo un Error-')
      setIsLoading(false)
      return
    }

    const data: IFetchData<IStatus> = await res.json()
    setTypeStatus(data?.results)
    setIsLoading(false)
  }

  useEffect(() => {
    if (router?.query?.id) {
      getCategoryDetail()
    }
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
      <HeaderPage
        allowGoBack
        title={`Editar Tipo de Estado ${router.query.id}`}
      />

      { typeStatus && <FormEditTypeStatus typeStatus={typeStatus} /> }
    </>
  )
}

EditTypeStatusSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CATEGORIES.DETAIL.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default EditTypeStatusSettingsPage
