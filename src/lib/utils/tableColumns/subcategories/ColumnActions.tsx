import { ISubCategory, TColumnActions } from '@/lib/types'
import { SubCategoryDropdownActions } from './DropdownActions'
import { useState } from 'react'
import { useFetch } from '@/lib/hooks/useFetch'
import { toast } from 'sonner'
import { AlertDialog } from '@radix-ui/react-alert-dialog'
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui'
import { Spinner } from '@/components/common/loaders/Spinner'
import { DialogDetailSubcategory } from './DialogDetail'
import { DialogEditSubcategory } from './DialogEdit'

interface ISubCategoryColumnActionsProps {
  subcategory: ISubCategory
  actions?: TColumnActions
  itemIdx?: number
}

export const SubCategoryColumnActions = ({ subcategory, actions, itemIdx }: ISubCategoryColumnActionsProps) => {
  const [isOpenDetail, setOpenDetail] = useState(false)
  const [isOpenEdit, setOpenEdit] = useState(false)
  const [isOpenAlert, setOpenAlert] = useState(false)
  const { isLoading, error, fetcher } = useFetch()

  const openConfirmBlock = () => setOpenAlert(true)
  const openEdit = () => setOpenEdit(true)
  const openDetail = () => setOpenDetail(true)

  const handleDialogsOpen = {
    edit: actions.edit ? openEdit : null,
    detail: actions.detail ? openDetail : null,
    delete: actions.delete ? openConfirmBlock : null
  }

  const blockSubcategory = async () => {
    const data: any = await fetcher(`/api/subcategories/${subcategory.id}/block`, { method: 'PUT' })

    if (error) {
      toast.error('Hubo un error')
      return
    }

    console.log({ data })
    toast.success(`${subcategory.title} ha sido bloqueado`)
    setOpenAlert(false)
  }

  return (
    <>
      <AlertDialog open={isOpenAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Esta seguro de bloquear esta subcategoria?</AlertDialogTitle>
            <AlertDialogDescription>
                Se bloqueara la subcategoria {subcategory.title}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} onClick={() => setOpenAlert(false)}>
              Cancelar
            </AlertDialogCancel>

            <AlertDialogAction disabled={isLoading} onClick={blockSubcategory} className='w-[89px]'>
              { isLoading ? <Spinner /> : 'Bloquear' }
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DialogDetailSubcategory
        subcategory={subcategory}
        isOpenViewModel={isOpenDetail}
        setOpenViewModel={setOpenDetail}
      />

      <DialogEditSubcategory
        subcategory={subcategory}
        isOpenEdit={isOpenEdit}
        setOpenEdit={setOpenEdit}
      />

      <SubCategoryDropdownActions
        subcategory={subcategory}
        actions={actions}
        itemIdx={itemIdx}
        handleDialogsOpen={handleDialogsOpen}
      />
    </>
  )
}
