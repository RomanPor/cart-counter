import React from "react";
import {Link} from "react-router-dom";
import ProductListContainer from "../containers/product-list-container";

const CatalogPage = () => {
    return (
        <div className="container section">
            <div className="title-with-btn">
                <h2>Каталог</h2>
                <Link to="/cart">
                    <i className="material-icons small right">shopping_cart</i>
                </Link>
            </div>
            <ProductListContainer />
        </div>
    );
}

export default CatalogPage;
