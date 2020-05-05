import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {

  render() {
    return (
        <table className="table table-striped" style={{width: '100%'}}>
            <thead>
              <tr id="list-header">
                <th scope="col">ID</th>
                <th scope="col">Mã Sản Phẩm</th>
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>  
            <tbody>  
              <ProductItem/>    
            </tbody>
        </table>  
    );
  }
}

export default ProductList;

