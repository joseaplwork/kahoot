export const generatePokemonName = (name: string) =>
  name.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
