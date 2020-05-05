import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

// Custom Link

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: false 
    },
];

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={() => {
                return (
                    <li className="nav-item">
                        <Link to={to} className="nav-link">
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    )
}
// End custom Link

class Menu extends Component {

    showMenu = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/>
                )
            })
        }
        return result;
    }

    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link">CALL API</Link>
                    </li>
                    {this.showMenu(menus)}
                </ul>
            </nav>
        );
    }
}

export default Menu;

