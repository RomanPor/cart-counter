import React from "react";
import ProductItem from "../product-item/product-item";

const ProductList = (props) => {
    const { list, addToCart } = props;
    return (
        <div className="row">
            { list.map((item) => <ProductItem key={item.id} product={item} addToCart={addToCart} />)}
        </div>
    )
}

export default ProductList;
