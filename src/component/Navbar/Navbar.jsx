import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Search from '../../assets/search_icon.svg'
import Bellicon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" className='logo' />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & popular</li>
          <li>My list</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={Search} alt="" className='icons'/>
        <p>Children</p>
        <img src={Bellicon} alt="" className='icons' />
        <div className="navbar-profile">
        <img src={profile_img} alt="" className='profile' />
        <img src={caret_icon} alt="" />
        <div className="dropdown">
          <p>Sign Out of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
