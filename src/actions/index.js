import * as Types from './../constants/ActionTypes'; 
import callApi from './../utils/apiCaller';

// get data 
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

//delete product
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

// add product

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

//get product 
export const actGetProductRquest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then((res => {
            dispatch(actGetProduct(res.data))
        }))
    }
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

// update product

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then((res) => {
            dispatch(actUpdateProduct(res.data));
        })
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}