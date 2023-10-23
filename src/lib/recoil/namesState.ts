import { atom } from 'recoil';

export type NamesStateType = {
    id: number | undefined;
    name: string | undefined;
    evolutionUrl: string | undefined;
};

export const namesState = atom<NamesStateType[]>({
    key: 'namesState',
    default: []
});
