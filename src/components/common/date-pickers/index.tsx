import * as React from 'react'
import { addDays, format, subDays } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'

import { cn } from '@/lib/utils'
import {
  Select,
  Popover,
  Button,
  Calendar,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui'

export function DatePickerWithRange ({
  className
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20)
  })

  // const onSelectDates = (value) => setDate(addDays(new Date(), parseInt(value)))
  const onSelectDates = (value) => console.log(subDays(new Date(), parseInt(value)))

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date?.from
              ? (
                date.to
                  ? (
                    <>
                      {format(date.from, 'LLL dd, y')} -{' '}
                      {format(date.to, 'LLL dd, y')}
                    </>
                  )
                  : (
                    format(date.from, 'LLL dd, y')
                  )
              )
              : (
                <span>Pick a date</span>
              )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className='flex w-auto flex-col space-y-2 p-2' align='start'>
          <Select onValueChange={onSelectDates} >
            <SelectTrigger>
              <SelectValue placeholder='Seleccione un Rango de Fecha' />
            </SelectTrigger>

            <SelectContent position='popper'>
              <SelectItem value='1'>Ayer</SelectItem>
              <SelectItem value='3'>Hace 3 dias</SelectItem>
              <SelectItem value='7'>Hace 1 Semana</SelectItem>
            </SelectContent>
          </Select>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
