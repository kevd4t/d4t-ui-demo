import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { z } from 'zod'

import { stationIslandSchema } from '@/lib/schemas/stations'

import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { Button } from '@/components/ui'

export const FormCreateIsland = () => {
  const form = useForm<z.infer<typeof stationIslandSchema>>()
  const { push, query } = useRouter()

  const onSubmit = (data: z.infer<typeof stationIslandSchema>) => {
    console.log({ data })
    push(`/estaciones/${query?.id}/dispensadores/crear`)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} autoFocus className='w-full space-y-4'>
      <div className='w-full flex justify-between items-end gap-x-4'>
        <GenericSelect
          id='identifier'
          tabIndex={1}
          label='Identificador'
          defaultValue='1'
          fieldControlled={{
            control: form.control,
            formSelectClassName: 'w-full',
            rules: {
              required: { value: true, message: 'Requerido' }
            }
          }}
          className='w-full'
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => ({
            label: `Isla N.${item.toString()}`,
            value: item.toString()
          }))}
        />

        <Input
          id='maxDispensersAllowed'
          type='number'
          tabIndex={2}
          label='Cantidad Maxima de Dispensadores'
          className='w-full'
          placeholder='0-6 '
          register={form.register}
          min={0}
          max={10}
          maxLength={2}
          minLength={1}
          messageErrors={form.formState.errors}
          inputErrors={{ required: { value: true, message: 'Requerido' } }}
        />
      </div>

      <Button>
        Crear Isla
      </Button>
    </form>
  )
}
