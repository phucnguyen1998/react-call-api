import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';


class ProductActionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtName: '',
      txtPrice: '',
      chkbStatus: '',
      id: ''
    }
  }
  
  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  } 

  onSave = (e) => {
    e.preventDefault();
    let { txtName, txtPrice, chkbStatus } = this.state;
    let {history} = this.props;
    callApi('products', 'POST', {
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }).then(res => {
      history.goBack();
      //history.push('/product-list');
    })
  }

  render() {
    let { txtName,txtPrice,chkbStatus } = this.state;
    return (
      <div className="container-fluid">
        <div className="container">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label>Tên sản phẩm</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Tên sản phẩm" 
                name="txtName"
                value={txtName}
                onChange= {this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Giá</label>
              <input 
                type="number" 
                className="form-control" 
                name="txtPrice" 
                value={txtPrice}
                onChange= {this.onChange}
              />
            </div>
            <div className="form-check">
              <label>
                <input 
                  type="checkbox" 
                  name="chkbStatus"
                  value={chkbStatus}
                  onChange= {this.onChange}
                />
                Còn Hàng
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Lưu</button>
            <Link className="btn btn-primary" to='/product-list'>Tro Lai</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductActionPage;

