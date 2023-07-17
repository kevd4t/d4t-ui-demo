import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'sonner'

import { IState, TColumnActions } from '@/lib/types'
import { useFetch } from '@/lib/hooks/useFetch'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui'
import { Spinner } from '@/components/common/loaders/Spinner'
import { DialogDetailSubcategory } from './DialogDetail'
import { StateDropdownActions } from './DropdownActions'
import { DialogEditState } from './DialogEdit'

interface ISubCategoryColumnActionsProps {
  state: IState
  actions?: TColumnActions
  itemIdx?: number
}

export const StateColumnActions = ({ state, actions, itemIdx }: ISubCategoryColumnActionsProps) => {
  const [isOpenDetail, setOpenDetail] = useState(false)
  const [isOpenEdit, setOpenEdit] = useState(false)
  const [isOpenAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()
  const router = useRouter()

  const openConfirmBlock = () => setOpenAlert(true)

  const handleDialogsOpen = {
    edit: () => router.push(`/ajustes/ubicacion/estados/${state.id}/editar`),
    detail: () => router.push(`/ajustes/ubicaciones/estados/${state.id}`),
    delete: actions.delete ? openConfirmBlock : null
  }

  const blockState = async () => {
    const data: any = await fetcher(`/api/subcategories/${state.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${state.title} ha sido bloqueado`)
    setOpenAlert(false)
  }

  return (
    <>
      <AlertDialog open={isOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear esta subcategoria?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara la subcategoria {state.title}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockState} className='w-[89px]'>
              { isLoading ? <Spinner /> : 'Bloquear' }
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DialogDetailSubcategory
        state={state}
        isOpenViewModel={isOpenDetail}
        setOpenViewModel={setOpenDetail}
      />

      <DialogEditState
        state={state}
        isOpenEdit={isOpenEdit}
        setOpenEdit={setOpenEdit}
      />

      <StateDropdownActions
        state={state}
        actions={actions}
        itemIdx={itemIdx}
        handleDialogsOpen={handleDialogsOpen}
      />
    </>
  )
}
