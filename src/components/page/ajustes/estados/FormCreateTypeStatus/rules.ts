import { IFormRules } from '@/lib/types/forms'

type TTypeStatusFields = 'title' | 'description' | 'isActive'
type TStatusFields = 'title' | 'description' | 'isActive'

export const categoryRules: IFormRules<TTypeStatusFields> = {
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

export const subcategoryRules: IFormRules<TStatusFields> = {
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
