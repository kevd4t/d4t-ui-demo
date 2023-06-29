import { RowSelectionState } from '@tanstack/react-table'

interface HandleTableItemsSelectedParams {
  itemsTableSelected: RowSelectionState
  dataItems: any[]
}

export const handleTableItemsSelected = ({ itemsTableSelected, dataItems }: HandleTableItemsSelectedParams) => {
  const itemsIdx = Object.keys(itemsTableSelected)

  const usersSelectedFullData = itemsIdx.flatMap(itemIdx => {
    const itemsFiltred = dataItems.filter((_, idx) => itemIdx === idx.toString())
    return itemsFiltred
  })

  return usersSelectedFullData
}
