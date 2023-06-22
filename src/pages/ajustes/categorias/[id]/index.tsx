import { fetchSubCategories } from '@/lib/services/settings/categories'
import type { ICategory, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { CardUI, CardUIContent, CardUITitle, Separator } from '@/components/ui'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { DataTable } from '@/components/common/tables'
import { subcategoryColumns, subcategoryColumnsToFilter } from '@/lib/utils/tableColumns/subcategories'
import { FormDetailCategoryDisabled } from '@/components/page/ajustes/categorias/FormDetailCategoryDisabled'
import { useQuery } from '@tanstack/react-query'
import { WomanLoading } from '@/components/common/illustrations/WomanLoading'

const { ROUTES } = siteConfig

const SubCategorySettingsPage = () => {
  const { data, isLoading, error } = useQuery<ICategory>(
    ['detailCategory'],
    () => fetch('/api/categories/23').then(res => res.json())
  )

  if (isLoading) {
    return (
      <div className='h-[80vh] w-full flex flex-col justify-center items-center'>
        <WomanLoading className='w-96' />
        <h6 className='font-bold text-5xl'>Cargando...</h6>
      </div>
    )
  }

  if (error) {
    return (
      <div>Error</div>
    )
  }

  return (
    <>
      <HeaderPage
        title={`Detalle de Categoria ${data.id}`}
      />

      <div className='w-full h-full max-w-4xl mx-auto'>
        <CardUI className='p-4'>
          <CardUITitle>Informacion Basica</CardUITitle>

          <Separator className='my-4' />

          <CardUIContent className='p-0'>
            <FormDetailCategoryDisabled {...data} />
          </CardUIContent>
        </CardUI>

        <CardUI className='p-4 mt-6'>
          <CardUITitle>Subcategorias</CardUITitle>

          <Separator className='my-4' />

          <DataTable
            visibilityColumns
            columns={subcategoryColumns}
            itemsToFilter={subcategoryColumnsToFilter}
            labelPagination={{ singularItem: 'Subcategoria', pluralItem: 'Subcategorias' }}
            inputSearch={{ placeholder: 'Buscar Subcategoria' }}
            query={{ queryKey: 'subcategories', queryFn: () => fetchSubCategories }}
          />
        </CardUI>
      </div>
    </>
  )
}

SubCategorySettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CATEGORIES.DETAIL.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default SubCategorySettingsPage
