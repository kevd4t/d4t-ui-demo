import { IFormRules } from '@/lib/types/forms'

type TDriverFields = 'names' | 'surnames' | 'phoneCode' | 'phoneNumber' | 'ci' | 'ciType' | 'ciNumber' | 'status' | 'licenseType'

export const driverRules: IFormRules<TDriverFields> = {
  names: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 20, message: 'Maximo 20 Caracteres' },
    // pattern: { value: /^[A-Z]+$/i, message: 'Caracter no Permitido' }, // Only Letters
    pattern: { value: /^\w+(\s\w+)?$/i, message: 'Nombre Invalido' },
    required: { value: true, message: 'Requerido' }
  },

  surnames: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 20, message: 'Maximo 20 Caracteres' },
    pattern: { value: /^\w+(\s\w+)?$/i, message: 'Apellido Invalido' },
    required: { value: true, message: 'Requerido' }
  },

  licenseType: {
    required: { value: true, message: 'Requerido' }
  },

  phoneCode: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 4, message: 'Maximo 4 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  phoneNumber: {
    minLength: { value: 7, message: 'Minimo 7 Caracteres' },
    maxLength: { value: 8, message: 'Maximo 8 Caracteres' },
    required: { value: true, message: 'Numero Requerido' }
  },

  ci: {
    minLength: { value: 9, message: 'Minimo 9 Caracteres' },
    maxLength: { value: 10, message: 'Maximo 10 Caracteres' },
    pattern: { value: /^[0-9.]+$/, message: 'Solo Numeros' },
    required: { value: true, message: 'Requerido' }
  },

  ciType: {
    required: { value: true, message: 'Requerido' }
  },

  ciNumber: {
    minLength: { value: 9, message: 'Minimo 9 Caracteres' },
    maxLength: { value: 10, message: 'Maximo 10 Caracteres' },
    pattern: { value: /^[0-9.]+$/, message: 'Solo Numeros' },
    required: { value: true, message: 'Requerido' }
  },

  status: {
    required: { value: true, message: 'Requerido' }
  }
}
