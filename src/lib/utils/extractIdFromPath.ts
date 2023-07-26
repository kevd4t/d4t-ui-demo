import { useRouter } from 'next/router'

export function ExtractIdFromPath () {
  const router = useRouter()

  // Definimos una expresión regular para extraer el ID de la URL.
  const idRegex = /\/estaciones\/([a-f0-9-]+)\//

  // Verificamos si la URL actual coincide con el patrón esperado.
  const match = router.asPath.match(idRegex)

  // Si se encontró una coincidencia, retornamos el valor del ID.
  if (match && match[1]) {
    return match[1]
  }

  // Si no se encontró el ID, puedes manejar el caso según tus necesidades.
  // Aquí estoy devolviendo null, pero puedes retornar un valor por defecto,
  // lanzar una excepción o manejar el caso de otro modo.
  return null
}
