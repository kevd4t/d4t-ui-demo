import { Input } from '@/components/common/inputs/Input'
import { TextArea } from '@/components/common/textarea'
import { Badge, Button, Label } from '@/components/ui'
import { ScrollArea } from '@/components/ui/scroll-area'

export const DetailInfo = () => {
  return (
    <div className='fixed top-4 right-4 max-w-sm w-full z-10'>
      <ScrollArea className='bg-main rounded-md shadow-lg pb-4'>
        <div className='max-h-[calc(100vh-100px)]'>
          <section className='w-full'>
            <img
              src='/images/unidad-cisterna.png'
              alt='estacion origen'
              className='w-full rounded-t-md h-40 object-cover'
            />

            <div className='w-full'>
              <img
                src='/images/driver.png'
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
                value='Brayan'
              />

              <Input
                id='driverInfoLastName'
                label='Apellido'
                readOnly
                value='Lorenzo'
              />
            </div>

            <div className='flex justify-between items-start mt-2'>
              <Input
                id='driverInfoDNI'

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
                value='Unidad 34'
              />

              <Input
                id='truckInfoNumberRegistration'
                label='Matricula'
                readOnly
                value='A8BN4X'
              />
            </div>

            <div className='flex justify-between items-start gap-x-4'>
              <div className='w-full flex flex-col justify-between items-start mt-2'>
                <Label>Tipo</Label>

                <Badge className='w-full text-sm py-2 mt-2'>
                  Almacenamiento
                </Badge>
              </div>

              <div className='w-full flex flex-col justify-between items-start mt-2'>
                <Label>
                Estatus
                </Label>

                <Badge className='w-full text-sm py-2 mt-2 bg-green-100 border-green-500 text-green-500'>
                Operativo
                </Badge>
              </div>
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
                value='Flota 99'

              />

              <div className='w-full flex flex-col justify-between items-start mt-2'>
                <Label>
                Estatus
                </Label>

                <Badge className='w-full text-sm py-2 mt-2 bg-green-100 border-green-500 text-green-500'>
                Operativo
                </Badge>
              </div>
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
              <div className='w-full flex flex-col justify-between items-start mt-2'>
                <Label>
                Estatus
                </Label>

                <Badge className='w-full text-sm py-2 mt-2 bg-green-100 border-green-500 text-green-500'>
                Operativo
                </Badge>
              </div>
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
                value='Estacion El Palito'

              />

              <div className='w-full flex flex-col justify-between items-start mt-2'>
                <Label>
                Estatus
                </Label>

                <Badge className='w-full text-sm py-2 mt-2 bg-green-100 border-green-500 text-green-500'>
                Operativo
                </Badge>
              </div>
            </div>

            <div className='flex justify-between items-start gap-x-4 mt-2'>
              <Input
                id='originStationCity'
                label='Estado'
                readOnly
                value='Yaracuy'

              />

              <div className='w-full flex flex-col justify-between items-start mt-2'>
                <Label>Tipo</Label>

                <Badge className='w-full text-sm py-2 mt-2'>
                  Almacenamiento
                </Badge>
              </div>

            </div>

            <div className='flex justify-between items-start mt-2'>
              <TextArea
                id='originStationReference'

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
                value='PDV Mercedes'

              />

              <div className='w-full flex flex-col justify-between items-start mt-2'>
                <Label>
                Estatus
                </Label>

                <Badge className='w-full text-sm py-2 mt-2 bg-green-100 border-green-500 text-green-500'>
                Operativo
                </Badge>
              </div>
            </div>

            <div className='flex justify-between items-start gap-x-4 mt-2'>
              <Input
                id='destinyStationCity'
                label='Estado'
                readOnly
                value='Distrito Federal'

              />

              <div className='w-full flex flex-col justify-between items-start mt-2'>
                <Label>Tipo</Label>

                <Badge className='w-full text-sm py-2 mt-2'>
                  Almacenamiento
                </Badge>
              </div>

            </div>

            <div className='flex justify-between items-start mt-2'>
              <TextArea
                id='destinyStationReference'

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

                label='Numero de la Guia'
                readOnly
                value='J-4086MZX'
              />
            </div>

            <div className='flex flex-col justify-between items-start mt-2'>
              <div className='w-full h-full px-4 py-6 flex justify-center items-center bg-slate-200 rounded-md'>
                <img
                  src='/images/asset-pdf.png'
                  alt='pdf'
                  className='w-16'
                />
              </div>

              <Button className='w-full mt-2'>
                Descargar Guia
              </Button>
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  )
}
