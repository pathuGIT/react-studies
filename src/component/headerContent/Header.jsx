import React from 'react'
import './Header.scss'
import MenuLink from '../menuLink/MenuLink'

function Header() {
  return (
    <div className='nav'>
      <div className="logo"><img src="vite.svg" alt="vite-logo" /></div>
      <div className="nav-list">
        <MenuLink name="Home" url="/"/>
        <MenuLink name="Service" url="/service"/>
        <MenuLink name="About" url="/about"/>
        <MenuLink name="Contact" url="/Contact"/>
      </div>
      <div className="login">
        <MenuLink name="Login" url="/login"/>
      </div> 
    </div>
  )
}

export default Header