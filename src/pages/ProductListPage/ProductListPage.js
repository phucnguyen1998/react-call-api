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
  
  findIndex(products,id){
    let result = -1;
    products.forEach((product,index) => {
      if(product.id === id){
        result = index;
      }
    });
    return result;
  }

  onDelete = (id) => {
    let {products} = this.state;
    callApi(`products/${id}`,'DELETE',null).then(response => {
      if(response.status === 200){
        let index = this.findIndex(products,id);
        if(index !== -1){
          products.splice(index,1);
          this.setState({
            products: products
          });
        }
      }
    })
  } 

  showProduct = (products) => {
    let result = null;
    if(products.length > 0){
      result = products.map((product, index) => {
        return (
          <ProductItem
           onDelete={this.onDelete}
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

