import React, { Component } from 'react';

class ProductItem extends Component {

  render() {
    return (
        <tr>
            <td>1</td>
            <td>SS</td>
            <td>SS</td>
            <td>123321</td>
            <td>
                <span className="badge badge-info">
                còn hàng
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

