import { PaginationState, RowSelectionState } from '@tanstack/react-table'
import { useState } from 'react'

import type { IDriver, IFetchDataTable, ReactElement } from '@/lib/types'
import { usersColumnsToFilter } from '@/lib/utils/tableColumns/users'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/GenericTable'
import { useFetch } from '@/lib/hooks/useFetch'
import { handleFetchUrlUsers } from '@/lib/services/users'
import { handleTableItemsSelected } from '@/lib/utils/handleTableItemsSelected'
import { getDriverColumns } from '@/lib/utils/tableColumns/drivers'

const { ROUTES } = siteConfig

const DriversSettingsPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IDriver>>('/api/drivers')
  const [usersSelected, setUsersSelected] = useState<RowSelectionState>({})

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'choferes', singularItem: 'Chofer' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const usersSelectedFullData = handleTableItemsSelected({ itemsTableSelected: usersSelected, dataItems: data.results })
    console.log({ usersSelectedFullData })

    const url = handleFetchUrlUsers({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Choferes'
        createItems={[{ href: '/ajustes/choferes/crear', title: 'Crear Chofer' }]}
      />

      <Table
        visibilityColumns
        data={data?.results}
        columns={getDriverColumns({})}
        pagination={pagination}
        itemsToFilter={usersColumnsToFilter}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Chofer' }}
        selection={{ rowSelection: usersSelected, setRowSelection: setUsersSelected }}
      />
    </>
  )
}

DriversSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.DRIVERS.LIST.TITLE} | ${siteConfig.TITLE}`}>
      {page}
    </AuthenticatedLayout>
  )
}

export default DriversSettingsPage
