import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';

class ProductListPage extends Component {

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

  render() {
    let products = [];
    return (
      <div className="container-fluid">
          <h1 className="display-4 my-4 text-info">List of products</h1>
          <button type="button" className="btn btn-primary mb-1">Thêm sản phẩm</button>
          <ProductList>
            {this.showProduct(products)}
          </ProductList>
      </div>
    );
  }
}

export default ProductListPage;

