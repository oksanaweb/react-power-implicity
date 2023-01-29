import React from 'react'
import "./header.scss"
import logo from "../../icons/vector.png"



export const Header = () => {
  return (
    <header>
      <header className='header__content container'>
       <img src={logo} alt='logo' className='header__logo'></img>
        <nav className=''>
          <a href=''className='header__nav-link'>Features</a>
          <a href=''className='header__nav-link'>Partners</a>
          <a href=''className='header__nav-link'>Stories</a>
        </nav>
        <button className='header__button'>Download for free</button>
      </header>
    </header>
  )
}

