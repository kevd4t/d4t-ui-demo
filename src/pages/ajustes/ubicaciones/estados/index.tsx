import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

import type { IFetchDataTable, IState, ReactElement } from '@/lib/types'
import { handleFetchUrlCities } from '@/lib/services/cities'
import { useFetch } from '@/lib/hooks/useFetch'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { getStateColumns } from '@/lib/utils/tableColumns/states'
import { Table } from '@/components/common/tables/GenericTable'

const { ROUTES } = siteConfig

const StatesSettingsPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IState>>('/api/states')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Estados', singularItem: 'Estado' }
  }

  const handleSearchWithParams = async ({ search }) => {
    const url = handleFetchUrlCities({ pageSize, pageIndex, search })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Estados'
        createItems={[{ href: '/ajustes/ubicaciones/estados/crear', title: 'Crear Estado' }]}
      />

      <Table
        visibilityColumns
        data={data?.results}
        pagination={pagination}
        queryInfo={{ isFetching: isLoading, error }}
        columns={getStateColumns({ actions: { detail: true, delete: true } })}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Estado' }}
      />
    </>
  )
}

StatesSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CITIES.LIST.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default StatesSettingsPage
