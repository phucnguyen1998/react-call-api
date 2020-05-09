import * as Types from './../constants/ActionTypes';

const InitialState = {}
const itemEditing = (state = InitialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state
    }
}

export default itemEditing;