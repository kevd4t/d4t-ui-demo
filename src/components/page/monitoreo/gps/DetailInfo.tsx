import { Input } from '@/components/common/inputs/Input'

export const DetailInfo = () => {
  return (
    <div className='fixed top-4 right-4 max-w-sm w-full z-10'>
      <article className='max-h-[calc(100vh-100px)] overflow-y-scroll bg-white dark:bg-dark rounded-md shadow-lg pb-4'>
        <section className='w-full'>
          <img
            src='/images/estacion-origen.png'
            alt='estacion origen'
            className='w-full rounded-t-md h-40 object-cover'
          />

          <div className='w-full'>
            <img
              src='/images/user-rounded.png'
              alt='estacion origen'
              className='object-cover w-20 -mt-10 mx-auto'
            />
          </div>
        </section>

        <section className='px-4 mt-4'>
          <h4 className='font-semibold'>Informacion del Chofer</h4>

          <div className='my-2 border border-slate-100'></div>

          <div className='flex justify-between items-start gap-x-4'>
            <Input
              id='driverInfoName'
              label='Nombre'
              readOnly
              value='Lorem ipsum dolor'
            />

            <Input
              id='driverInfoLastName'
              label='Apellido'
              readOnly
              value='Lorem ipsum dolor'
            />
          </div>

          <div className='flex justify-between items-start mt-2'>
            <Input
              id='driverInfoDNI'
              classNameContainer='w-full'
              label='Cedula de Identidad'
              readOnly
              value='12.345.678'
            />
          </div>
        </section>

        <section className='px-4 mt-4'>
          <h4 className='font-semibold'>Informacion de la Unidad</h4>

          <div className='my-2 border border-slate-100'></div>

          <div className='flex justify-between items-start gap-x-4'>
            <Input
              id='truckInfoName'
              label='Nombre'
              readOnly
              value='Lorem ipsum dolor'
            />

            <Input
              id='truckInfoNumberRegistration'
              label='Matricula'
              readOnly
              value='Lorem ipsum dolor'
            />
          </div>

          <div className='flex justify-between items-start gap-x-4'>
            <Input
              id='truckInfoType'
              label='Tipo'
              readOnly
              value='Lorem ipsum dolor'
            />

            <Input
              id='truckInfoFleet'
              label='Flota'
              readOnly
              value='Lorem ipsum dolor'
            />
          </div>

          <div className='flex justify-between items-start mt-2'>
            <Input
              id='truckInfoStatus'
              classNameContainer='w-full'
              label='Estatus'
              readOnly
              value='Operativo'
            />
          </div>
        </section>

        <section className='px-4 mt-4'>
          <h4 className='font-semibold'>Informacion de la Flota</h4>

          <div className='my-2 border border-slate-100'></div>

          <div className='flex justify-between items-start gap-x-4'>
            <Input
              id='fleetInfoName'
              label='Nombre'
              readOnly
              value='Lorem ipsum dolor'
            />

            <Input
              id='fleetInfoStatus'
              label='Estatus'
              readOnly
              value='Operativo'
            />
          </div>

        </section>

        <section className='px-4 mt-4'>
          <h4 className='font-semibold'>Informacion del GPS</h4>

          <div className='my-2 border border-slate-100'></div>

          <div className='flex justify-between items-start gap-x-4'>
            <Input
              id='gpsInfoSerial'
              label='Serial'
              readOnly
              value='J-4086MZX'
            />

            <Input
              id='gpsInfoModel'
              label='Modelo'
              readOnly
              value='AS85BN'
            />
          </div>

          <div className='flex justify-between items-start mt-2'>
            <Input
              id='originStationStatus'
              classNameContainer='w-full'
              label='Estatus'
              readOnly
              value='Operativo'
            />
          </div>
        </section>

        <section className='px-4 mt-4'>
          <h4 className='font-semibold'>Estacion de Origen</h4>

          <div className='my-2 border border-slate-100'></div>

          <div className='flex justify-between items-start gap-x-4'>
            <Input
              id='originStationName'
              label='Nombre'
              readOnly
              value='Lorem ipsum dolor'
            />

            <Input
              id='originStationStatus'
              label='Estado'
              readOnly
              value='Lorem ipsum dolor'
            />
          </div>

          <div className='flex justify-between items-start gap-x-4'>
            <Input
              id='originStationCity'
              label='Ciudad'
              readOnly
              value='Lorem ipsum dolor'
            />

            <Input
              id='originStationType'
              label='Tipo'
              readOnly
              value='Almacenamiento'
            />
          </div>

          <div className='flex justify-between items-start mt-2'>
            <Input
              id='originStationReference'
              classNameContainer='w-full'
              label='Referencia'
              readOnly
              value='Porem ipsum dolor sit amet, consectetur adipiscing elita'
            />
          </div>
        </section>

        <section className='px-4 mt-4'>
          <h4 className='font-semibold'>Estacion de Destino</h4>

          <div className='my-2 border border-slate-100'></div>

          <div className='flex justify-between items-start gap-x-4'>
            <Input
              id='destinyStationName'
              label='Nombre'
              readOnly
              value='Lorem ipsum dolor'
            />

            <Input
              id='destinyStationState'
              label='Estado'
              readOnly
              value='Lorem ipsum dolor'
            />
          </div>

          <div className='flex justify-between items-start gap-x-4'>
            <Input
              id='destinyStationCity'
              label='Ciudad'
              readOnly
              value='Lorem ipsum dolor'
            />

            <Input
              id='destinyStationType'
              label='Tipo'
              readOnly
              value='Surtido'
            />
          </div>

          <div className='flex justify-between items-start mt-2'>
            <Input
              id='destinyStationReference'
              classNameContainer='w-full'
              label='Referencia'
              readOnly
              value='Porem ipsum dolor sit amet, consectetur adipiscing elita'
            />
          </div>
        </section>

        <section className='px-4 mt-4'>
          <h4 className='font-semibold'>Informacion de la Guia</h4>

          <div className='my-2 border border-slate-100'></div>

          <div className='flex justify-between items-start mt-2'>
            <Input
              id='guideName'
              classNameContainer='w-full'
              label='Numero de la Guia'
              readOnly
              value='J-4086MZX'
            />
          </div>

          <div className='flex justify-between items-start mt-2'>
            <label className='block'>
              <span className='sr-only'>Choose profile photo</span>
              <input type='file' className='block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
              '/>
            </label>
          </div>
        </section>
      </article>
    </div>
  )
}
