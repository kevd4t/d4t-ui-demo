import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

import type { IFetchDataTable, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { useFetch } from '@/lib/hooks/useFetch'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { IRoute } from '@/lib/types/routes'
import { handleFetchUrlRoutes } from '@/lib/services/routes'
import { Table } from '@/components/common/tables/GenericTable'
import { routeColumns } from '@/lib/utils/tableColumns/routes'

const { ROUTES } = siteConfig

const RoutesMonitoringPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IRoute>>('/api/routes')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Rutas', singularItem: 'Ruta' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlRoutes({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Rutas'
        createItems={[{ href: '/monitoreo/rutas/crear', title: 'Crear Ruta' }]}
      />

      <Table
        visibilityColumns
        data={data?.results}
        columns={routeColumns}
        pagination={pagination}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Ruta' }}
      />
    </>
  )
}

RoutesMonitoringPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.MONITORING.ROUTES.LIST.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default RoutesMonitoringPage
