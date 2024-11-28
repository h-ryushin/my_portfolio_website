import React from 'react'
import HeaderImage from "../img/top.png"
function Header() {
    return (
        <div className='header'>
            <div>
                <a href='/'>
                    <img src={HeaderImage} alt='header-image' />
                </a>
                <ul>
                    <li><a href='/'>WORKS</a></li>
                    <li><a href='/about'>ABOUT</a></li>
                    <li><a href='/contact'>CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
