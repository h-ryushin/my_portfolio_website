import React from 'react'
import topImage from "../img/top.png";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='header'>
            <div>
                <a href='#/'>
                    <img src={topImage} alt='header-image' />
                </a>
                <ul>
                    <li><Link to="/">WORKS</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header




