import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/common/selects'
import { Label } from '@/components/common/labels'
import { DatePickerWithRange } from '@/components/common/date-pickers'
import { Button } from '@/components/ui'

export const ScopeDataGraph = () => {
  return (
    <div className='w-full h-full flex justify-start items-end gap-x-4'>
      <div>
        <Label htmlFor='meterScope'>Alcance de Fechas</Label>

        <div className='my-2'></div>

        <DatePickerWithRange />
      </div>

      <div>
        <Label htmlFor='meterScope'>Alcance de medidores</Label>

        <div className='my-2'></div>

        <Select name='meterScope' defaultValue='all'>
          <SelectTrigger className='w-[200px]'>
            <SelectValue placeholder="Todos los Medidores" />
          </SelectTrigger>

          <SelectContent className='text-left'>
            <SelectItem value='all'>Todos los Medidores</SelectItem>
            <SelectItem value='selected'>Seleccionar Medidores</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Button>
          Aplicar
        </Button>
      </div>
    </div>
  )
}
