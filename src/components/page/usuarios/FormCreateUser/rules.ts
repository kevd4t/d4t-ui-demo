import { IFormRules } from '@/lib/types/forms'

type TUserFields = 'names' | 'surnames' | 'username' | 'phoneCode' | 'phoneNumber' | 'ci' | 'email' | 'isActive' | 'role'

export const userRules: IFormRules<TUserFields> = {
  names: {
    minLength: { value: 2, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 20, message: 'Maximo 20 Caracteres' },
    // pattern: { value: /^[A-Z]+$/i, message: 'Caracter no Permitido' }, // Only Letters
    pattern: { value: /^\w+(\s\w+)?$/i, message: 'Nombre Invalido' },
    required: { value: true, message: 'Requerido' }
  },

  surnames: {
    minLength: { value: 2, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 20, message: 'Maximo 20 Caracteres' },
    pattern: { value: /^\w+(\s\w+)?$/i, message: 'Apellido Invalido' },
    required: { value: true, message: 'Requerido' }
  },

  username: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 15, message: 'Maximo 15 Caracteres' },
    pattern: { value: /^[a-z0-9._-]+$/, message: 'Caracter no Permitido' },
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
    // pattern: { value: /^[0-9.]+$/, message: 'Solo Numeros' },
    required: { value: true, message: 'Numero Requerido' }
  },

  ci: {
    minLength: { value: 9, message: 'Minimo 9 Caracteres' },
    maxLength: { value: 10, message: 'Maximo 10 Caracteres' },
    pattern: { value: /^[0-9.]+$/, message: 'Solo Numeros' },
    required: { value: true, message: 'Requerido' }
  },

  email: {
    minLength: { value: 10, message: 'Minimo 10 Caracteres' },
    maxLength: { value: 40, message: 'Maximo 40 Caracteres' },
    required: { value: true, message: 'Correo Requerido' }
  },

  isActive: {
    required: { value: true, message: 'Requerido' }
  },

  role: {
    required: { value: true, message: 'Requerido' }
  }
}
