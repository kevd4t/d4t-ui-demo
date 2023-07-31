import { useState } from 'react'
import { toast } from 'sonner'

import { IStation, TColumnActions } from '@/lib/types'
import { useFetch } from '@/lib/hooks/useFetch'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui'
import { Spinner } from '@/components/common/loaders/Spinner'
import { DialogDetailStation } from './DialogDetail'
import { StationDropdownActions } from './DropdownActions'

interface ISubCategoryColumnActionsProps {
  station: IStation
  actions?: TColumnActions
  itemIdx?: number
}

export const StationColumnActions = ({ station, actions, itemIdx }: ISubCategoryColumnActionsProps) => {
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

  const blockStation = async () => {
    const data: any = await fetcher(`/api/stations/${station.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${station.name} ha sido bloqueado`)
    setOpenAlert(false)
  }

  return (
    <>
      <AlertDialog open={isOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear esta subcategoria?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara la subcategoria {station.name}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockStation} className='w-[89px]'>
              { isLoading ? <Spinner /> : 'Bloquear' }
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DialogDetailStation
        station={station}
        isOpenViewModel={isOpenDetail}
        setOpenViewModel={setOpenDetail}
      />

      <StationDropdownActions
        station={station}
        actions={actions}
        itemIdx={itemIdx}
        handleDialogsOpen={handleDialogsOpen}
      />
    </>
  )
}
