import { PaginationState, RowSelectionState } from '@tanstack/react-table'
import { useState } from 'react'

import { subcategoryColumns, subcategoryColumnsToFilter } from '@/lib/utils/tableColumns/subcategories'
import type { ICategoryWithSubCategories, ReactElement } from '@/lib/types'
import { handleFetchUrlCategories } from '@/lib/services/categories'
import { useFetch } from '@/lib/hooks/useFetch'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { FormDetailCategoryDisabled } from '@/components/page/ajustes/categorias/FormDetailCategoryDisabled'
import { CardUI, CardUIContent, CardUITitle, Separator } from '@/components/ui'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/GenericTable'
import { useRouter } from 'next/router'

const { ROUTES } = siteConfig

const SubCategorySettingsPage = () => {
  const router = useRouter()
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<ICategoryWithSubCategories>(`/api/categories/${router.query.id}`)
  const [subcategoriesSelected, setSubcategoriesSelected] = useState<RowSelectionState>({})

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Usuarios', singularItem: 'Usuario' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlCategories({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title={`Detalle de Categoria ${router.query.id}`}
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

          <Table
            visibilityColumns
            pagination={pagination}
            data={data?.subcategories}
            columns={subcategoryColumns}
            itemsToFilter={subcategoryColumnsToFilter}
            queryInfo={{ isFetching: isLoading, error }}
            inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Subcategoria' }}
            selection={{ rowSelection: subcategoriesSelected, setRowSelection: setSubcategoriesSelected }}
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
