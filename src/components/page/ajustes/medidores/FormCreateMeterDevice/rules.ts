import { IFormRules } from '@/lib/types/forms'

type TFleetFields =
  'serial' |
  'meterModel' |
  'meterUnit' |
  'status' |
  'type'

export const meterDeviceRules: IFormRules<TFleetFields> = {
  serial: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  meterModel: {
    required: { value: true, message: 'Requerido' }
  },

  meterUnit: {
    required: { value: true, message: 'Requerido' }
  },

  status: {
    required: { value: true, message: 'Requerido' }
  },

  type: {
    required: { value: true, message: 'Requerido' }
  }
}
