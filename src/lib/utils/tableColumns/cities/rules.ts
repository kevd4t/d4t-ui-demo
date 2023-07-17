import { IFormRules } from '@/lib/types'

type TMeterModelFields = 'title'

export const stateRules: IFormRules<TMeterModelFields> = {
  title: {
    minLength: { value: 3, message: 'Minimo 3 Caracteres' },
    maxLength: { value: 50, message: 'Maximo 50 Caracteres' },
    required: { value: true, message: 'Requerido' }
  }
}
