import { IconBadgeAd } from '@tabler/icons-react'
import React, { Dispatch } from 'react'

import { IMeterModel } from '@/lib/types'

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Label } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

interface IDialogDetailMeterModelProps {
  meterModel: IMeterModel
  isOpenViewModel: boolean
  setOpenViewModel: Dispatch<boolean>
}

export const DialogDetailMeterModel = ({ meterModel, isOpenViewModel, setOpenViewModel }: IDialogDetailMeterModelProps) => {
  return (
    <Dialog open={isOpenViewModel} onOpenChange={setOpenViewModel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modelo de Medidor</DialogTitle>

          <DialogDescription>Vista de detalle del model de medidor</DialogDescription>
        </DialogHeader>

        <section className='w-full space-y-4'>
          <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
            <Input
              tabIndex={1}
              id='title'
              type='text'
              value={meterModel.title}
              label='Titulo'
              placeholder='Pekkin'
              readOnly
            />

            <Input
              tabIndex={2}
              id='isActive'
              type='text'
              value={meterModel.isActive ? 'Activo' : 'Bloqueado'}
              label='EStado'
              placeholder='Pekkin'
              readOnly
            />
          </div>

          <TextArea
            id='description'
            rows={5}
            tabIndex={3}
            label='Descripción'
            value={meterModel.description}
            readOnly
          />
        </section>

        <section>
          <Input
            tabIndex={4}
            id='type'
            type='text'
            value={meterModel.type}
            label='Tipo'
            readOnly
          />
        </section>

        <section className='mt-4'>
          <Label>Foto del Modelo</Label>

          {
            meterModel?.image
              ? (
                <img
                  src={meterModel?.image}
                  alt='image'
                  className='rounded-md w-140 max-h-[400px] object-contain mx-auto'
                />
              )
              : (
                <div
                  className='border-gray-300 h-40 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center'
                >
                  <IconBadgeAd className='text-zinc-400 w-20 h-20' strokeWidth={1.5} />
                </div>
              )
          }
        </section>

        <DialogFooter className='flex flex-col gap-y-4'>
          <Button
            type='button'
          >
          Crear Modelo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
