import { useState } from 'react'
import { toast } from 'sonner'

import { IPumpIsland, TColumnActions } from '@/lib/types'
import { useFetch } from '@/lib/hooks/useFetch'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui'
import { Spinner } from '@/components/common/loaders/Spinner'
import { IslandDialogDetail } from './DialogDetail'
import { IslandDropdownActions } from './DropdownActions'

interface IIslandColumnActionsProps {
  island: IPumpIsland
  actions?: TColumnActions
  itemIdx?: number
}

export const IslandColumnActions = ({ island, actions, itemIdx }: IIslandColumnActionsProps) => {
  const [isOpenDetail, setOpenDetail] = useState(false)
  const [isOpenAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()

  const openConfirmBlock = () => setOpenAlert(true)
  const openDetail = () => setOpenDetail(true)

  const handleDialogsOpen = {
    edit: null,
    detail: actions.detail ? openDetail : null,
    delete: actions.delete ? openConfirmBlock : null
  }

  const blockIsland = async () => {
    const data: any = await fetcher(`/api/islands/${island.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${island.id} ha sido bloqueado`)
    setOpenAlert(false)
  }

  return (
    <>
      <AlertDialog open={isOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear esta subcategoria?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara la subcategoria {island.id}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockIsland} className='w-[89px]'>
              { isLoading ? <Spinner /> : 'Bloquear' }
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <IslandDialogDetail
        island={island}
        isOpenViewModel={isOpenDetail}
        setOpenViewModel={setOpenDetail}
      />

      <IslandDropdownActions
        island={island}
        actions={actions}
        itemIdx={itemIdx}
        handleDialogsOpen={handleDialogsOpen}
      />
    </>
  )
}
