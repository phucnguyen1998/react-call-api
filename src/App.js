import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';

class App extends Component {

  render() {
    return (
      <div>
        <Menu/>

        <div className="container-fluid">
          <h1 className="display-4 my-4 text-info">List of products</h1>
          <button type="button" className="btn btn-primary mb-1">Thêm sản phẩm</button>
          <ProductList/>
        </div>
      </div>
    );
  }
}

export default App;
