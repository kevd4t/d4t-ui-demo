import { PinField } from 'react-pin-field'
import { useState } from 'react'
import { toast } from 'sonner'

import { TSetRecoverAccountViewType } from '@/lib/types'
import { cn } from '@/lib/utils'

interface IDataVerificationCode {
  code: string
}

export const SendVerificationCode = ({ setRecoverAccountViewType }: { setRecoverAccountViewType: TSetRecoverAccountViewType }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [demoCompleted] = useState(false)

  const onComplete = async ({ code }: IDataVerificationCode) => {
    setIsLoading(true)

    setTimeout(async () => {
      const res = await fetch('/api/recover-account/code', {
        method: 'POST',
        body: JSON.stringify({ code })
      })

      if (!res.ok) {
        toast.error('Ha ocurrido un error')
        setIsLoading(false)
        return
      }

      const data = await res.json()

      toast.success(data.results.message)

      setIsLoading(false)
      setRecoverAccountViewType('SET_NEW_PASSWORD')
    }, 3000)
  }

  return (
    <div className='flex flex-col'>
      <div className='pin-field-container mt-2'>
        <PinField
          className={cn('pin-field', { complete: demoCompleted })}
          onComplete={(code) => onComplete({ code })}
          format={k => k.toUpperCase()}
          validate='0123456789'
          disabled={isLoading}
          tabIndex={1}
          autoFocus
        />
      </div>

      {
        isLoading && (
          <div className='mt-4 flex flex-col justify-start items-center whitespace-nowrap'>
            <div className='font-bold text-lg'>Validando Codigo</div>
            <div className='mt-1 dot-flashing'></div>
          </div>
        )
      }
    </div>
  )
}
