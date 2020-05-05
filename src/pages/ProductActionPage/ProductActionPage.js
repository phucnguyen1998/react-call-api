import React, { Component } from 'react';


class ProductActionPage extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <form>
            <div className="form-group">
              <label>Tên sản phẩm</label>
              <input type="text" className="form-control" placeholder="Tên sản phẩm" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Giá</label>
              <input type="number" className="form-control" />
            </div>
            <div className="form-check">
              <label>
                <input type="checkbox"/>
                Còn Hàng
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Lưu</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductActionPage;

