import type { ICategoryWithSubCategories } from '@/lib/types'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

export const FormDetailCategoryDisabled = ({ title, description, isActive }: ICategoryWithSubCategories) => {
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

            disabled
            value={title}
            readOnly
          />

          <div className='w-full'>
            <Input
              id='status'
              type='text'
              label='Estado'
              tabIndex={2}

              disabled
              value={isActive ? 'Activo' : 'Bloqueado'}
              readOnly
            />
          </div>
        </div>

        <TextArea
          id='description'
          label='Descripcion'
          placeholder='Ingrese titulo de la categoria'
          classNameContainer='w-full mt-4'
          tabIndex={3}
          value={description}
          readOnly
          disabled
        />
      </section>
    </form>
  )
}
