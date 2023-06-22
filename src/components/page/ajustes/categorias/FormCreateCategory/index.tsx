import { useForm } from 'react-hook-form'

import type { ICategoryToCreate } from '@/lib/types'
import { Input } from '@/components/common/inputs/Input'
import { Button, Label, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui'
import { TextArea } from '@/components/common/textarea'

export const FormCreateCategory = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ICategoryToCreate>()

  const onSubmit = (data: ICategoryToCreate) => {
    console.log({ data })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className='w-full h-full'>
        <div className='w-full h-full flex flex-col sm:flex-row justify-between items-start gap-x-6 gap-y-4'>
          <Input
            id='title'
            type='text'
            register={register}
            label='Titulo'
            placeholder='Ingrese titulo de la categoria'
            messageErrors={errors}
            inputErrors={{ required: { value: true, message: 'Titulo Requerido' } }}
            tabIndex={1}
            classNameContainer='w-full'
          />

          <div className='w-full'>
            <Label htmlFor='status'>
              Estado
            </Label>

            <div className='my-2'></div>

            <Select>
              <SelectTrigger id='status' className='w-full'>
                <SelectValue placeholder='Seleciona un Estado' />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Estatus</SelectLabel>
                  <SelectItem value='true'>Activo</SelectItem>
                  <SelectItem value='false'>Bloqueado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

          </div>
        </div>

        <TextArea
          id='description'
          label='Descripcion'
          register={register}
          placeholder='Ingrese titulo de la categoria'
          messageErrors={errors}
          inputErrors={{ required: { value: true, message: 'Descripcion Requerido' } }}
          tabIndex={1}
          classNameContainer='w-full mt-4'
        />
      </section>

      <section className='w-full h-full flex justify-end items-end mt-4'>
        <Button disabled>
          Crear Categoria
        </Button>
      </section>
    </form>
  )
}
