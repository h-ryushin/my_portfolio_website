import React from 'react'
import topImage from "../img/top.png";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='header'>
            <div>
                <Link to="/my_portfolio_website/">
                    <img src={topImage} alt='header-image' />
                </Link>
                <ul>
                    <li><Link to="/my_portfolio_website/">WORKS</Link></li>
                    <li><Link to="/my_portfolio_website/about">ABOUT</Link></li>
                    <li><Link to="/my_portfolio_website/contact">CONTACT</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header




