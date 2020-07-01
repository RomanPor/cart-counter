import {ActionType} from "../reducers/product-list";
const catalogRequested = () => {
    return {
        type: ActionType.FETCH_CATALOG_REQUEST
    }
};

const catalogLoaded = (list) => {
    return {
        type: ActionType.FETCH_CATALOG_SUCCESS,
        payload: list
    };
};

const catalogError = (error) => {
    return {
        type: ActionType.FETCH_CATALOG_FAILURE,
        payload: error
    };
};

const fetchCatalog = (dataService) => () => (dispatch) => {
    dispatch(catalogRequested());
    setTimeout(() => {
        dataService.getCatalog()
            .then((data) => dispatch(catalogLoaded(data)))
            .catch((err) => dispatch(catalogError(err)));
    }, 500)
};

export {
    fetchCatalog,
};
