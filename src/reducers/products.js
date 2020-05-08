import * as Types from './../constants/ActionTypes';

const InitialState = []

let findIndex = (products,id)=>{
    let result = -1;
    products.forEach((product,index) => {
      if(product.id === id){
        result = index;
      }
    });
    return result;
  }


const products = (state = InitialState, action) => {
    let index = -1;
    
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state]
        case Types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        default:
            return state
    }
}

export default products;   