import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export type NamesStateType = {
    id: number | undefined;
    name: string | undefined;
    evolutionUrl: string | undefined;
};

export const namesState = atom<NamesStateType[]>({
    key: 'namesState',
    default: [],
    effects_UNSTABLE: [persistAtom]
});
