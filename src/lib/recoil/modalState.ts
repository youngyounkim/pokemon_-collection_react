import { atom } from 'recoil';

type ModalStateType = {
    isOpen: boolean;
};

export const modalState = atom<ModalStateType>({
    key: 'coffeeModalState',
    default: {
        isOpen: false
    }
});
