import { InputUI, Label } from '@/components/ui'
import { cn } from '@/lib/utils'
import { IconEye, IconEyeClosed } from '@tabler/icons-react'
import { useState, type InputHTMLAttributes } from 'react'
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
  const [showPassword, setShowPassword] = useState(false)

  if (rest.type === 'password') {
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
            ? (
              <div className='relative'>
                <InputUI
                  {...rest}
                  {...register(id, inputErrors)}
                  className={cn('pr-14', rest.className)}
                  type={showPassword ? 'text' : 'password'}
                />

                <button
                  type='button'
                  tabIndex={-1}
                  onClick={() => setShowPassword(prevState => !prevState)}
                  className='absolute right-4 mr-0.5 top-2'
                >
                  {
                    showPassword
                      ? <IconEyeClosed />
                      : <IconEye />
                  }
                </button>
              </div>
            )
            : (
              <div className='relative'>
                <InputUI
                  {...rest}
                  className={cn('pr-14', rest.className)}
                  type={showPassword ? 'text' : 'password'}
                />

                <button
                  type='button'
                  tabIndex={-1}
                  onClick={() => setShowPassword(prevState => !prevState)}
                  className='absolute right-4 mr-0.5 top-2'
                >
                  {
                    showPassword
                      ? <IconEyeClosed />
                      : <IconEye />
                  }
                </button>
              </div>
            )
        }

      </div>
    )
  }

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
