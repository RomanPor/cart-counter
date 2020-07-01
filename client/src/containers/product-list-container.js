import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {fetchCatalog} from "../actions/product-list";
import withDataService from "../hocs/with-data-service";
import compose from "../utils/compose";
import {bindActionCreators} from "redux";
import ProductList from "../components/product-list/product-list";
import RequestStatus from "../hocs/request-status";
import {addToCart} from "../actions/cart-list";


class ProductListContainer extends PureComponent {
    componentDidMount() {
        this.props.fetchCatalog();
    }

    render() {
        const { list, loading, error, addToCart } = this.props;
        return (
            <RequestStatus loading={loading} error={error}>
                <ProductList list={list} addToCart={addToCart} />
            </RequestStatus>
        );
    }
}

const mapStateToProps = ({ productList: { list, loading, error } }) => {
    return { list, loading, error };
}

const mapDispatchToProps = (dispatch, { dataService }) => {
    return bindActionCreators({
        fetchCatalog: fetchCatalog(dataService),
        addToCart: addToCart
    }, dispatch)
}

export default compose(withDataService(), connect(mapStateToProps, mapDispatchToProps))(ProductListContainer);
