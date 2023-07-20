import { useState } from 'react'
import { toast } from 'sonner'

import { useFetch } from '@/lib/hooks/useFetch'
import type { IMeterDevice, TColumnActions } from '@/lib/types'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui'
import { MeterDeviceDropdownActions } from './DropdownActions'
import { Spinner } from '@/components/common/loaders/Spinner'
import { DialogDetailMeterDevice } from './DialogDetail'

interface IMeterDeviceColumnActionsProps {
  meterDevice: IMeterDevice
  actions?: TColumnActions
  itemIdx?: number
}

export const MeterDeviceColumnActions = ({ meterDevice, actions, itemIdx }: IMeterDeviceColumnActionsProps) => {
  const [isOpenDetail, setOpenDetail] = useState(false)
  const [confirmBlock, setConfirmBlock] = useState(false)
  const [, setOpenEdit] = useState(false)
  const { isLoading, error, fetcher } = useFetch()

  const openConfirmBlock = () => setConfirmBlock(true)
  const openEdit = () => setOpenEdit(true)
  const openDetail = () => setOpenDetail(true)

  const handleDialogsOpen = {
    edit: actions?.edit ? openEdit : null,
    detail: actions?.detail ? openDetail : null,
    delete: actions?.delete ? openConfirmBlock : null
  }

  const blockMeterDevice = async () => {
    const data: any = await fetcher(`/api/meter-devices/${meterDevice.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`Medidor ${meterDevice.serial} ha sido bloqueado`)
    setConfirmBlock(false)
  }

  return (
    <>
      <AlertDialog open={confirmBlock}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              ¿Esta seguro de bloquear este medidor?
            </AlertDialogTitle>

            <AlertDialogDescription>
                Se bloqueara la marca de medidor {meterDevice.serial}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setConfirmBlock(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockMeterDevice} className='w-[89px]'>
              { isLoading ? <Spinner /> : 'Bloquear' }
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DialogDetailMeterDevice
        meterDevice={meterDevice}
        isOpenViewModel={isOpenDetail}
        setOpenViewModel={setOpenDetail}
      />

      <MeterDeviceDropdownActions
        actions={actions}
        itemIdx={itemIdx}
        meterDevice={meterDevice}
        handleDialogsOpen={handleDialogsOpen}
      />
    </>
  )
}
