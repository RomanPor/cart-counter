const initialState = {
    list: [],
    loading: true,
    error: null
};

export const ActionType = {
    FETCH_CATALOG_REQUEST: 'FETCH_CATALOG_REQUEST',
    FETCH_CATALOG_SUCCESS: 'FETCH_CATALOG_SUCCESS',
    FETCH_CATALOG_FAILURE: 'FETCH_CATALOG_FAILURE',
}

const productList = (state = initialState, action) => {

    switch (action.type) {
        case ActionType.FETCH_CATALOG_REQUEST:
            return {
                list: [],
                loading: true,
                error: null
            };

        case ActionType.FETCH_CATALOG_SUCCESS:
            return {
                list: action.payload,
                loading: false,
                error: null
            };

        case ActionType.FETCH_CATALOG_FAILURE:
            return {
                list: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default productList;
