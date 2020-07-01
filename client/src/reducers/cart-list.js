const updateCartItems = (cartItems, item, idx) => {

    if (item.quantity === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateOrder = (state, item, quantity) => {
    const { cartItems } = state;
    const inCart = cartItems.find(it => it.id == item.id);
    const itemIndex = cartItems.findIndex(it => it.id == item.id);
    if (inCart) {
        inCart.quantity += quantity;
    }
    return {
        ...state,
        orderTotal: null,
        cartItems: updateCartItems(cartItems, item, itemIndex)
    };
};

const initialState = {
    cartItems: [],
    orderTotal: null,
    loading: false,
    error: null,
};

export const ActionType = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    POST_CART_REQUEST: 'POST_CART_REQUEST',
    POST_CART_SUCCESS: 'POST_CART_SUCCESS',
    POST_CART_FAILURE: 'POST_CART_FAILURE',
}

const cartList = (state = initialState, action) => {

    switch (action.type) {
        case ActionType.ADD_TO_CART:
            return updateOrder(state, action.payload, 1)

        case ActionType.REMOVE_FROM_CART:
            return updateOrder(state, action.payload, -1);

        case ActionType.POST_CART_REQUEST:
            return {
                ...state,
                orderTotal: null,
                loading: true,
                error: null
            };

        case ActionType.POST_CART_SUCCESS:
            return {
                ...state,
                orderTotal: action.payload,
                loading: false,
                error: null
            };

        case ActionType.POST_CART_FAILURE:
            return {
                ...state,
                orderTotal: null,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default cartList;
