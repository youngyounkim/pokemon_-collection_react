import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export type PokemonListStateType = {
    id: number | undefined;
    name: string | undefined;
    evolutionUrl: string | undefined;
};

export const pokemonListState = atom<PokemonListStateType[]>({
    key: 'pokemonListState',
    default: [],
    effects_UNSTABLE: [persistAtom]
});
