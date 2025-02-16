import { useFetch } from '@/shared/hooks'
import { url } from '@/shared/services'

import { transformer } from '../services/transformer'

export const useGetPokemonById = (id: string | undefined) => {
  if (!id) {
    throw new Error('ID is required')
  }

  const { data, error, loading } = useFetch({
    endpoint: url.pokemonById(id),
    transformer: transformer,
  })

  return { pokemon: data, error, loading }
}
