import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='header__navbar'>
            <ul className='header__navbar__menu capitalize'>
                <li><NavLink className="link" to='/'>home</NavLink></li>
                <li><NavLink className="link" to='/About'>about us</NavLink></li>
                <li><NavLink className="link" to='/Blog'>blog</NavLink></li>
                <li><NavLink className="link" to='/PostDetalis'>post detalis</NavLink></li>
                <li><NavLink className="link" to='/Contact'>contact us</NavLink></li>
            </ul> 
        </nav> //navbar
    )
}
export default memo(Navbar);