import { IFormRules } from '@/lib/types/forms'

type TFleetFields = 'title' | 'description' | 'status'
type TTruckFields = 'title' | 'description' | 'status'

export const fleetRules: IFormRules<TFleetFields> = {
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

  status: {
    required: { value: true, message: 'Requerido' }
  }
}

export const truckRules: IFormRules<TTruckFields> = {
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

  status: {
    required: { value: true, message: 'Requerido' }
  }
}
