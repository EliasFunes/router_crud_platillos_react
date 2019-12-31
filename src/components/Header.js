import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/productos" className="navbar-brand">
                    React CRUD & Routing
                </Link>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/productos"
                            activeClassName="active"
                        >Productos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            to="/nuevo_producto"
                            activeClassName="active"
                        >Nuevo Producto</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Header;
