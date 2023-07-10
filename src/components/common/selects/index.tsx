import { FormField, FormItem, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui'
import { ReactNode, HTMLAttributes } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Control, RegisterOptions } from 'react-hook-form'

interface IGenericSelectItems {
  label: string
  icon?: ReactNode
  value: boolean | string | number
}

interface IGenericSelectProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  value?: string
  label: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  items?: IGenericSelectItems[]
  tabIndex?: number
  fieldControlled?: {
    rules?: RegisterOptions<any>
    control: Control<any, any>
    formItemClassName?: string
    formSelectClassName?: string
  }
}

export const GenericSelect = ({ id, value, label, defaultValue, onValueChange, placeholder, items, fieldControlled, tabIndex, ...rest }: IGenericSelectProps) => {
  if (fieldControlled) {
    return (
      <FormField
        control={fieldControlled.control}
        name={id}
        defaultValue={defaultValue}
        rules={fieldControlled?.rules || {}}
        render={({ field }) => (
          <FormItem className={cn('w-full', fieldControlled.formItemClassName)}>
            <Label>{label}</Label>

            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger tabIndex={tabIndex} className={cn('w-full', fieldControlled.formSelectClassName)}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>

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

  return (
    <div {...rest}>
      <Label htmlFor={id}>{ label }</Label> <br />

      <Select value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectTrigger className='w-[190px]'>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {
            items.map(item => (
              <SelectItem key={item.value?.toString()} value={item.value?.toString()}>
                <div className='flex justify-center items-center'>
                  <div className='dark:text-white mr-2 h-5'>
                    {item.icon}
                  </div>

                  {item.label}
                </div>
              </SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  )
}
