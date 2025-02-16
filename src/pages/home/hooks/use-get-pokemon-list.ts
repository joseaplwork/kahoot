import { useFetch } from '@/shared/hooks'
import { url } from '@/shared/services'

import { ITEMS_PER_PAGE } from '../constants/items-per-page'
import { transformer } from '../services/transformer'

export const useGetPokemonList = (page: number) => {
  const { data, error, loading } = useFetch({
    endpoint: url.pokemon({
      limit: ITEMS_PER_PAGE,
      offset: (page - 1) * ITEMS_PER_PAGE,
    }),
    transformer,
  })

  return { pokemonList: data, error, loading }
}
