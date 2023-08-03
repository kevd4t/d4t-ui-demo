import { Table } from '@/components/common/tables/GenericTable'
import { useFetch } from '@/lib/hooks/useFetch'
import { handleFetchUrlIsland } from '@/lib/services/stations/attributes/islands'
import { IFetchDataTable, IPumpIsland, IUserGroup } from '@/lib/types'
import { islandColumns } from '@/lib/utils/tableColumns/islands'
import { PaginationState, RowSelectionState, type Table as TableType } from '@tanstack/react-table'
import { useState } from 'react'

export const ListIsland = ({ islands }: { islands: IPumpIsland[] }) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({ pageIndex: 1, pageSize: 5 })
  const [tableUserGroupsSelected, handleTableUserGroupsSelected] = useState<RowSelectionState>({})
  const [fullDataUserGroupsSelected, setFullDataUserGroupsSelected] = useState([])

  const { data, error, isLoading: isLoadingUserGroups, fetcher } = useFetch<IFetchDataTable<IUserGroup>>('/api/users/groups')

  const pagination = {
    pageSize,
    pageIndex,
    setPagination,
    labels: { pluralItem: 'Usuarios', singularItem: 'Usuario' }
  }

  const handleSearchWithParams = async ({ search, filters }) => {
    const url = handleFetchUrlIsland({
      search,
      filters,
      pageSize: pagination.pageSize,
      pageIndex: pagination.pageIndex
    })

    fetcher(url)
  }

  const getFullDataSelection = (table: TableType<any>) => {
    const fullDataSelection = table.getSelectedRowModel().flatRows
    setFullDataUserGroupsSelected(fullDataSelection)
  }

  return (
    <div>
      <Table
        visibilityColumns
        data={islands}
        pagination={pagination}
        columns={islandColumns}
        queryInfo={{ isFetching: isLoadingUserGroups, error }}
        inputSearch={{ handleSearchWithParams, placeholder: 'Buscar Grupo de Usuarios' }}
        selection={{
          rowSelection: tableUserGroupsSelected,
          setRowSelection: handleTableUserGroupsSelected,
          getFullDataSelection
        }}
      />
    </div>
  )
}
