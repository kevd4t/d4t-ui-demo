import { cn } from '../lib/utils'

export const PinField = ({ complete, onComplete, disabled, format, validate, tabIndex, autoFocus }: any) => {
  return (
    <div className='pin-field-container mt-2'>
      <PinField
        className={cn('pin-field', { complete })}
        onComplete={onComplete}
        format={format}
        validate={validate}
        disabled={disabled}
        tabIndex={tabIndex}
        autoFocus
      />
    </div>
  )
}
