import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {actAddProductRequest} from './../../actions/index';


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

  componentDidMount() {
    let {match} = this.props;
    if(match){
      let id = match.params.id;
      callApi(`products/${id}`, 'GET', null).then((res) => {
        let data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status
        });
      });
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
    let { id, txtName, txtPrice, chkbStatus } = this.state;
    let {history} = this.props;
    let product = {
      id : id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }
    if(id){
      //edit
      callApi(`products/${this.state.id}`, 'PUT', {
        id: id,
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }).then(res => {
        history.goBack();
        //history.push('/product-list');
      })
    }else{
      // add new
      this.props.onAddProduct(product);
      history.goBack();
    }
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
                  checked={chkbStatus}
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductActionPage)

