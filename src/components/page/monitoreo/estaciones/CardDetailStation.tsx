import { Card } from '@/components/common/cards'
import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'

export const CardDetailStation = () => {
  return (
    <div className='w-full max-w-md h-full relative'>
      <Card className='max-h-[calc(100vh-100px)] overflow-y-auto bg-main shadow-lg pb-4 sticky top-0 right-0'>
        <section className='w-full'>
          <img
            src='/images/estacion-origen.png'
            alt='estacion origen'
            className='w-full rounded-t-md h-40 object-cover'
          />
        </section>

        <section className='px-4 mt-4'>
          <h4 className='font-semibold'>Estacion de Origen</h4>

          <div className='my-2 border border-slate-100'></div>

          <div className='flex justify-between items-start gap-x-4'>
            <Input
              id='name'
              label='Nombre'
              readOnly
              value='Lorem ipsum dolor'
            />

            <Input
              id='status'
              label='Estatus'
              readOnly
              value='Lorem ipsum dolor'
            />
          </div>

          <div className='flex justify-between items-start gap-x-4'>
            <Input
              id='city'
              label='Estado'
              readOnly
              value='Distrito Federal'
            />

            <Input
              id='type'
              label='Tipo'
              readOnly
              value='Almacenamiento'
            />
          </div>

          <div className='w-full flex justify-between items-start mt-2'>
            <TextArea
              id='reference'
              className='w-full'
              label='Referencia'
              placeholder='Porem ipsum dolor sit amet, consectetur adipiscing elita'
            />
          </div>
        </section>
      </Card>
    </div>
  )
}
