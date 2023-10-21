export type ModelType = {};

export type PokemonListItemType = {
    name: string;
    url: string;
};

export type PokemonResult = {
    count: number;
    next: string;
    previous: null;
    results: [PokemonListItemType];
};
