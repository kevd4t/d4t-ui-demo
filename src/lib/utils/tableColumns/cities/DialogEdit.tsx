import React, { Dispatch, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ICity, IFormEditCity } from '@/lib/types'
import { simulateFetch } from '@/lib/utils/simulateFetch'

import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'
import { stateRules } from './rules'

interface IDialogDetailCityProps {
  city: ICity
  isOpenEdit: boolean
  setOpenEdit: Dispatch<boolean>
}

export const DialogEditCity = ({ city: state, isOpenEdit, setOpenEdit }: IDialogDetailCityProps) => {
  const formEditCity = useForm<IFormEditCity>()
  const [loading, setLoading] = useState(false)

  const onSubmitEditCity = async (data: IFormEditCity) => {
    setLoading(true)
    await simulateFetch(3000)

    console.log({ data })
  }

  return (
    <Dialog open={isOpenEdit} onOpenChange={setOpenEdit}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Ciudad</DialogTitle>
        </DialogHeader>

        <section className='w-full space-y-4'>
          <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
            <Input
              id='title'
              type='text'
              tabIndex={4}
              label='Titulo'
              defaultValue={state.title}
              register={formEditCity.register}
              messageErrors={formEditCity.formState.errors}
              inputErrors={stateRules.title}
            />
          </div>
        </section>

        <DialogFooter className='flex flex-col gap-y-4'>
          <Button
            type='button'
            variant='outline'
            isLoading={loading}
            onClick={() => setOpenEdit(false)}
          >
            Cancelar
          </Button>

          <Button
            type='button'
            isLoading={loading}
            onClick={formEditCity.handleSubmit(onSubmitEditCity)}
          >
            Editar Ciudad
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
