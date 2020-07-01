import React from "react";

const CartItem = (props) => {
    const { product, removeFromCart } = props;

    const priceRef = React.createRef();
    const currencyRef = React.createRef();
    const selectCurrency = (e) => {
        priceRef.current.textContent = e.target.value;
        currencyRef.current.textContent = e.target.options[e.target.options.selectedIndex].text;
    }
    return (
        <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{ product.name }</span>
                    <p>Кол-во: { product.quantity }</p>
                    <p>Цена: <span ref={priceRef}>{ product.price }</span> <span ref={currencyRef}>{ product.currency }</span></p>
                </div>
                <div className="card-action">
                    <select onChange={selectCurrency} defaultValue={product.price} className="browser-default card-select">
                        {
                            Object.keys(product.valutes).map((it, idx) => {
                               return <option key={idx+1} value={product.valutes[it]}>{it}</option>
                            })
                        }
                    </select>
                    <button onClick={removeFromCart.bind(this, product)} className="btn waves-effect waves-light s12 del-btn" name="action">Удалить
                        <i className="material-icons right">delete</i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
