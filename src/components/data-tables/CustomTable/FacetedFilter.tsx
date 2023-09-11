import { IconAdjustments } from '@tabler/icons-react'
import { ReactNode, useContext } from 'react'
import { Check } from 'lucide-react'

import { TableFilterOption } from './types'
import { TableContext } from './store'

import { Badge, Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, Popover, PopoverContent, PopoverTrigger, Separator } from '../..'
import { cn } from '../../../lib/utils'

interface FacetedFilterProps {
  id: string
  label: string
  icon: ReactNode
  options: TableFilterOption[]
}

export const FacetedFilter = ({ id, icon, label, options }: FacetedFilterProps) => {
  const { selectOptionFilter, getFilterOptionsSelectedById, resetFilters } = useContext(TableContext)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='sm' className='py-5 border-dashed'>
          {icon || <IconAdjustments size={16} className='mr-2' />}

          {label}

          {
            getFilterOptionsSelectedById(id).length > 0 && (
              <>
                <Separator orientation='vertical' className='mx-2 h-4' />

                <Badge
                  variant='secondary'
                  className='rounded-sm px-1 font-normal lg:hidden'
                >
                  {getFilterOptionsSelectedById(id).length}
                </Badge>

                <div className='hidden space-x-1 lg:flex'>
                  {
                    getFilterOptionsSelectedById(id).length > 2
                      ? (
                        <Badge
                          variant='secondary'
                          className='rounded-sm px-1 font-normal'
                        >
                          {getFilterOptionsSelectedById(id).length} seleccionados
                        </Badge>
                      )
                      : (
                        options
                          .filter((option) => option.selected)
                          .map((option) => {
                            return (
                              <Badge
                                variant='secondary'
                                key={option.value.toString()}
                                className='rounded-sm px-1 font-normal'
                              >
                                {option.label}
                              </Badge>
                            )
                          })
                      )}
                </div>
              </>
            )
          }
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-[200px] p-0' align='start'>
        <Command>
          <CommandInput placeholder={label} />

          <CommandList>
            <CommandEmpty>Sin Resultados</CommandEmpty>

            <CommandGroup>
              {
                options.map((option) => {
                  return (
                    <CommandItem
                      key={option.value.toString()}
                      onSelect={() => {
                        if (option.selected) {
                          selectOptionFilter(id, option.id, false)
                        } else {
                          selectOptionFilter(id, option.id, true)
                        }
                      }}
                    >
                      <div
                        className={cn(
                          'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                          option.selected
                            ? 'bg-primary text-primary-foreground'
                            : 'opacity-50 [&_svg]:invisible'
                        )}
                      >
                        <Check className={cn('h-4 w-4')} />
                      </div>

                      {option.icon}

                      <span>{option.label}</span>
                      {/* {
                      facets?.get(option.value) && (
                        <span className='ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs'>
                          {facets.get(option.value)}
                        </span>
                      )
                    } */}
                    </CommandItem>
                  )
                })
              }
            </CommandGroup>

            {
              getFilterOptionsSelectedById(id).length > 0 && (
                <>
                  <CommandSeparator />

                  <CommandGroup>
                    <CommandItem
                      onSelect={() => resetFilters()}
                      className='justify-center text-center'
                    >
                      Limpiar Filtros
                    </CommandItem>
                  </CommandGroup>
                </>
              )
            }
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
