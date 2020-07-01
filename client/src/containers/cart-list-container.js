import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import CartList from "../components/cart-list/cart-list";
import {postCart, removeFromCart} from "../actions/cart-list";
import RequestStatus from "../hocs/request-status";
import withDataService from "../hocs/with-data-service";
import compose from "../utils/compose";

const CartListContainer = (props) => {
        const { cartItems, loading, error, orderTotal, removeFromCart, postCart } = props;
        const toCount = () => postCart(cartItems);
        return (
            <Fragment>
                { cartItems.length == 0 ? (
                    <p className="request-error">
                        <i className="material-icons small">remove_shopping_cart</i>
                        <span>Корзина пуста!</span>
                    </p>
                ) : (
                    <Fragment>
                        <CartList list={cartItems} removeFromCart={removeFromCart} />
                        <RequestStatus loading={loading} error={error}>
                            {orderTotal ? (
                                <ul className="collection with-header">
                                    <li className="collection-header"><h6>Сумма</h6></li>
                                    {
                                        Object.keys(orderTotal).map((it, idx) => {
                                            return (
                                                <li key={idx} className="collection-item">
                                                    <div>{ it }</div>
                                                    <div>{ orderTotal[it] }</div>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            ) : null}
                        </RequestStatus>
                        <button onClick={toCount} className="waves-effect waves-light btn-large" disabled={loading ? true : false}>Посчитать</button>
                    </Fragment>
                    )
                }
                </Fragment>


        );
}

const mapStateToProps = ({ cartList: {cartItems, loading, error, orderTotal} }) => {
    return { cartItems, loading, error, orderTotal };
}

const mapDispatchToProps = (dispatch, {dataService}) => {
    return bindActionCreators({
        removeFromCart,
        postCart: postCart(dataService)
    }, dispatch)
}

export default compose(withDataService(), connect(mapStateToProps, mapDispatchToProps))(CartListContainer);
