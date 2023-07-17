import React, { Dispatch } from 'react'

import { ISubCategory } from '@/lib/types'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

interface IDialogDetailSubcategoryProps {
  subcategory: ISubCategory
  isOpenViewModel: boolean
  setOpenViewModel: Dispatch<boolean>
}

export const DialogDetailSubcategory = ({ subcategory, isOpenViewModel, setOpenViewModel }: IDialogDetailSubcategoryProps) => {
  return (
    <Dialog open={isOpenViewModel} onOpenChange={setOpenViewModel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subcategoria</DialogTitle>

          <DialogDescription>Vista de detalle de la subcategoria</DialogDescription>
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
              value={subcategory.title}
            />

            <Input
              readOnly
              type='text'
              tabIndex={5}
              id='isActive'
              label='Estado'
              placeholder='Pekkin'
              value={subcategory.isActive ? 'Activo' : 'Bloqueado'}
            />
          </div>

          <TextArea
            rows={5}
            readOnly
            tabIndex={6}
            id='description'
            label='Descripción'
            value={subcategory.description}
          />
        </section>
      </DialogContent>
    </Dialog>
  )
}
