'use client'

import type { UseFormReturn } from 'react-hook-form'
import * as React from 'react'

import { cn } from '../../lib/utils'
import { FieldPassword } from './field-password'
import { Field } from './field'


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

interface InputPropsBase extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'form' | 'type'> {
  id: string;
  label?: string;
  classNameContainer?: string;
  description?: string;
  type?: React.HTMLInputTypeAttribute;
  icon?: React.ReactElement;
  iconDirection?: 'left' | 'right';
}

interface InputPropsReadOnly extends InputPropsBase {
  readOnly: true;
}

interface InputPropsWithForm extends InputPropsBase {
  form: UseFormReturn<any, any, any>;
  readOnly?: false;
}

type InputProps = InputPropsReadOnly | InputPropsWithForm;

export function Input({ children, id, label, classNameContainer, description, icon, iconDirection = 'left', ...rest }: InputProps) {
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
      <FieldPassword
        id={id}
        validateInputIconClassNames={validateInputIconClassNames}
        classNameContainer={classNameContainer}
        iconDirection={iconDirection}
        description={description}
        label={label}
        // @ts-ignore
        form={rest?.form || null}
        rest={rest}
      />
    )
  }

  return (
    <Field
      id={id}
      validateInputIconClassNames={validateInputIconClassNames}
      classNameContainer={classNameContainer}
      iconDirection={iconDirection}
      description={description}
      label={label}
      // @ts-ignore
      form={rest?.form || null}
      rest={rest}
      icon={icon}
    />
  )
}

