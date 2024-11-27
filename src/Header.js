import React from 'react'
import HeaderImage from "./top.png"
function Header() {
    return (
        <div className='header'>
            <div>
                <a href='../public/index.html'>
                    <img src={HeaderImage} />
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
