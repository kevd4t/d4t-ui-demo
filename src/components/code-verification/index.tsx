import React, { HTMLAttributes } from 'react'
import { PinField, PinFieldProps } from 'react-pin-field'
import { cn } from '../../lib/utils'

export interface ICodeVerificationProps extends PinFieldProps {
  complete: boolean
  containerClassName?: string
}

export const CodeVerification = ({ complete, onComplete, validate, disabled, tabIndex, autoFocus, format, containerClassName, className, ...rest }: ICodeVerificationProps) => {
  return (
    <div className={cn('pin-field-container', containerClassName)}>
      <PinField
        className={cn('pin-field', { complete }, className)}
        onComplete={onComplete}
        format={format}
        validate={validate}
        disabled={disabled}
        tabIndex={tabIndex}
        autoFocus={autoFocus}
        {...rest}
      />
    </div>
  )
}
