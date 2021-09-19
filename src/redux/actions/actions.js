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

export const sellWatch = () => {
    return ({
        type: SELL_WATCH
    })
}

export const sellComp = () => {
    return ({
        type: SELL_COMP
    })
}