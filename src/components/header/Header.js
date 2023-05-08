import React, {memo } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "./header.css";

function Header() {
    var check =false;
    const handleMenuIcon = (e) =>{

        const navbarDom = document.querySelector('.header__navbar');
        document.querySelector('.bars').classList.toggle("change"); 
        if(check == false){
            navbarDom.style.left = "0";
            navbarDom.style.opacity = "1";
            navbarDom.style.visibility = "visible";
            check = true;
        }else{
            navbarDom.style.left = "-100%";
            navbarDom.style.opacity = "0";
            navbarDom.style.visibility = "hidden";
            check = false;
        }
    }

    return (
        <header className='header'>
            <div className='myContainer'>
                <div className='header__content'>
                    <Link to='/'><h3 className='header__logo uppercase'>stand blog<em>.</em></h3></Link>
                    <div className='bars pointer' onClick={ handleMenuIcon}>
                        <div className='dot dot1'></div>
                        <div className='dot dot2'></div>
                        <div className='dot dot3'></div>
                    </div>
                    <Navbar />
                </div>
            </div>
        </header> //header
    )
}
export default memo(Header);