import { IFormRules } from '@/lib/types/forms'

type TStationFields =
  'rifNumber' |
  'rifType' |
  'type' |
  'title' |
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

  title: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  },

  modality: {
    required: { value: true, message: 'Requerido' }
  },

  isActive: {
    required: { value: true, message: 'Numero Requerido' }
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
