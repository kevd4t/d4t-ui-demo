import { EHydrocarbon, IStation } from '@/lib/types'
import { Avatar, AvatarImage, Card, CardHeader, Separator, Badge, AvatarFallback, CardContent } from '@/components/ui'
import { IconBusStop } from '@tabler/icons-react'
import { APP_CONFIG } from '@/config'

export const CardResumeStation = ({ station }: { station: IStation }) => {
  return (
    <Card className='w-full sticky top-0 left-0'>
      <CardHeader>
        <Avatar className='w-full h-32 rounded-sm mx-auto'>
          <AvatarImage src={station?.images[0]?.url} className='object-contain w-full h-full' />

          <AvatarFallback className='rounded-md'>
            <IconBusStop className='text-zinc-500 w-10 h-10' />
          </AvatarFallback>
        </Avatar>
      </CardHeader>

      <CardContent>
        <h6 className='font-semibold'>Informacion Basica</h6>

        <ul className='mt-2'>
          <li className='flex justify-start items-center text-sm text-primary-gray'>
            <span className='font-semibold dark:text-white'>Título:</span> &nbsp;
            <span className='dark:text-gray-300'>{station.name}</span>
          </li>

          <li className='flex justify-start items-center text-sm text-primary-gray'>
            <span className='font-semibold dark:text-white'>RIF:</span> &nbsp;
            <span className='dark:text-gray-300'>{station.rif}</span>
          </li>

          <li className='flex justify-start items-center text-sm text-primary-gray'>
            <span className='font-semibold dark:text-white'>Modalidad:</span> &nbsp;
            <span className='dark:text-gray-300'>{station.modality}</span>
          </li>

          <li className='flex justify-start items-center text-sm text-primary-gray'>
            <span className='font-semibold dark:text-white'>Despacha Gasolina:</span> &nbsp;
            <span className='dark:text-gray-300'>{station.provider_services.includes(EHydrocarbon.GASOLINE) ? 'Si' : 'No'}</span>
          </li>

          <li className='flex justify-start items-center text-sm text-primary-gray'>
            <span className='font-semibold dark:text-white'>Despacha Disel:</span> &nbsp;
            <span className='dark:text-gray-300'>{station.provider_services.includes(EHydrocarbon.DIESEL) ? 'Si' : 'No'}</span>
          </li>

          <li className='flex justify-start items-center text-sm text-primary-gray'>
            <span className='font-semibold dark:text-white'>Tipo de Estación:</span> &nbsp;
            <span className='dark:text-gray-300'>{APP_CONFIG.STATION_TYPE[station.type].label}</span>
          </li>

          <li className='flex justify-start items-center text-sm text-primary-gray'>
            <span className='font-semibold dark:text-white'>Ubicación:</span> &nbsp;
            <span className='dark:text-gray-300'>{station.location.state}, {station.location.city}</span>
          </li>
        </ul>

        <Separator className='my-2' />

        <Badge className='w-full text-sm h-full py-1.5'>
          {station.state}
        </Badge>
      </CardContent>
    </Card>
  )
}
