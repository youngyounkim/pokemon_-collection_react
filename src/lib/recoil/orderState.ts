import { atom } from "recoil";
import { CoffeeType } from "types/types";

export type OrderStateType = CoffeeType & { id: number; count: number };

export const orderState = atom<OrderStateType[]>({
    key: "orderState",
    default: [],
});
