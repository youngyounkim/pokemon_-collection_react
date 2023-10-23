export type PokemonListItemType = {
    name: string;
    url: string;
    id: number | undefined;
    krName: string | undefined;
};

export type PokemonListResponse = {
    count: number;
    next: string;
    previous: null;
    results: PokemonListItemType[];
};

export type EvolutionListType = {
    name: string;
    id: number;
    krName: string | undefined;
}[];
