import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

import type { IFetchDataTable, ReactElement } from '@/lib/types'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { useFetch } from '@/lib/hooks/useFetch'
import { IFleet } from '@/lib/types/fleets'
import { handleFetchUrlFleets } from '@/lib/services/settings/fleets'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/GenericTable'
import { fleetColumns } from '@/lib/utils/tableColumns/fleets'

const { ROUTES } = siteConfig

const FleetsSettingsPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IFleet>>('/api/fleets')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Flotas', singularItem: 'Flota' }
  }

  const handleSearchWithParams = async ({ search }) => {
    const url = handleFetchUrlFleets({ pageSize, pageIndex, search })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Flotas'
        createItem={{ href: '/ajustes/flotas/crear', title: 'Crear Flota' }}
      />

      <Table
        visibilityColumns
        data={data?.results}
        columns={fleetColumns}
        pagination={pagination}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Flota' }}
      />
    </>
  )
}

FleetsSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.FLEETS.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default FleetsSettingsPage
