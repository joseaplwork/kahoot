const URL = 'https://pokeapi.co/api/v2'

export const url = {
  pokemon: ({ limit, offset }: { limit: number; offset: number }) =>
    `${URL}/pokemon?limit=${limit}&offset=${offset}`,
  pokemonById: (id: string) => `${URL}/pokemon/${id}`,
}
