import {ActionType} from "../reducers/cart-list";
const addToCart = (item) => {
    return {
        type: ActionType.ADD_TO_CART,
        payload: item
    }
};

const removeFromCart = (item) => {
    return {
        type: ActionType.REMOVE_FROM_CART,
        payload: item
    };
};

const cartRequested = () => {
    return {
        type: ActionType.POST_CART_REQUEST
    }
};

const cartLoaded = (total) => {
    return {
        type: ActionType.POST_CART_SUCCESS,
        payload: total
    };
};

const cartError = (error) => {
    return {
        type: ActionType.POST_CART_FAILURE,
        payload: error
    };
};

const postCart = (dataService) => (data) => (dispatch) => {
    dispatch(cartRequested());
    setTimeout(() => {
        dataService.postCart(data)
            .then((data) => dispatch(cartLoaded(data)))
            .catch((err) => dispatch(cartError(err)));
    }, 500)
};

export {
    removeFromCart,
    addToCart,
    postCart
}
