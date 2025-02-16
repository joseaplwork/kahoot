import { generatePokemonName } from '@/shared/services'

import { Pokemon } from '../interfaces/pokemon'
import { PokemonDTO } from '../interfaces/pokemon-dto'

export const transformer = (data: PokemonDTO): Pokemon | null => {
  if (!data) {
    return null
  }

  return {
    id: data.id,
    name: generatePokemonName(data.name),
    image:
      data.sprites.other['home'].front_default ||
      data.sprites.other['official-artwork'].front_default ||
      data.sprites.other['dream_world'].front_default ||
      data.sprites.front_default ||
      null,
    audio: data.cries.latest || data.cries.legacy || null,
    weight: data.weight,
    height: data.height,
    types: data.types.map(type => type.type.name),
    stats: data.stats.map(stat => ({
      name: stat.stat.name.split('-').join(' '),
      value: stat.base_stat,
    })),
  }
}
