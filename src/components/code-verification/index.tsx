import React, { HTMLAttributes } from 'react'
import { PinField } from 'react-pin-field'
import { cn } from '../../lib/utils'

export interface ICodeVerificationProps extends HTMLAttributes<HTMLDivElement> {
  complete: boolean
  onComplete: (code) => void
  validate?: string | RegExp | string[] | ((key: string) => boolean)
  disabled?: boolean
  tabIndex?: number
  autoFocus?: boolean
  format?: (char: string) => string
  containerClassName
}

export const CodeVerification = ({ complete, onComplete, validate, disabled, tabIndex, autoFocus, format, containerClassName }: ICodeVerificationProps) => {
  return (
    <div className={cn('pin-field-container', containerClassName)}>
      <PinField
        className={cn('pin-field', { complete })}
        onComplete={onComplete}
        format={format}
        validate={validate}
        disabled={disabled}
        tabIndex={tabIndex}
        autoFocus={autoFocus}
      />
    </div>
  )
}
