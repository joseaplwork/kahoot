import { useEffect, useState } from 'react'

interface Options<F> {
  endpoint: string
  transformer: F
}

export const useFetch = <F extends (data: Parameters<F>[0]) => ReturnType<F>>({
  endpoint,
  transformer,
}: Options<F>) => {
  const [data, setData] = useState<ReturnType<F>>(transformer(null))
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)

    fetch(endpoint)
      .then(response => response.json())
      .then(data => setData(transformer(data)))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))
  }, [endpoint, transformer])

  return { data, error, loading }
}
