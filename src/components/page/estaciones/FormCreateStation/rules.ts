import { IFormRules } from '@/lib/types/forms'

type TStationFields =
  'rifNumber' |
  'rifType' |
  'type' |
  'name' |
  'modality' |
  'isActive' |
  'nbBandera' |
  'cadenaSum' |
  'socialReason' |
  'isDiselDispatch' |
  'isGasolineDispatch' |
  'status' |
  'directionState' |
  'directionCity' |
  'directionReference'

export const stationRules: IFormRules<TStationFields> = {
  rifNumber: {
    required: { value: true, message: 'Requerido' }
  },

  rifType: {
    required: { value: true, message: 'Requerido' }
  },

  type: {
    required: { value: true, message: 'Requerido' }
  },

  directionState: {
    required: { value: true, message: 'Requerido' }
  },

  directionCity: {
    required: { value: true, message: 'Requerido' }
  },

  directionReference: {
    required: { value: true, message: 'Requerido' }
  },

  name: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  modality: {
    required: { value: true, message: 'Requerido' }
  },

  isActive: {
    required: { value: true, message: 'Requerido' }
  },

  nbBandera: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 20, message: 'Maximo 20 Caracteres' },
    pattern: { value: /^\w+(\s\w+)?$/i, message: 'Nombre Invalido' },
    required: { value: true, message: 'Requerido' }
  },

  cadenaSum: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 20, message: 'Maximo 20 Caracteres' },
    pattern: { value: /^\w+(\s\w+)?$/i, message: 'Nombre Invalido' },
    required: { value: true, message: 'Requerido' }
  },

  isDiselDispatch: {
    required: { value: true, message: 'Requerido' }
  },

  isGasolineDispatch: {
    required: { value: true, message: 'Requerido' }
  },

  socialReason: {
    required: { value: true, message: 'Requerido' }
  },

  status: {
    required: { value: true, message: 'Requerido' }
  }
}

type TStationContactFields = 'names' | 'surnames' | 'phoneCode' | 'phoneNumber' | 'ciType' | 'ciNumber' | 'email'

export const stationContactRules: IFormRules<TStationContactFields> = {
  names: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 20, message: 'Maximo 20 Caracteres' },
    pattern: { value: /^[A-Za-z\s']+$/, message: 'Nombre Invalido' }, // Only Letters
    required: { value: true, message: 'Requerido' }
  },

  surnames: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 20, message: 'Maximo 20 Caracteres' },
    pattern: { value: /^[A-Za-z\s']+$/, message: 'Apellido Invalido' }, // Only Letters
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
    required: { value: true, message: 'Requerido' }
  },

  ciType: {
    minLength: { value: 9, message: 'Minimo 9 Caracteres' },
    maxLength: { value: 10, message: 'Maximo 10 Caracteres' },
    pattern: { value: /^[0-9.]+$/, message: 'Solo Numeros' },
    required: { value: true, message: 'Requerido' }
  },

  ciNumber: {
    minLength: { value: 9, message: 'Minimo 9 Caracteres' },
    maxLength: { value: 10, message: 'Maximo 10 Caracteres' },
    pattern: { value: /^[0-9.]+$/, message: 'Solo Numeros' },
    required: { value: true, message: 'Requerido' }
  },

  email: {
    minLength: { value: 10, message: 'Minimo 10 Caracteres' },
    maxLength: { value: 40, message: 'Maximo 40 Caracteres' },
    required: { value: true, message: 'Correo Requerido' }
  }
}
