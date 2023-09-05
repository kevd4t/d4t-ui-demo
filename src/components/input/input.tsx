'use client'

import type { UseFormReturn } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'
import * as React from 'react'

import { cn } from '../../lib/utils'
import { FormField, FormItem, FormLabel, FormControl, FormDescription } from '..'
import { formatCI } from '../../lib/utils/formatters'
import { handleOnlyNumbers } from '../../lib/utils/keyUpCI'


export interface InputUIProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const InputUI = React.forwardRef<HTMLInputElement, InputUIProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

InputUI.displayName = 'InputUI'

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form' | 'type'> {
  id: string
  form: UseFormReturn<any, any, any>
  label?: string
  classNameContainer?: string
  description?: string
  type: React.HTMLInputTypeAttribute | 'pidNumber'
  icon?: React.ReactElement
  iconDirection?: 'left' | 'right'
}

export function Input({ children, id, form, label, classNameContainer, description, defaultValue, icon, iconDirection = 'left', ...rest }: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleOnKeyUppidNumber = (event) => {
    const { value } = event.target
    const identifierNumberFormmated = formatCI(value)
    form.setValue('identifier', { dni: { number: identifierNumberFormmated } })
  }

  const validateInputIconClassNames = () => {
    if (iconDirection === 'left') {
      if (icon || rest.type === 'password') return 'pl-9'
      else ''
    }

    if (iconDirection === 'right') {
      return 'pr-9'
    }

    return ''
  }

  if (rest.type === 'password') {
    return (
      <FormField
        control={form.control}
        defaultValue={defaultValue}
        name={id}
        render={({ field, formState }) => (
          <FormItem className={cn('w-full', classNameContainer)}>
            <div className='flex justify-start items-end'>
              {label && <FormLabel className='flex'>{label}&nbsp;</FormLabel>}
              {formState?.errors[id]?.message && <span className='text-xs font-light text-destructive'>* {formState.errors[id].message as any}</span>}
            </div>

            {description && (<FormDescription className='text-xs'>{description}</FormDescription>)}

            <div className='my-2'></div>

            <FormControl>
              <div className='relative'>
                {
                  (iconDirection === 'left') && (
                    <>
                      <button
                        type='button'
                        onClick={() => setShowPassword(prevState => !prevState)}
                        className='absolute inset-y-0 left-0 flex items-center pl-3 z-50'
                      >
                        {
                          showPassword
                            ? <Eye size={18} />
                            : <EyeOff size={18} />
                        }
                      </button>
                    </>
                  )
                }

                <InputUI
                  {...field}
                  {...rest}
                  className={cn(validateInputIconClassNames(), rest.className)}
                  type={showPassword ? 'text' : 'password'}
                />

                {
                  (iconDirection === 'right') && (
                    <div className='absolute inset-y-0 right-0 flex items-center pr-3 z-10'>
                      <button
                        type='button'
                        tabIndex={-1}
                        onClick={() => setShowPassword(prevState => !prevState)}
                      >
                        {
                          showPassword
                            ? <Eye size={18} />
                            : <EyeOff size={18} />
                        }
                      </button>
                    </div>
                  )
                }
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    )
  }

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

          <div className='relative'>
            {
              (iconDirection === 'left' && icon) && (
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                  {icon}
                </div>
              )
            }

            <FormControl>
              <InputUI
                {...field}
                {...rest}
                className={validateInputIconClassNames()}
              />
            </FormControl>

            {
              (iconDirection === 'right' && icon) && (
                <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                  {icon}
                </div>
              )
            }
          </div>
        </FormItem>
      )}
    />
  )
}

