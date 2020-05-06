const InitialState = [
    {
        id: 1,
        name: 'iphone',
        price: 400000000,
        status: true
    },
    {
        id: 2,
        name: 'samsung',
        price: 400000000,
        status: false
    },
    {
        id: 3,
        name: 'oppo',
        price: 400000000,
        status: true
    },
    {
        id: 4,
        name: 'xiaomi',
        price: 400000000,
        status: false
    },
]

const products = (state = InitialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default products;   