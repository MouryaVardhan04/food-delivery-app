import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-brand'>
        <img className='navbar-logo' src={assets.logo} alt="Admin Panel Logo" />
        <h1 className='navbar-title'>Vintage Zaika</h1>
      </div>
      <div className='navbar-profile'>
        <img className='navbar-profile-image' src={assets.profile_image} alt="Admin Profile" />
      </div>
    </div>
  )
}

export default Navbar
