'use client'

import { UseFormReturn } from 'react-hook-form'
import type { ReactNode, HTMLAttributes } from 'react'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '..'
import { cn } from '../../lib/utils'

export interface IGenericSelectItems {
  label: string
  icon?: ReactNode
  value: boolean | string | number
}

export interface IGenericSelectProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  placeholder?: string
  tabIndex?: number
  items: IGenericSelectItems[]
  id: string
  form: UseFormReturn<any, any, any>
  label?: string
  classNameContainer?: string
  classNameSelect?: string
  description?: string
  disabled?: boolean
}

export const GenericSelect = ({
  id,
  label,
  defaultValue,
  placeholder,
  description,
  items,
  form,
  tabIndex,
  classNameContainer,
  classNameSelect,
  disabled
}: IGenericSelectProps) => {
  return (
    <FormField
      control={form.control}
      name={id}
      defaultValue={defaultValue}
      render={({ field, formState }) => (
        <FormItem className={cn('w-full', classNameContainer)}>
          <div className='flex justify-start items-end'>
            {label && <FormLabel className='flex'>{label}&nbsp;</FormLabel>}
            {formState?.errors[id]?.message && <span className='text-xs font-light text-destructive'>* {formState.errors[id].message as any}</span>}
          </div>

          {description && (<FormDescription className='text-xs'>{description}</FormDescription>)}

          <div className='my-2'></div>

          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={disabled}>
            <FormControl>
              <SelectTrigger disabled={disabled} tabIndex={tabIndex} className={cn('w-full', classNameSelect)}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {
                items.map(item => (
                  <SelectItem key={item.value?.toString()} value={item.value?.toString()}>
                    <div className='flex justify-center items-center'>
                      {
                        item?.icon && (
                          <div className='dark:text-white mr-2 h-5'>
                            {item.icon}
                          </div>
                        )
                      }

                      {item.label}
                    </div>
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}
