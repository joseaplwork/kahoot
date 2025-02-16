import { generatePokemonName } from '@/shared/services'

import { PaginatedList } from '../interfaces/paginated-list'
import { Pokemon } from '../interfaces/pokemon-list'
import { PokemonListDTO } from '../interfaces/pokemon-list-dto'

import { extractIdFromUrl } from './extract-id-from-url'
import { generateAudioUrl } from './generate-audio-url'
import { sort } from './sort'

export const transformer = (
  dto: PokemonListDTO | null,
): PaginatedList<Pokemon> => {
  if (!dto?.results) {
    return {
      count: 0,
      next: null,
      previous: null,
      results: [],
    }
  }

  const results = dto.results.map(pokemon => {
    const id = extractIdFromUrl(pokemon.url)

    return {
      id,
      name: generatePokemonName(pokemon.name),
      soundUrl: generateAudioUrl(id),
    }
  })

  return {
    count: dto.count,
    next: dto.next,
    previous: dto.previous,
    results: sort(results),
  }
}
