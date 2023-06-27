import { InputUI, Label } from '@/components/ui'
import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  messageErrors?: any
  label: string
  classNameContainer?: string
  inputErrors?: any
  id: string
}

export const Input = ({ children, id, register, messageErrors = null, label, classNameContainer, inputErrors = {}, ...rest }: InputProps) => {
  return (
    <div className={classNameContainer}>
      <Label htmlFor={id}>{ label }</Label> <br />
      {
        (id && !rest.readOnly)
          ? messageErrors[id] && <span className='text-sm text-red-500'>* {messageErrors[id]?.message}</span>
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
