import { PaginationState } from '@tanstack/react-table'
import { useState } from 'react'

import { handleFetchUrlTypeStatus } from '@/lib/services/settings/status'
import type { IFetchDataTable, ReactElement } from '@/lib/types'
import { IStatusType } from '@/lib/types/status'
import { useFetch } from '@/lib/hooks/useFetch'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/GenericTable'
import { statusTypeColumns } from '@/lib/utils/tableColumns/type-status'

const { ROUTES } = siteConfig

const StatusTypeSettingsPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IStatusType>>('/api/categories')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Estados', singularItem: 'Estado' }
  }

  const handleSearchWithParams = async ({ search }) => {
    const url = handleFetchUrlTypeStatus({ pageSize, pageIndex, search })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Estados'
        createItems={[{ href: '/ajustes/estados/crear', title: 'Crear Estado' }]}
      />

      <Table
        visibilityColumns
        data={data?.results}
        columns={statusTypeColumns}
        pagination={pagination}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Estado' }}
      />
    </>
  )
}

StatusTypeSettingsPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.SETTINGS.CATEGORIES.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default StatusTypeSettingsPage
