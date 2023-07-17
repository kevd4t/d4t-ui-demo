import React, { Dispatch } from 'react'

import { IState } from '@/lib/types'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'

interface IDialogDetailSubcategoryProps {
  state: IState
  isOpenViewModel: boolean
  setOpenViewModel: Dispatch<boolean>
}

export const DialogDetailSubcategory = ({ state, isOpenViewModel, setOpenViewModel }: IDialogDetailSubcategoryProps) => {
  return (
    <Dialog open={isOpenViewModel} onOpenChange={setOpenViewModel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Estado</DialogTitle>

          <DialogDescription>Vista de detalle de un Estado</DialogDescription>
        </DialogHeader>

        <section className='w-full space-y-4'>
          <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
            <Input
              readOnly
              id='title'
              type='text'
              tabIndex={4}
              label='Titulo'
              placeholder='Pekkin'
              value={state.title}
            />
          </div>
        </section>
      </DialogContent>
    </Dialog>
  )
}
