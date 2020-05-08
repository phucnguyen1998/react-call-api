import * as Types from './../constants/ActionTypes'; 
import callApi from './../utils/apiCaller';

export const actFetchProductRequest = () => {
    return(dispatch) => {
        return callApi('products', 'GET', null).then( (res) => {
            dispatch(actFetchProduct(res.data));
        });
    }
}

export const actFetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi( `products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(res.id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then((res) => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = (products) => {
    return {
        type: Types.ADD_PRODUCT,
        products
    }
}
