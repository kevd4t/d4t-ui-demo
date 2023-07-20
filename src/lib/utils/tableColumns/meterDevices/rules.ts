import { IFormRules } from '@/lib/types'

type TMeterDeviceFields = 'title' | 'description' | 'isActive'

export const meterDeviceRules: IFormRules<TMeterDeviceFields> = {
  title: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  description: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 250, message: 'Maximo 250 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  isActive: {
    required: { value: true, message: 'Requerido' }
  }
}
