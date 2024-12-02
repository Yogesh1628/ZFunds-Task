import React from 'react'
import './header.css'
import Logo from '../../assets/Zfunds logo.png'
import Arrow from '../../assets/Arrow Icon.png'
import Cart from '../../assets/Cart Icon.png'
import Search from '../../assets/Search Icon.png'

function Header() {
  return (
    <div className='Header-container'>
        <div className='left-container'>
            <img src={Arrow} alt="Arrow" />
            <p>Back</p>
        </div>
        <div className='logo-container'>
            <img src={Logo} alt="Zfunds-Logo" />
        </div>
        <div className='right-container'>
            <img src={Search} alt="Search" />
            <img src={Cart} alt="Cart" />
        </div>
    </div>
  )
}

export default Header;