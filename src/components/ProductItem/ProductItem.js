import React, { Component } from 'react';

class ProductItem extends Component {

  render() {
    let {product, index} = this.props;
    let statusName = product.status ? 'Còn hàng' : 'Hết Hàng';
    let statusClass = product.status ? 'warning' : 'default';
    return (
        <tr>
            <td>{index+1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={`badge badge-${statusClass}`}>
                  {statusName}
                </span>
            </td>
            <td>
                <button type="button" className="btn btn-success">Sửa</button>
                <button type="button" className="btn btn-danger">Xóa</button>
            </td>
        </tr>
    );
  }
}

export default ProductItem;
