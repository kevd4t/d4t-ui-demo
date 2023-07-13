import { useState } from 'react'
import { toast } from 'sonner'

import { useFetch } from '@/lib/hooks/useFetch'
import type { IMeterModel } from '@/lib/types'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui'
import { Spinner } from '@/components/common/loaders/Spinner'
import { DialogDetailMeterModel } from './DialogDetail'
import { DialogEditMeterModel } from './DialogEdit'
import { DropdownActions } from './DropdownActions'

export const MeterModelColumnActions = ({ meterModel }: { meterModel: IMeterModel }) => {
  const [isOpenViewModel, setOpenViewModel] = useState(false)
  const [isOpenEditModal, setOpenEditModal] = useState(false)
  const [isOpenAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()

  const openAlert = () => setOpenAlert(true)
  const openEditModal = () => setOpenEditModal(true)
  const openViewModel = () => setOpenViewModel(true)

  const blockUser = async () => {
    const data: any = await fetcher(`/api/meter-models/${meterModel.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${meterModel.title} ha sido bloqueado`)
    setOpenAlert(false)
  }

  return (
    <>
      <AlertDialog open={isOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear este modelo de medidor?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara la marca de medidor {meterModel.title}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockUser} className='w-[89px]'>
              { isLoading ? <Spinner /> : 'Bloquear' }
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DialogEditMeterModel meterModel={meterModel} isOpenEditModel={isOpenEditModal} setOpenEditModal={setOpenEditModal} />
      <DialogDetailMeterModel meterModel={meterModel} isOpenViewModel={isOpenViewModel} setOpenViewModel={setOpenViewModel} />
      <DropdownActions openAlert={openAlert} openEditModal={openEditModal} openViewModel={openViewModel} />
    </>
  )
}
