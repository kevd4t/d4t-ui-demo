import { useEffect, useState, useRef } from 'react'

import { RequestInit } from '../types'

export function useFetch<IData = unknown> (initialUrl: string) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<IData>(null)
  const [error, setError] = useState(null)
  const isInitialMount = useRef(true) // Nuevo useRef

  const fetcher = async (url: string, options?: RequestInit) => {
    setIsLoading(true)

    try {
      const response = await fetch(url, options)
      if (!response.ok) throw new Error(response.statusText)
      const data: IData = await response.json()

      setData(data)
      setError(null)
    } catch (error) {
      setError(`${error} Could not Fetch Data `)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isInitialMount.current) { // Comprobar si es el montaje inicial
      isInitialMount.current = false // Actualizar el estado de montaje inicial
      return
    }

    console.count('hello')
    fetcher(initialUrl)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialUrl])

  return { data, isLoading, error, fetcher }
}
