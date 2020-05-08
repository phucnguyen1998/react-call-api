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
    return (dispath) => {
        return callApi( `products/${id}`, 'DELETE', null).then(res => {
            dispath(actDeleteProduct(res.id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

