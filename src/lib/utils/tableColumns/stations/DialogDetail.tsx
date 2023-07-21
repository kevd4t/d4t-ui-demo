import React, { Dispatch } from 'react'

import { IStation } from '@/lib/types'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'

interface IDialogDetailCityProps {
  station: IStation
  isOpenViewModel: boolean
  setOpenViewModel: Dispatch<boolean>
}

export const DialogDetailStation = ({ station, isOpenViewModel, setOpenViewModel }: IDialogDetailCityProps) => {
  return (
    <Dialog open={isOpenViewModel} onOpenChange={setOpenViewModel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ciudad</DialogTitle>

          <DialogDescription>Vista de detalle de una Ciudad</DialogDescription>
        </DialogHeader>

        <section className='w-full space-y-4'>
          <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
            <Input
              readOnly
              id='title'
              type='text'
              tabIndex={4}
              label='Titulo'
              value={station.title}
            />

            <Input
              readOnly
              id='isActive'
              type='text'
              tabIndex={5}
              label='Estado'
              value={station.isActive ? 'Activo' : 'Bloqueado'}
            />
          </div>
        </section>
      </DialogContent>
    </Dialog>
  )
}
