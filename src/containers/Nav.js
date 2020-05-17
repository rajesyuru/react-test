import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <ul className="Navigation">
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/todo">Todo</NavLink></li>
            <li><NavLink to="/person">Person</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
        </ul>
    )
}

export default Nav
