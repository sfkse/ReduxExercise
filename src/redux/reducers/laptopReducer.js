import { SELL_LAPTOP } from "../types/types";

export const initialState = {
    numberOfLaptops: 100
}

export const laptopReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELL_LAPTOP:

            return { ...state, numberOfLaptops: state.numberOfLaptops - 1 }

        default:
            return state;
    }
}
