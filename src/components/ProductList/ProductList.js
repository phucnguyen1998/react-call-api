import React, { Component } from 'react';

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
              {this.props.children}   
            </tbody>
        </table>  
    );
  }
}

export default ProductList;

