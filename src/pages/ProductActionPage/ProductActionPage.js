import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {actAddProductRequest, actGetProductRquest, actUpdateProductRequest} from './../../actions/index';


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
      this.props.onEditProduct(id);
    }
  }
  
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
      let { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status
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
      this.props.onUpdateProduct(product);
      history.goBack();
      //history.push('/product-list');
      
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

const mapStateToProps = (state, ownProps) => {
  return {
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRquest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)

