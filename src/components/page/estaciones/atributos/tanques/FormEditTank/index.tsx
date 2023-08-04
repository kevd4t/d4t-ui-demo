import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { z } from 'zod'

import { stationIslandSchema } from '@/lib/schemas/stations'

import { Button, Card, CardContent, CardTitle, Separator } from '@/components/ui'
import { GenericSelect } from '@/components/common/selects'
import { Input } from '@/components/common/inputs/Input'
import { IStationTanks } from '@/lib/types'

const tankIdentifiers = [
  {
    id: 'e190f96d-d703-4c6d-816f-1fafee68273b',
    identifier: '1'
  },
  {
    id: 'e190f96d-d703-4c6d-816f-1fafee6827Zb',
    identifier: '2'
  }
]

export const FormEditTank = ({ tank }: { tank: IStationTanks }) => {
  const form = useForm<z.infer<typeof stationIslandSchema>>()
  const { push, query } = useRouter()

  const onSubmit = (data: z.infer<typeof stationIslandSchema>) => {
    push(`/estaciones/${query?.id}/dispensadores/crear`)
  }

  return (
    <div>
      <Card className='p-4 mt-6 w-full'>
        <CardTitle>Informacion Basica</CardTitle>

        <Separator className='my-4' />

        <CardContent className='p-0'>
          <form onSubmit={form.handleSubmit(onSubmit)} autoFocus className='w-full space-y-4'>
            <div className='w-full flex justify-between items-end gap-x-4'>
              <GenericSelect
                id='identifier'
                tabIndex={1}
                label='Identificador'
                className='w-full'
                placeholder='Seleccione un identificador'
                defaultValue={tank.identifier}
                fieldControlled={{
                  control: form.control,
                  formSelectClassName: 'w-full',
                  rules: { required: { value: true, message: 'Requerido' } }
                }}
                items={tankIdentifiers.map(tank => ({
                  label: `Tanque N.${tank.identifier}`,
                  value: tank.id
                }))}
              />

              <Input
                id='capacity'
                type='number'
                tabIndex={3}
                label='Capacidad'
                className='w-full'
                placeholder='000'
                max={999}
                maxLength={3}
                defaultValue={tank.capacity}
                register={form.register}
                messageErrors={form.formState.errors}
                inputErrors={{ required: { value: true, message: 'Requerido' } }}
              />
            </div>

            <div className='w-full flex justify-between items-end gap-x-4'>
              <GenericSelect
                id='type'
                tabIndex={4}
                label='Tipo de tanque'
                className='w-full'
                placeholder='Seleccione tipo de tanque'
                defaultValue={tank.type || 'Tipo 1'}
                fieldControlled={{
                  control: form.control,
                  formSelectClassName: 'w-full',
                  rules: { required: { value: true, message: 'Requerido' } }
                }}
                items={[
                  {
                    label: 'Tipo 1',
                    value: 'Tipo 1'
                  },
                  {
                    label: 'Tipo 2',
                    value: 'Tipo 2'
                  },
                  {
                    label: 'Tipo 3',
                    value: 'Tipo 3'
                  }
                ]}
              />

              <GenericSelect
                id='status'
                tabIndex={5}
                label='Estatus'
                className='w-full'
                placeholder='Seleccione una isla'
                defaultValue={tank.status || 'OPERATIVE'}
                fieldControlled={{
                  control: form.control,
                  formSelectClassName: 'w-full',
                  rules: {
                    required: { value: true, message: 'Requerido' }
                  }
                }}
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
          </form>
        </CardContent>
      </Card>

      <Button
        type='submit'
        tabIndex={16}
        className='w-full py-2 text-sm mt-4'
        onClick={form.handleSubmit(onSubmit)}
      >
        Crear Tanque
      </Button>
    </div>
  )
}
