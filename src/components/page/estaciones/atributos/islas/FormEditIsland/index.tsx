import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { z } from 'zod'

import { stationIslandSchema } from '@/lib/schemas/stations'
import { IPumpIsland } from '@/lib/types'

import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'
import { Button } from '@/components/ui'

export const FormEditIsland = ({ island }: { island: IPumpIsland }) => {
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
          defaultValue={island.identifier}
          fieldControlled={{
            control: form.control,
            formSelectClassName: 'w-full',
            rules: { required: { value: true, message: 'Requerido' } }
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
          label='Limite de dispensadores'
          defaultValue={island.maxDispensersAllowed}
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

        <GenericSelect
          id='status'
          tabIndex={5}
          label='Estatus'
          defaultValue={island.status}
          placeholder='Seleccione un Estado'
          fieldControlled={{ control: form.control, rules: { required: { value: true, message: 'Requerido' } } }}
          items={[
            {
              label: 'Operativo',
              value: 'OPERATIVE'
            },
            {
              label: 'En Mantenimiento',
              value: 'IN_MAINTENANCE'
            }
          ]}
        />
      </div>

      {
        form.watch('status')?.includes('IN_MAINTENANCE') && (
          <TextArea
            id='islandIssue'
            rows={3}
            tabIndex={6}
            label='Incidencia'
          />
        )
      }

      <Button>
        Crear Isla
      </Button>
    </form>
  )
}
