import { useState } from 'react'
import { toast } from 'sonner'

import { ICity, TColumnActions } from '@/lib/types'
import { useFetch } from '@/lib/hooks/useFetch'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui'
import { Spinner } from '@/components/common/loaders/Spinner'
import { DialogDetailCity } from './DialogDetail'
import { CitiesDropdownActions } from './DropdownActions'
import { DialogEditCity } from './DialogEdit'

interface ISubCategoryColumnActionsProps {
  city: ICity
  actions?: TColumnActions
  itemIdx?: number
}

export const CityColumnActions = ({ city, actions, itemIdx }: ISubCategoryColumnActionsProps) => {
  const [isOpenDetail, setOpenDetail] = useState(false)
  const [isOpenEdit, setOpenEdit] = useState(false)
  const [isOpenAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()

  const openConfirmBlock = () => setOpenAlert(true)
  const openDetail = () => setOpenDetail(true)
  const openEdit = () => setOpenEdit(true)

  const handleDialogsOpen = {
    edit: actions.edit ? openEdit : null,
    detail: actions.detail ? openDetail : null,
    delete: actions.delete ? openConfirmBlock : null
  }

  const blockState = async () => {
    const data: any = await fetcher(`/api/cities/${city.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${city.title} ha sido bloqueado`)
    setOpenAlert(false)
  }

  return (
    <>
      <AlertDialog open={isOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear esta subcategoria?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara la subcategoria {city.title}
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

      <DialogDetailCity
        city={city}
        isOpenViewModel={isOpenDetail}
        setOpenViewModel={setOpenDetail}
      />

      <DialogEditCity
        city={city}
        isOpenEdit={isOpenEdit}
        setOpenEdit={setOpenEdit}
      />

      <CitiesDropdownActions
        city={city}
        actions={actions}
        itemIdx={itemIdx}
        handleDialogsOpen={handleDialogsOpen}
      />
    </>
  )
}
