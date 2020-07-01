import React from "react";
import {Link} from "react-router-dom";
import CartListContainer from "../containers/cart-list-container";

const CartPage = () => {
    return (
        <div className="container section">
            <div className="title-with-btn">
                <h2>Корзина</h2>
                <Link to="/">
                    <i className="material-icons small right">list</i>
                </Link>
            </div>
            <CartListContainer />
        </div>
    );
}

export default CartPage;
