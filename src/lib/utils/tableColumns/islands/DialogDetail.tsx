import React, { Dispatch } from 'react'

import { IPumpIsland } from '@/lib/types'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'

interface IDialogDetailCityProps {
  island: IPumpIsland
  isOpenViewModel: boolean
  setOpenViewModel: Dispatch<boolean>
}

export const IslandDialogDetail = ({ island: station, isOpenViewModel, setOpenViewModel }: IDialogDetailCityProps) => {
  return (
    <Dialog open={isOpenViewModel} onOpenChange={setOpenViewModel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Isla de Estación</DialogTitle>

          <DialogDescription>Vista de detalle de una isla de estación</DialogDescription>
        </DialogHeader>

        <section className='w-full space-y-4'>
          <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
            <Input
              readOnly
              id='id'
              type='text'
              tabIndex={1}
              label='ID'
              value={station.id}
            />
          </div>
        </section>
      </DialogContent>
    </Dialog>
  )
}
