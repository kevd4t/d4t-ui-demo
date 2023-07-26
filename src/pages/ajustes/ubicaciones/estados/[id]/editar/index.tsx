import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'sonner'

import { ICategoryWithSubCategories, IFetchData } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormEditCategory } from '@/components/page/ajustes/categorias/FormEditCategory'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'
import { HeaderPage } from '@/components/common/headers/HeaderPage'

const { ROUTES } = siteConfig

const EditStateSettingsPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [category, setCategory] = useState(null)
  const [error, setError] = useState(null)
  const router = useRouter()

  const getCategoryDetail = async () => {
    setIsLoading(true)

    const res = await fetch(`/api/categories/${router.query.id}`)

    if (!res.ok) {
      toast.error('Hubo un Error')
      setError('Hubo un Error')
      setIsLoading(false)
      return
    }

    const data: IFetchData<ICategoryWithSubCategories> = await res.json()
    setCategory(data?.results)
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
        title={`Editar Categoria ${router.query.id}`}
      />

      { category && <FormEditCategory category={category} /> }
    </>
  )
}

EditStateSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CATEGORIES.DETAIL.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default EditStateSettingsPage
