import { useState, useRef, useEffect } from 'react'
import { Check } from 'lucide-react'

import { FormDescription, FormField, FormItem, FormLabel, Badge, Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, Popover, PopoverContent, PopoverTrigger, Label } from '../'
import { cn } from '../../lib/utils'
import { LocalOption } from './types'

export const CheckboxField = ({ form, id, description, icon, placeholder, label, tabIndex, options, classNameContainer, classNamePopover }) => {
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


  const defaultOptions = form?.formState?.defaultValues[id]
  const optionsFormatted: LocalOption[] = options.map(option => ({
    ...option,
    selected: defaultOptions ? defaultOptions.includes(option.value) : false
  }))

  const [localOptions, setLocalOptions] = useState<LocalOption[]>(optionsFormatted)

  const getSelectedOptions = (filterId) => {
    const selectedOptions = localOptions.filter((option) => option.selected).map((option) => option.value)
    return selectedOptions
  }

  const resetFilters = () => setLocalOptions(prevState => prevState.map(option => ({ ...option, selected: false })))

  const selectOptionFilter = (optionId, optionValue) => {
    const options = localOptions.map((option) => {
      if (option.id === optionId) {
        return { ...option, selected: optionValue }
      }
      return option
    })

    setLocalOptions(options)
    form.setValue(id, options.filter((option) => option.selected).map((option) => option.value))
  }

  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field, formState }) => {
        return (
          <FormItem className={cn('w-full space-y-2', classNameContainer)}>
            <div className='flex justify-start items-end'>
              {label && <FormLabel className='flex'>{label}&nbsp;</FormLabel>}
              {formState?.errors[id]?.message && <span className='text-xs font-light text-destructive'>* {formState.errors[id].message as any}</span>}
            </div>

            {description && (<FormDescription className='text-xs'>{description}</FormDescription>)}

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
                    !getSelectedOptions(id).length && (
                      <span className='text-muted-foreground font-normal'>
                        {placeholder || 'Seleccione alguna opción'}
                      </span>
                    )
                  }

                  {
                    getSelectedOptions(id).length > 0 && (
                      <>
                        <Badge
                          variant='secondary'
                          className='rounded-sm px-1 font-normal lg:hidden'
                        >
                          {getSelectedOptions(id).length} seleccionados
                        </Badge>

                        <div className='hidden space-x-1 lg:flex'>
                          {
                            getSelectedOptions(id).length > 2
                              ? (
                                <Badge
                                  variant='secondary'
                                  className='rounded-sm px-1 font-normal'
                                >
                                  {getSelectedOptions(id).length} seleccionados
                                </Badge>
                              )
                              : (
                                localOptions
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

              <PopoverContent style={{ width: comboxWidth + 24 }} className={cn('w-full p-0', classNamePopover)} align='start'>
                <Command>
                  <CommandInput placeholder={label} />

                  <CommandList>
                    <CommandEmpty>Sin Resultados</CommandEmpty>

                    <CommandGroup>
                      {
                        localOptions.map((option) => {
                          return (
                            <CommandItem
                              key={option.value.toString()}
                              onSelect={() => {
                                if (option.selected) {
                                  selectOptionFilter(option.id, false)
                                } else {
                                  selectOptionFilter(option.id, true)
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
                            </CommandItem>
                          )
                        })
                      }
                    </CommandGroup>

                    {
                      getSelectedOptions(id).length > 0 && (
                        <>
                          <CommandSeparator />

                          <CommandGroup>
                            <CommandItem
                              onSelect={() => {
                                form.setValue(id, [])
                                resetFilters()
                              }}
                              className='justify-center text-center'
                            >
                              Limpiar
                            </CommandItem>
                          </CommandGroup>
                        </>
                      )
                    }
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </FormItem>
        )
      }}
    />
  )
}
