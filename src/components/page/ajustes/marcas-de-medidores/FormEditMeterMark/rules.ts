import { IFormRules } from '@/lib/types/forms'

type TUserFields = 'title' | 'description' | 'isActive'

export const editMeterMarkRules: IFormRules<TUserFields> = {
  title: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 20, message: 'Maximo 20 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  description: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 100, message: 'Maximo 100 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  isActive: {
    required: { value: true, message: 'Requerido' }
  }
}
