import { generatePokemonName } from './generate-pokemon-name'

describe('generatePokemonName', () => {
  it('capitalizes first letter of each word', () => {
    expect(generatePokemonName('pikachu')).toBe('Pikachu')
    expect(generatePokemonName('charizard')).toBe('Charizard')
  })

  it('replaces hyphens with spaces', () => {
    expect(generatePokemonName('tapu-koko')).toBe('Tapu Koko')
    expect(generatePokemonName('ho-oh')).toBe('Ho Oh')
  })

  it('handles multiple hyphens', () => {
    expect(generatePokemonName('porygon-z-mega')).toBe('Porygon Z Mega')
  })
})
