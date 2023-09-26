import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'

import { cn } from '../../lib/utils'

import { Label, Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, Popover, PopoverContent, PopoverTrigger, Badge, CommandList } from '..'

export const ComboboxCheckboxReadOnly = ({ description, icon, placeholder, label, tabIndex, options, classNameContainer, classNamePopover, defaultValue }) => {
  const elementRef = useRef(null)
  const [comboxWidth, setComboxWidth] = useState(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    // Crea una instancia de ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width
      setComboxWidth(width)
    })

    // Observa el elemento
    resizeObserver.observe(element)

    // Limpia la instancia de ResizeObserver cuando el componente se desmonta
    return () => {
      resizeObserver.unobserve(element)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div className={cn('w-full space-y-2', classNameContainer)}>
      <div className='flex justify-start items-end'>
        {label && <Label className='flex'>{label}&nbsp;</Label>}
      </div>

      {description && (<p className='text-xs'>{description}</p>)}

      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={elementRef}
            type='button'
            variant='outline'
            size='sm'
            className='py-5 border w-full justify-start'
            tabIndex={tabIndex}
          >
            {icon && icon}

            {
              !defaultValue.length && (
                <span className='text-muted-foreground font-normal'>
                  {placeholder || 'Seleccione alguna opción'}
                </span>
              )
            }

            {
              defaultValue.length > 0 && (
                <>
                  <Badge
                    variant='secondary'
                    className='rounded-sm px-1 font-normal lg:hidden'
                  >
                    {defaultValue.length} seleccionados
                  </Badge>

                  <div className='hidden space-x-1 lg:flex'>
                    {
                      defaultValue.length > 2
                        ? (
                          <Badge
                            variant='secondary'
                            className='rounded-sm px-1 font-normal'
                          >
                            {defaultValue.length} seleccionados
                          </Badge>
                        )
                        : (
                          defaultValue
                            .map((option) => {
                              return (
                                <Badge
                                  variant='secondary'
                                  key={option}
                                  className='rounded-sm px-1 font-normal'
                                >
                                  {option}
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

        <PopoverContent style={{ width: comboxWidth + 24 }} className={cn('w-full p-0', classNamePopover)} align='start'>
          <Command>
            <CommandInput placeholder={label} />

            <CommandList>
              <CommandEmpty>Sin Resultados</CommandEmpty>

              <CommandGroup>
                {
                  defaultValue.map((option) => {
                    return (
                      <CommandItem
                        key={option}
                        disabled
                      >
                        <div
                          className={cn(
                            'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground',
                            // option
                            //   ? 'bg-primary text-primary-foreground'
                            //   : 'opacity-50 [&_svg]:invisible'
                          )}
                        >
                          <Check className={cn('h-4 w-4')} />
                        </div>

                        <span>{option}</span>
                      </CommandItem>
                    )
                  })
                }
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
