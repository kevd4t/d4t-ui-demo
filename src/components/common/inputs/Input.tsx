import { InputUI, Label } from '@/components/ui'
import { cn } from '@/lib/utils'
import type { InputHTMLAttributes } from 'react'
import type { RegisterOptions } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label?: string
  register?: any
  messageErrors?: any
  classNameContainer?: string
  inputErrors?: RegisterOptions<any>
}

export const Input = ({ children, id, register, messageErrors = null, label, classNameContainer, inputErrors = {}, ...rest }: InputProps) => {
  return (
    <div className={cn('w-full', classNameContainer)}>
      {
        label && (
          <Label htmlFor={id}>
            { label }&nbsp;
          </Label>

        )
      }

      {
        (id && !rest.readOnly)
          ? messageErrors[id] && <span className='text-sm font-normal text-red-500'>* {messageErrors[id]?.message}</span>
          : null
      }

      <div className='my-2'></div>
      {
        register
          ? (<InputUI {...register(id, inputErrors)} {...rest} />)
          : (<InputUI {...rest} />)
      }

    </div>
  )
}
