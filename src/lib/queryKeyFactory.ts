export const pokemonKey = {
    base: [{ scope: 'pokemonKey' }] as const,
    pokemonListKey: () => [{ ...pokemonKey.base[0], entity: 'pokemonKey' }]
};
