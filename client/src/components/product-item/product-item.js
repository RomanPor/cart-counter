import React from "react";

const ProductItem = (props) => {
    const { product, addToCart } = props;

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
                    <select className="browser-default card-select" defaultValue={product.price} onChange={selectCurrency}>
                        {
                            Object.keys(product.valutes).map((it, idx) => {
                               return <option key={idx+1} value={product.valutes[it]}>{it}</option>
                            })
                        }
                    </select>
                    <button onClick={addToCart.bind(this, product)} className="btn waves-effect waves-light s12" name="action">Добавить
                        <i className="material-icons right">add</i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
