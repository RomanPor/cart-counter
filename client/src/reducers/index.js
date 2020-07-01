import {combineReducers} from "redux";
import productList from "./product-list";
import cartList from "./cart-list";

const reducer = combineReducers({
    productList,
    cartList
})

export default reducer;
