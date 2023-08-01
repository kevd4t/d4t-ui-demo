import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { stationIslandSchema } from '@/lib/schemas/stations'
import { IPumpIsland } from '@/lib/types'

import { Input } from '@/components/common/inputs/Input'
import { Button } from '@/components/ui'

export const FormEditIsland = ({ island }: { island: IPumpIsland }) => {
  const { handleSubmit, register, formState: { errors } } = useForm<z.infer<typeof stationIslandSchema>>()

  const onSubmit = (data: z.infer<typeof stationIslandSchema>) => {
    console.log({ data })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoFocus className='w-full space-y-4'>
      <Input
        id='name'
        type='number'
        tabIndex={1}
        label='Cantidad Maxima de Picos'
        placeholder='0-6 '
        register={register}
        min={0}
        max={10}
        maxLength={2}
        minLength={1}
        messageErrors={errors}
      />

      <Button>
        Crear Isla
      </Button>
    </form>
  )
}
