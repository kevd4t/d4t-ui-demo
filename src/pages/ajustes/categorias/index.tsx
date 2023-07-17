import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

import { categoryColumns, categoryColumnsToFilter } from '@/lib/utils/tableColumns/categories'
import type { ICategory, IFetchDataTable, ReactElement } from '@/lib/types'
import { handleFetchUrlCategories } from '@/lib/services/categories'
import { useFetch } from '@/lib/hooks/useFetch'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/GenericTable'

const { ROUTES } = siteConfig

const CategorySettingsPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<ICategory>>('/api/categories')

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
        title='Categorias'
        createItems={[{ href: '/ajustes/categorias/crear', title: 'Crear Categoria' }]}
      />

      <Table
        visibilityColumns
        data={data?.results}
        pagination={pagination}
        columns={categoryColumns}
        itemsToFilter={categoryColumnsToFilter}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Categoria' }}
      />
    </>
  )
}

CategorySettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CATEGORIES.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default CategorySettingsPage
