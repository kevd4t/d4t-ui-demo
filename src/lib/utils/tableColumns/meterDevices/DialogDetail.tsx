import React, { Dispatch } from 'react'

import { IMeterDevice } from '@/lib/types'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, Label, ScrollArea } from '@/components/ui'
import { GridImages } from '@/components/common/grid-images'
import { Input } from '@/components/common/inputs/Input'

interface IDialogDetailMeterModelProps {
  meterDevice: IMeterDevice
  isOpenViewModel: boolean
  setOpenViewModel: Dispatch<boolean>
}

export const DialogDetailMeterDevice = ({ meterDevice, isOpenViewModel, setOpenViewModel }: IDialogDetailMeterModelProps) => {
  return (
    <Dialog open={isOpenViewModel} onOpenChange={setOpenViewModel}>
      <DialogContent>
        <ScrollArea className='h-[70vh] px-2'>
          <DialogHeader>
            <DialogTitle>Modelo de Medidor</DialogTitle>

            <DialogDescription>Vista de detalle del model de medidor</DialogDescription>
          </DialogHeader>

          <section className='w-full space-y-4'>
            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                tabIndex={1}
                id='serial'
                type='text'
                value={meterDevice.serial}
                label='Serial'
                placeholder='Pekkin'
                readOnly
              />

              <Input
                tabIndex={2}
                id='status'
                type='text'
                value={meterDevice.status}
                label='Estado'
                placeholder='Pekkin'
                readOnly
              />
            </div>

            <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
              <Input
                tabIndex={4}
                id='meterUnit'
                type='text'
                value={meterDevice.meterUnit}
                label='Unidad de Medicion'
                placeholder='Pekkin'
                readOnly
              />

              <Input
                tabIndex={3}
                id='meterModel'
                type='text'
                value={meterDevice.meterModel.title}
                label='Modelo'
                placeholder='Pekkin'
                readOnly
              />
            </div>
          </section>

          <section className='mt-4'>
            <Input
              tabIndex={4}
              id='type'
              type='text'
              value={meterDevice.type}
              label='Tipo'
              readOnly
            />
          </section>

          <section className='mt-4'>
            <Label>Fotos del Medidor</Label>

            <GridImages images={meterDevice.images} />
          </section>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
