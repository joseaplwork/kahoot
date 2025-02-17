import { url } from './url'

describe('url', () => {
  describe('pokemon', () => {
    it('returns correct URL with limit and offset', () => {
      const params = { limit: 20, offset: 0 }
      const expected = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

      expect(url.pokemon(params)).toBe(expected)
    })

    it('handles different limit and offset values', () => {
      const params = { limit: 10, offset: 30 }
      const expected = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=30'

      expect(url.pokemon(params)).toBe(expected)
    })
  })

  describe('pokemonById', () => {
    it('returns correct URL with pokemon id', () => {
      const id = '25'
      const expected = 'https://pokeapi.co/api/v2/pokemon/25'

      expect(url.pokemonById(id)).toBe(expected)
    })

    it('handles different pokemon ids', () => {
      const id = '6'
      const expected = 'https://pokeapi.co/api/v2/pokemon/6'

      expect(url.pokemonById(id)).toBe(expected)
    })
  })
})
