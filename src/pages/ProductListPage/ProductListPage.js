import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductListPage extends Component {

  constructor(props) {
    super(props);
    this.state={
      products: []
    }
  }
  

  showProduct = (products) => {
    let result = null;
    if(products.length > 0){
      result = products.map((product, index) => {
        return (
          <ProductItem
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
    callApi('products','GET',null).then(response => {
      this.setState({
        products: response.data,
      });
    })
  }
  

  render() {
    // let {products} = this.props;
    let products = this.state.products;

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

export default connect(mapStateToProps, null)(ProductListPage);

