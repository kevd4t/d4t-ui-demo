export const formatCI = (value: string) => {
  // Eliminar todos los puntos y espacios en blanco del valor actual del campo de entrada
  // eslint-disable-next-line no-useless-escape
  const formattedCedula = value.replace(/[\.\s]/g, '')

  // Aplicar el formato de separación por puntos cada tres caracteres
  return formattedCedula.replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, '$1.')
}

export const formatPhoneNumber = (value: string) => {
  // Eliminar todos los espacios en blanco del valor actual del campo de entrada
  const sanitizedPhoneNumber = value.replace(/\s/g, '')

  const formattedPhoneNumber = sanitizedPhoneNumber.replace(/(\d{3})(\d{4})/, (match, p1, p2) => {
    return `${p1} ${p2}`
  })

  // Definir los códigos de área permitidos
  // const allowedAreaCodes = ['0412', '0414', '0416', '0424', '0426']

  // // Verificar si el número de teléfono tiene un código de área permitido
  // const areaCodeMatch = sanitizedPhoneNumber.match(/^(0\d{3})/)
  // const isAreaCodeAllowed = areaCodeMatch && allowedAreaCodes.includes(areaCodeMatch[1])

  // // Formatear el número de teléfono con los espacios y el código de línea entre paréntesis
  // const formattedPhoneNumber = sanitizedPhoneNumber.replace(/(\d{4})(\d{3})(\d{4})/, (match, p1, p2, p3) => {
  //   const areaCode = isAreaCodeAllowed ? `(${areaCodeMatch[1]})` : '(0412)'
  //   return `${areaCode} ${p2} ${p3}`
  // })

  return formattedPhoneNumber
}

export const formatFullPhone = (value: string) => {
  // Eliminar todos los espacios en blanco del valor actual del campo de entrada
  const sanitizedPhoneNumber = value.replace(/\s/g, '')

  // Definir los códigos de área permitidos
  const allowedAreaCodes = ['0412', '0414', '0416', '0424', '0426']

  // Verificar si el número de teléfono tiene un código de área permitido
  const areaCodeMatch = sanitizedPhoneNumber.match(/^(0\d{3})/)
  const isAreaCodeAllowed = areaCodeMatch && allowedAreaCodes.includes(areaCodeMatch[1])

  // Formatear el número de teléfono con los espacios y el código de línea entre paréntesis
  const formattedPhoneNumber = sanitizedPhoneNumber.replace(/(\d{4})(\d{3})(\d{4})/, (match, p1, p2, p3) => {
    const areaCode = isAreaCodeAllowed ? `(${areaCodeMatch[1]})` : '(0412)'
    return `${areaCode} ${p2} ${p3}`
  })

  return formattedPhoneNumber
}
