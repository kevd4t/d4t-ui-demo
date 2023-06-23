import { PaginationState, RowSelectionState } from '@tanstack/react-table'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import type { IFetchDataTable, IUser, ReactElement } from '@/lib/types'
import { usersColumns } from '@/lib/utils/tableColumns/users'
import { fetchUsers } from '@/lib/services/users'
import { siteConfig } from '@/config'

import { AuthenticatedLayout } from '@/layouts/Authenticated'
import { HeaderPage } from '@/components/common/headers/HeaderPage'
import { Table } from '@/components/common/tables/Table'

const { ROUTES } = siteConfig

const UsersPage = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [usersSelected, setUsersSelected] = useState<RowSelectionState>({})
  const [search] = useState('')

  const fetchDataOptions = { pageIndex, pageSize, search }

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Usuarios', singularItem: 'Usuario' }
  }

  const { data, isFetching, error } = useQuery<IFetchDataTable<IUser>>({
    queryKey: ['users', fetchDataOptions],
    queryFn: fetchUsers,
    refetchOnWindowFocus: false
  })

  return (
    <>
      <HeaderPage
        title='Usuarios'
        createItem={{ href: '/usuarios/crear', title: 'Crear Usuario' }}
      />

      <Table
        queryInfo={{ isFetching, error }}
        columns={usersColumns}
        data={data?.results}
        pagination={pagination}
        selection={{ rowSelection: usersSelected, setRowSelection: setUsersSelected }}
        visibilityColumns
      />

      {/* <Table
        pageCount={page}
        data={data}
        visibilityColumns
        columns={usersColumns}
        itemsToFilter={usersColumnsToFilter}
        labelPagination={{ singularItem: 'Usuario', pluralItem: 'Usuarios' }}
        inputSearch={{ placeholder: 'Buscar Usuario' }}
      /> */}
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
