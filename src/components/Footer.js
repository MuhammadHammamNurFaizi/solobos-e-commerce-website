import React from 'react'
import logo from '../assets/logo.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <li ><img src={logo} alt='logo'/></li>
        <li className='footer-content-head'>Sign Up For Email</li>
        <li>Get first dibs on new styles, launches, 
          and magical updates right in your inbox.</li>
        <li><input type='text' placeholder='Email address'/><AiOutlineArrowRight/></li>
        <li>Enable Accessibility</li>
        <li>© 2023 Solobos LLC. All rights reserved.</li>
      </div>
      <div className='footer-content'>
        <li className='footer-content-head'>Support</li>
        <li>FAQs</li>
        <li>My Account</li>
        <li>Order status</li>
        <li>Return & Exchanges</li>
        <li>Contact Us</li>
      </div>
      <div className='footer-content'>
        <li className='footer-content-head'>About Us</li>
        <li>Our Story</li>
        <li>Our Stores</li>
        <li>Careers</li>
      </div>
      <div className='footer-content'>
        <li className='footer-content-head'>Shunsine Rewards</li>
        <li>What is it?</li>
        <li>Sign In/Sig Up</li>
      </div>
    </div>
  )
}

export default Footer