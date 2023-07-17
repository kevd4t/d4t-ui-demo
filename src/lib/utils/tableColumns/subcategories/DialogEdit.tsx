import React, { Dispatch, useState } from 'react'
import { useForm } from 'react-hook-form'

import { IFormEditSubcategory, ISubCategory } from '@/lib/types'
import { simulateFetch } from '@/lib/utils/simulateFetch'

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'
import { subcategoryRules } from './rules'
import { GenericSelect } from '@/components/common/selects'

interface IDialogDetailSubcategoryProps {
  subcategory: ISubCategory
  isOpenEdit: boolean
  setOpenEdit: Dispatch<boolean>
}

export const DialogEditSubcategory = ({ subcategory, isOpenEdit, setOpenEdit }: IDialogDetailSubcategoryProps) => {
  const formEditSubcategory = useForm<IFormEditSubcategory>()
  const [loading, setLoading] = useState(false)

  const onSubmitEditSubcategory = async (data: IFormEditSubcategory) => {
    setLoading(true)
    await simulateFetch(3000)

    console.log({ data })
  }

  return (
    <Dialog open={isOpenEdit} onOpenChange={setOpenEdit}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subcategoria</DialogTitle>

          <DialogDescription>Vista de detalle de la subcategoria</DialogDescription>
        </DialogHeader>

        <section className='w-full space-y-4'>
          <div className='w-full grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-y-3 gap-x-5'>
            <Input
              id='title'
              type='text'
              tabIndex={4}
              label='Titulo'
              placeholder='Pekkin'
              defaultValue={subcategory.title}
              register={formEditSubcategory.register}
              messageErrors={formEditSubcategory.formState.errors}
              inputErrors={subcategoryRules.title}
            />

            <GenericSelect
              tabIndex={5}
              id='isActive'
              label='Estado'
              placeholder='Seleccione un Estado'
              defaultValue={String(subcategory.isActive)}
              fieldControlled={{ control: formEditSubcategory.control, rules: subcategoryRules.isActive }}
              items={[
                {
                  label: 'Activo',
                  value: 'true'
                },
                {
                  label: 'Bloqueado',
                  value: 'false'
                }
              ]}
            />
          </div>

          <TextArea
            rows={5}
            tabIndex={6}
            id='description'
            label='Descripción'
            defaultValue={subcategory.description}
          />
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
            onClick={formEditSubcategory.handleSubmit(onSubmitEditSubcategory)}
          >
            Editar Subcategoria
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
