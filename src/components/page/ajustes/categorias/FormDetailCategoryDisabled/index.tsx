import type { ICategory } from '@/lib/types'
import { Input } from '@/components/common/inputs/Input'
import { Label, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui'
import { TextArea } from '@/components/common/textarea'

export const FormDetailCategoryDisabled = ({ title, description, isActive }: ICategory) => {
  return (
    <form>
      <section className='w-full h-full'>
        <div className='w-full h-full flex flex-col sm:flex-row justify-between items-start gap-x-6 gap-y-4'>
          <Input
            id='title'
            type='text'
            label='Titulo'
            placeholder='Ingrese titulo de la categoria'
            tabIndex={1}
            classNameContainer='w-full'
            disabled
            value={title}
            readOnly
          />

          <div className='w-full'>
            <Label htmlFor='status'>
              Estado
            </Label>

            <div className='my-2'></div>

            <Select defaultValue={`${isActive}`} disabled>
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
          placeholder='Ingrese titulo de la categoria'
          classNameContainer='w-full mt-4'
          tabIndex={1}
          value={description}
          readOnly
          disabled
        />
      </section>
    </form>
  )
}
