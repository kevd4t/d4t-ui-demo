'use client'

import { Label, TextareaUI } from '..'
import type { TextareaHTMLAttributes } from 'react'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register?: any
  messageErrors?: any
  label: string
  classNameContainer?: string
  inputErrors?: any
  id: string
}

export const TextArea = ({ children, id, register, messageErrors = null, label, classNameContainer, inputErrors = {}, ...rest }: InputProps) => {
  return (
    <div className={`w-full ${classNameContainer}`}>
      <Label>{ label }&nbsp;</Label>
      {
        ((id && !rest.readOnly) && messageErrors)
          ? messageErrors[id] && <span className='text-sm text-red-500'>* {messageErrors[id]?.message}</span>
          : null
      }

      <div className='my-2'></div>

      {
        register
          ? (<TextareaUI {...register(id, inputErrors)} {...rest} />)
          : (<TextareaUI {...rest} />)
      }

    </div>
  )
}
