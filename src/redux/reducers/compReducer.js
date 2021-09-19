import { SELL_COMP } from "../types/types";

const initialState = {
    numberOfComputers: 250
}
export const compReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELL_COMP:
            return { ...state, numberOfComputers: state.numberOfComputers - action.payload };

        default:
            return state;
    }
}