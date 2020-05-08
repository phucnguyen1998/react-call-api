import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductRequest, actDeleteProductRequest } from './../../actions/index';

class ProductListPage extends Component {

  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  } 

  showProduct = (products) => {
    let result = null;
    if(products.length > 0){
      result = products.map((product, index) => {
        return (
          <ProductItem
            onDelete={this.onDelete}
            key={index}
            product={product}
            index={index}
          />
        )
      })
    }
    return result;
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }
  

  render() {
    let {products} = this.props;
    //let products = this.state.products;

    return (
      <div className="container-fluid">
          <h1 className="display-4 my-4 text-info">List of products</h1>
          <Link to='/product/add' className="btn btn-primary mb-1">Thêm sản phẩm</Link>
          <ProductList>
            {this.showProduct(products)}
          </ProductList>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductRequest())
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);

