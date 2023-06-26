import { PaginationState, RowSelectionState } from '@tanstack/react-table'
import { useState } from 'react'

import type { IFetchDataTable, IUser, ReactElement } from '@/lib/types'
import { usersColumns, usersColumnsToFilter } from '@/lib/utils/tableColumns/users'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/Table'
import { useFetch } from '@/lib/hooks/useFetch'
import { handleFetchUrlUsers } from '@/lib/services/users'

const { ROUTES } = siteConfig

const UsersPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const { data, error, isLoading, fetcher } = useFetch<IFetchDataTable<IUser>>('/api/users')
  const [usersSelected, setUsersSelected] = useState<RowSelectionState>({})

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Usuarios', singularItem: 'Usuario' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlUsers({ pageSize, pageIndex, search, filters })
    fetcher(url)
  }

  return (
    <>
      <HeaderPage
        title='Usuarios'
        createItem={{ href: '/usuarios/crear', title: 'Crear Usuario' }}
      />

      <Table
        visibilityColumns
        data={data?.results}
        columns={usersColumns}
        pagination={pagination}
        itemsToFilter={usersColumnsToFilter}
        queryInfo={{ isFetching: isLoading, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Usuario' }}
        selection={{ rowSelection: usersSelected, setRowSelection: setUsersSelected }}
      />
    </>
  )
}

UsersPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <AuthenticatedLayout title={`${ROUTES.USERS.LIST.TITLE} | ${siteConfig.TITLE}`} >
      {page}
    </AuthenticatedLayout>
  )
}

export default UsersPage
