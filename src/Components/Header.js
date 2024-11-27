import React from 'react'
import HeaderImage from "../img/top.png"
function Header() {
    return (
        <div className='header'>
            <div>
                <a href='../public/index.html'>
                    <img src={HeaderImage} alt='header-image' />
                </a>
                <ul>
                    <li>WORKS</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
