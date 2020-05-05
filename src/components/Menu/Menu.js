import React, { Component } from 'react';

class Menu extends Component {

  render() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link">CALL API</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trang chủ</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Quản lý sản phẩm</a>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Menu;

