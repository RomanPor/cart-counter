import React from "react";
import CartItem from "../cart-item/cart-item";

const CartList = (props) => {
    const { list, removeFromCart } = props;
    return (
        <div className="row">
            { list.map((item) => <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />)}
        </div>
    )
}

export default CartList;
