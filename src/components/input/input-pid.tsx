import type { UseFormReturn } from 'react-hook-form'

import { handleOnlyNumbers, formatCI } from '../../lib/utils/keyUpCI'
import { CI_TYPES } from "../../lib/utils/CI_TYPES"

import { ComboBox, Input } from '..'

type TCITypesKeys = 'VENEZUELAN' | 'JURIDICAL' | 'FOREIGN' | 'PASSPORT' | 'GOVERNMENTAL'

export const formatCITypes = (selectedTypes?: TCITypesKeys[]) => {
  const allCITypes = [
    CI_TYPES.VENEZUELAN,
    CI_TYPES.JURIDICAL,
    CI_TYPES.FOREIGN,
    CI_TYPES.PASSPORT,
    CI_TYPES.GOVERNMENTAL
  ]

  if (!selectedTypes || selectedTypes.length === 0) {
    return allCITypes.map(ciType => ({ label: ciType.key, value: ciType.key }))
  }

  const selectedCITypes = allCITypes.filter(ciType => selectedTypes.includes(ciType.value as TCITypesKeys))

  const selectedTypesCIFormatted = selectedCITypes.map(ciType => ({ label: ciType.key, value: ciType.key.toLowerCase() }))

  return selectedTypesCIFormatted
}


export type TComboxItem = {
  value: string
  label: string
  image?: string
  icon?: React.ReactNode
}

export interface PIDType {
  id?: 'pidType' | string
  tabIndex?: number
  buttonClassName?: string
  popoverClassName?: string
  notFoundLabel?: string
  ctaPlaceholder?: string
  placeholder?: string
  label?: string
  defaultValue?: 'v' | 'e' | 'j' | 'g' | 'p'
  items?: TComboxItem[]
  disabled?: boolean
}

export interface PIDNumber {
  id?: 'pidNumber' | string
  tabIndex?: number
  placeholder?: string
  maxLength?: number
  disabled?: boolean
}

export interface PID {
  type?: PIDType
  number?: PIDNumber
}

export interface PIDProps  {
  label: string
  form: UseFormReturn<any, any, any>
  pid?: PID
}

const dniDefaultValues: PID = {
  type: {
    id: 'pidType',
    tabIndex: 1,
    buttonClassName: 'w-[80px]',
    popoverClassName: 'w-[90px]',
    notFoundLabel: 'Codigo No Encontrado',
    ctaPlaceholder: 'Tipo',
    placeholder: 'Buscar...',
    defaultValue: formatCITypes(['VENEZUELAN'])[0].value as 'v',
    label: 'Cedula',
    items: formatCITypes(['VENEZUELAN', 'FOREIGN', 'PASSPORT'])
  },
  number: {
    id: 'pidNumber',
    tabIndex: 2,
    placeholder: '00.000.000',
    maxLength: 10
  }
}

export function InputPID ({
  form,
  pid: dni = dniDefaultValues,
}: PIDProps) {
  const handleOnKeyUpIdentifierNumber = (event) => {
    const { value } = event.target
    const identifierNumberFormmated = formatCI(value)
    form.setValue('pidNumber', identifierNumberFormmated)
  }

  return (
    <div className='w-full flex justify-start items-end gap-x-2'>
      <ComboBox
        id='pidType'
        form={form}
        label={dni?.type?.label || dniDefaultValues.type.label}
        items={dni?.type?.items || dniDefaultValues.type.items}
        tabIndex={dni?.type?.tabIndex || dniDefaultValues.type.tabIndex}
        placeholder={dni?.type?.placeholder || dniDefaultValues.type.placeholder}
        defaultValue={dni?.type?.defaultValue || dniDefaultValues.type.defaultValue}
        notFoundLabel={dni?.type?.notFoundLabel || dniDefaultValues.type.notFoundLabel}
        ctaPlaceholder={dni?.type?.ctaPlaceholder || dniDefaultValues.type.ctaPlaceholder}
        buttonClassName={dni?.type?.buttonClassName || dniDefaultValues.type.buttonClassName}
        popoverClassName={dni?.type?.popoverClassName || dniDefaultValues.type.popoverClassName}
        disabled={dni?.type?.disabled || dniDefaultValues.type.disabled}
      />

      <Input
        id='pidNumber'
        form={form}
        type='text'
        onKeyPress={handleOnlyNumbers}
        onKeyUp={handleOnKeyUpIdentifierNumber}
        tabIndex={dni?.number?.tabIndex || dniDefaultValues.number.tabIndex}
        maxLength={dni?.number?.maxLength || dniDefaultValues.number.maxLength}
        placeholder={dni?.number?.placeholder || dniDefaultValues.number.placeholder}
      />
    </div>
  )
}

