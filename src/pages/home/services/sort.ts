import { Pokemon } from '../interfaces/pokemon-list'

export const sort = (pokemonList: Pokemon[]) =>
  pokemonList.sort((a, b) => a.name.localeCompare(b.name))
