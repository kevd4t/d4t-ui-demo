import { useState } from 'react'
import { toast } from 'sonner'

import { useFetch } from '@/lib/hooks/useFetch'
import type { IDriver } from '@/lib/types'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui'
import { Spinner } from '@/components/common/loaders/Spinner'
import { DropdownActions } from './DropdownActions'
import { useRouter } from 'next/router'

export const DriverColumnActions = ({ driver }: { driver: IDriver }) => {
  const [isOpenAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()
  const router = useRouter()

  const openAlert = () => setOpenAlert(true)
  const goToEditDriver = () => router.push(`/ajustes/choferes/${driver.id}/editar`)
  const goToDetailDriver = () => router.push(`/ajustes/choferes/${driver.id}`)

  const blockDriver = async () => {
    const data: any = await fetcher(`/api/drivers/${driver.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${driver.names} ${driver.surnames} ha sido bloqueado`)
    setOpenAlert(false)
  }

  return (
    <>
      <AlertDialog open={isOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear este chofer?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara el chofer {driver.names} {driver.surnames}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockDriver} className='w-[89px]'>
              { isLoading ? <Spinner /> : 'Bloquear' }
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* <DialogEditDriver driver={driver} isOpenEditModel={isOpenEditModal} setOpenEditModal={setOpenEditModal} /> */}
      {/* <DialogDetailMeterModel meterModel={driver} isOpenViewModel={isOpenViewModel} setOpenViewModel={setOpenViewModel} /> */}
      <DropdownActions openAlert={openAlert} openEditModal={goToEditDriver} openViewModel={goToDetailDriver} />
    </>
  )
}
