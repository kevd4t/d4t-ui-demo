import { APP_CONFIG } from '@/config'

const { CI_TYPES } = APP_CONFIG

export const formatCI = (value: string) => {
  // Eliminar todos los puntos y espacios en blanco del valor actual del campo de entrada
  // eslint-disable-next-line no-useless-escape
  const formattedCedula = value.replace(/[\.\s]/g, '')

  // Aplicar el formato de separación por puntos cada tres caracteres
  return formattedCedula.replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')
}

export const formatRIF = (value: string) => {
  // Eliminar todos los puntos y espacios en blanco del valor actual del campo de entrada
  // eslint-disable-next-line no-useless-escape
  const formattedCedula = value.replace(/[\.\s]/g, '')

  // Aplicar el formato de separación por puntos cada tres caracteres
  return formattedCedula.replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')
}

export const formatPhoneNumber = (value: string) => {
  const sanitizedPhoneNumber = value.replace(/\s/g, '')

  const formattedPhoneNumber = sanitizedPhoneNumber.replace(/(\d{3})(\d{4})/, (match, p1, p2) => {
    return `${p1} ${p2}`
  })

  return formattedPhoneNumber
}

export const formatPhone = (phoneNumber: string): { codeLine: string; number: string } => {
  const codeLine = phoneNumber.substring(0, 4)
  const number = phoneNumber.substring(4)
  const formattedNumber = number.replace(/(\d{3})(\d{4})/, '$1 $2')

  return { codeLine, number: formattedNumber }
}

export const convertBytes = (bytes: number): string => {
  if (bytes < 1024) {
    return `${bytes} B`
  } else if (bytes < 1024 * 1024) {
    const kilobytes = bytes / 1024
    const formattedKB = kilobytes.toFixed(1)
    return `${formattedKB} KB`
  } else {
    const megabytes = bytes / (1024 * 1024)
    const formattedMB = megabytes.toFixed(1)
    return `${formattedMB} MB`
  }
}

type TCITypesKeys = 'VENEZUELAN' | 'JURIDICAL' | 'FOREIGN' | 'PASSPORT' | 'GOVERNMENTAL'

export const formatCITypes = (selectedTypes?: TCITypesKeys) => {
  const allCITypes = [
    CI_TYPES.VENEZUELAN,
    CI_TYPES.JURIDICAL,
    CI_TYPES.FOREIGN,
    CI_TYPES.PASSPORT,
    CI_TYPES.GOVERNMENTAL
  ]

  if (!selectedTypes) {
    return allCITypes.map(ciType => ({ label: ciType.key, value: ciType.key.toLowerCase() }))
  }

  const selectedCITypes = allCITypes.filter(ciType => selectedTypes.includes(ciType.key))

  const selectedTypesCIFormated = selectedCITypes.map(ciType => ({ label: ciType.key, value: ciType.key.toLowerCase() }))

  return selectedTypesCIFormated
}
