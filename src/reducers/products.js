import * as Types from './../constants/ActionTypes';

const InitialState = []

const products = (state = InitialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state]
        default:
            return state
    }
}

export default products;   