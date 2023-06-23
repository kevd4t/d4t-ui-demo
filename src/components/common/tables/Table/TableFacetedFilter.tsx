import type { ReactNode } from '@/lib/types'
import { Column, Table } from '@tanstack/react-table'
import { Check, LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

import {
  Badge,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Separator,
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui'
import { useTableStore } from '@/lib/store/table'

interface IDataTableFacetedFilter<TData, TValue> {
  table?: Table<TData>
  column?: Column<TData, TValue>
  title?: string
  icon?: ReactNode
  queryFilterColumnID: string
  options: {
    label: string
    value: string | boolean
    icon?: LucideIcon
  }[]
}

export function TableFacetedFilter<TData, TValue> ({ queryFilterColumnID, column, title, icon, options }: IDataTableFacetedFilter<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues()
  const selectedValues = new Set(column?.getFilterValue() as string[])
  const { setFilters } = useTableStore()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='sm' className='py-5 border-dashed'>
          {icon}

          {title}

          {
            selectedValues?.size > 0 && (
              <>
                <Separator orientation='vertical' className='mx-2 h-4' />
                <Badge
                  variant='secondary'
                  className='rounded-sm px-1 font-normal lg:hidden'
                >
                  {selectedValues.size}
                </Badge>

                <div className='hidden space-x-1 lg:flex'>
                  {selectedValues.size > 2
                    ? (
                      <Badge
                        variant='secondary'
                        className='rounded-sm px-1 font-normal'
                      >
                        {selectedValues.size} selected
                      </Badge>
                    )
                    : (
                      options
                        .filter((option) => selectedValues.has(option.value.toString()))
                        .map((option) => (
                          <Badge
                            variant='secondary'
                            key={option.value.toString()}
                            className='rounded-sm px-1 font-normal'
                          >
                            {option.label}
                          </Badge>
                        ))
                    )}
                </div>
              </>
            )
          }
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-[200px] p-0' align='start'>
        <Command>
          <CommandInput placeholder={title} />

          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value.toString())
                return (
                  <CommandItem
                    key={option.value.toString()}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value.toString())
                      } else {
                        selectedValues.add(option.value.toString())
                      }

                      const filterValues = Array.from(selectedValues)

                      // const optionSelected = options.filter((option) => selectedValues.has(option.value.toString())).map(option => option.value)

                      setFilters({ [queryFilterColumnID]: filterValues })

                      column?.setFilterValue(filterValues.length ? filterValues : undefined)
                    }}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                        isSelected
                          ? 'bg-primary text-primary-foreground'
                          : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <Check className={cn('h-4 w-4')} />
                    </div>
                    {option.icon && (
                      <option.icon className='mr-2 h-4 w-4 text-muted-foreground' />
                    )}
                    <span>{option.label}</span>
                    {facets?.get(option.value) && (
                      <span className='ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs'>
                        {facets.get(option.value)}
                      </span>
                    )}
                  </CommandItem>
                )
              })}
            </CommandGroup>

            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />

                <CommandGroup>
                  <CommandItem
                    onSelect={() => {
                      column?.setFilterValue(undefined)
                      setFilters({ [queryFilterColumnID]: [] })
                    }}
                    className='justify-center text-center'
                  >
                    Limpiar Filtros
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
