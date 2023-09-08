import { Badge, Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, Popover, PopoverContent, PopoverTrigger, Separator, cn } from 'd4t-ui-demo'
import { useTableStore } from './store'
import { Check } from 'lucide-react'
import { ReactNode, useEffect } from 'react'
import { TableFilterOption } from './types'
import { IconAdjustments } from '@tabler/icons-react'

interface FacetedFilterProps {
  id: string
  label: string
  icon: ReactNode
  options: TableFilterOption[]
}

export const FacetedFilter = ({ id, icon, label, options }: FacetedFilterProps) => {
  const { selectOptionFilter, getFilterOptionsSelectedById: getOptionsSelectedById, resetFilters } = useTableStore()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='sm' className='py-5 border-dashed'>
          {icon || <IconAdjustments size={16} className='mr-2' />}

          {label}

          {
            getOptionsSelectedById(id).length > 0 && (
              <>
                <Separator orientation='vertical' className='mx-2 h-4' />

                <Badge
                  variant='secondary'
                  className='rounded-sm px-1 font-normal lg:hidden'
                >
                  {getOptionsSelectedById(id).length}
                </Badge>

                <div className='hidden space-x-1 lg:flex'>
                  {
                    getOptionsSelectedById(id).length > 2
                      ? (
                        <Badge
                          variant='secondary'
                          className='rounded-sm px-1 font-normal'
                        >
                          {getOptionsSelectedById(id).length} seleccionados
                        </Badge>
                      )
                      : (
                        // <div>epa</div>
                        options
                          .filter((option) => option.selected)
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
              getOptionsSelectedById(id).length > 0 && (
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
