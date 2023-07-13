import { IFormRules } from '@/lib/types/forms'

type TGpsMarkFields =
  'serial' |
  'status'

export const gpsDeviceRules: IFormRules<TGpsMarkFields> = {
  serial: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  status: {
    required: { value: true, message: 'Requerido' }
  }
}
