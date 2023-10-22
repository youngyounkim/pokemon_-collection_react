export const pokemonKey = {
    base: [{ scope: 'pokemonKey' }] as const,
    pokemonListKey: () => [{ ...pokemonKey.base[0], entity: 'pokemonKey' }],
    pokemonName: (idx: number) => [{ ...pokemonKey.base[0], entity: 'pokemonName', idx }],
    pokemonDetail: (name: string | number) => [{ ...pokemonKey.base[0], entity: 'pokemonDetail', name }]
};
