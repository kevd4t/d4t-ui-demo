'use client'

import { useState, useRef, useEffect, type ReactNode, useMemo } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Check, CircleX, EyeOff } from 'lucide-react'

import { ComboxItem, ComboxItemExtended } from './types'
import { cn } from '../../lib/utils'

import { FormDescription, FormField, FormItem, FormLabel, Badge, Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, Popover, PopoverContent, PopoverTrigger, buttonVariants } from '../'

interface CheckBoxFieldProps {
  form: UseFormReturn<any, any, any>
  id: string
  description: string
  icon: ReactNode
  placeholder: string
  label: string
  tabIndex: number
  items: ComboxItem[]
  classNameContainer?: string
  classNamePopover?: string
  disabled?: boolean
  selectAllLabel?: string
}

export const CheckboxField = (props: CheckBoxFieldProps) => {
  const { form, id, description, icon, placeholder, label, tabIndex, selectAllLabel, items, classNameContainer, classNamePopover, disabled } = props

  const defaultItems = form?.formState?.defaultValues[id]

  const formatItems = (item: ComboxItem): ComboxItemExtended => ({
    ...item,
    selected: defaultItems ? defaultItems.includes(item.value) : false
  })

  const [itemsExtended, setItemsExtended] = useState<ComboxItemExtended[]>(items.map(formatItems))
  const [isSelectAll, setIsSelectAll] = useState(false)
  const [open, setOpen] = useState(false)
  const [comboxWidth, setComboxWidth] = useState(null)
  const elementRef = useRef(null)

  // const itemsFormatted: ComboxItemExtended[] = useMemo(() => items.map(formatItems), [defaultItems, items])

  const getSelectedItems = useMemo(() => {
    return itemsExtended.filter((item) => item.selected).map((item) => item.value)
  }, [itemsExtended])

  const resetFilters = () => {
    const updatedItems = itemsExtended.map(item => ({ ...item, selected: false }))
    setItemsExtended(updatedItems)
    form.setValue(id, [], { shouldDirty: true })
  }

  const selectItemFilter = (itemId: string, selected: boolean) => {
    console.log('selectItemFilter', { itemId, selected })

    const updatedItems = itemsExtended.map(item => {
      if (item.id === itemId) {
        return { ...item, selected }
      }
      return item
    })

    setItemsExtended(updatedItems)

    const selectedValues = updatedItems.filter(item => item.selected).map(item => item.value)
    form.setValue(id, selectedValues, { shouldDirty: true })
  }

  const toggleSelectAllItems = () => {
    if (isSelectAll) {
      resetFilters()
      return setIsSelectAll(false)
    }

    setIsSelectAll(true)

    const updatedItems = itemsExtended.map(item => ({ ...item, selected: true }))
    console.log({ updatedItems })
    setItemsExtended(updatedItems)

    form.setValue(
      id,
      updatedItems.filter(item => item.selected).map(item => item.value),
      { shouldDirty: true }
    )
  }

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width
      setComboxWidth(width)
    })

    resizeObserver.observe(element)

    return () => {
      resizeObserver.unobserve(element)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <>
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

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild disabled={disabled}>
                  <Button
                    ref={elementRef}
                    type='button'
                    variant='outline'
                    size='sm'
                    disabled={disabled}
                    className='py-5 border w-full justify-start'
                    tabIndex={tabIndex}
                  >
                    {icon && icon}

                    {
                      !getSelectedItems.length && (
                        <span className='text-muted-foreground font-normal'>
                          {placeholder || 'Seleccione alguna opción'}
                        </span>
                      )
                    }

                    {
                      getSelectedItems.length > 0 && (
                        <>
                          <Badge
                            variant='secondary'
                            className='rounded-sm px-1 font-normal lg:hidden'
                          >
                            {getSelectedItems.length} seleccionados
                          </Badge>

                          <div className='hidden space-x-1 lg:flex'>
                            {
                              getSelectedItems.length > 2
                                ? (
                                  <Badge
                                    variant='secondary'
                                    className='rounded-sm px-1 font-normal'
                                  >
                                    {getSelectedItems.length} seleccionados
                                  </Badge>
                                )
                                : (
                                  itemsExtended
                                    .filter((item) => item.selected)
                                    .map((item) => {
                                      return (
                                        <Badge
                                          variant='secondary'
                                          key={item.value.toString()}
                                          className='rounded-sm px-1 font-normal'
                                        >
                                          {item.label}
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

                <style>
                  {`
                .combox-checkbox-content {
                    min-width: 150px !important;
                    width: ${comboxWidth + 24}px !important;
                  }

                  .checkbox-tooltip-content {
                    min-width: 150px !important;
                    width: ${comboxWidth + 10}px !important;
                  }
                `}
                </style>

                <PopoverContent
                  className={cn('w-full p-0 combox-checkbox-content', classNamePopover)}
                  align='start'
                >
                  <Command style={{ width: '50px !important' }}>
                    <CommandInput placeholder={label} />

                    <CommandList>
                      <CommandEmpty>Sin Resultados</CommandEmpty>

                      <CommandGroup>
                        <CommandItem onSelect={toggleSelectAllItems}>
                          <div
                            className={cn(
                              'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                              isSelectAll
                                ? 'bg-primary text-primary-foreground'
                                : 'opacity-50 [&_svg]:invisible'
                            )}
                          >
                            <Check className={cn('h-4 w-4')} />
                          </div>

                          <span className='truncate'>{selectAllLabel || 'Seleccionar todos'}</span>
                        </CommandItem>

                        <CommandSeparator className='my-2' />

                        {
                          itemsExtended.map((item) => {
                            return (
                              <CommandItem
                                disabled={item?.disabled}
                                key={item.value.toString()}
                                onSelect={() => {
                                  selectItemFilter(item.id, !item.selected)
                                }}
                              >
                                <div
                                  className={cn(
                                    'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                                    item.selected
                                      ? 'bg-primary text-primary-foreground'
                                      : 'opacity-50 [&_svg]:invisible'
                                  )}
                                >
                                  <Check className={cn('h-4 w-4')} />
                                </div>

                                {item.icon}

                                <span className='truncate'>{item.label}</span>
                              </CommandItem>
                            )
                          })
                        }
                      </CommandGroup>

                      <CommandSeparator />

                      <CommandGroup
                        className='[&_>_div]:flex [&_>_div]:w-full [&_>_div]:flex-row [&_>_div]:justify-between [&_>_div]:items-center [&_>_div]:gap-3'
                      >
                        {
                          getSelectedItems.length > 0 && (
                            <CommandItem
                              onSelect={() => {
                                form.setValue(id, [])
                                resetFilters()
                              }}
                              className={cn(buttonVariants({ variant: 'ghost' }), 'w-full aria-selected:bg-muted/50 h-fit py-1.5')}
                            >
                              <CircleX size={14} className='mr-2' />
                              Limpiar
                            </CommandItem>
                          )
                        }

                        <CommandItem
                          onSelect={() => setOpen(false)}
                          className={cn(buttonVariants({ variant: 'default' }), 'w-full aria-selected:bg-primary/80 aria-selected:!text-white h-fit py-1.5')}
                        >
                          <EyeOff size={14} className='mr-2' />
                          Cerrar
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )
        }}
      />
    </>
  )
}
