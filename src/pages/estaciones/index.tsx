import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

import type { IFetchDataTable, IStation, ReactElement } from '@/lib/types'
import { handleFetchUrlStations } from '@/lib/services/stations'
import { useFetch } from '@/lib/hooks/useFetch'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/GenericTable'
import { stationColumns, stationColumnsToFilter } from '@/lib/utils/tableColumns/stations'

const { ROUTES } = siteConfig

const StationsPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IStation>>('/api/stations')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Estaciones', singularItem: 'Estación' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlStations({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Estaciones'
        createItems={[{ href: '/estaciones/crear', title: 'Crear Estación' }]}
      />

      <Table
        visibilityColumns
        data={data?.results}
        columns={stationColumns}
        pagination={pagination}
        itemsToFilter={stationColumnsToFilter}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Estación' }}
      />
    </>
  )
}

StationsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.STATIONS.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default StationsPage
