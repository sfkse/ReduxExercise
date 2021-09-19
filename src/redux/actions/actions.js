import { SELL_COMP, SELL_WATCH, SELL_PHONE, SELL_LAPTOP } from "../types/types";

export const sellLaptop = () => {
    return ({
        type: SELL_LAPTOP
    })
}

export const sellPhone = () => {
    return ({
        type: SELL_PHONE
    })
}

export const sellWatch = (number = 1) => {
    return ({
        type: SELL_WATCH,
        payload: number
    })
}

export const sellComp = (number = 1) => {
    return ({
        type: SELL_COMP,
        payload: number
    })
}