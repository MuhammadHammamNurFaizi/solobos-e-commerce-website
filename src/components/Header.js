import React from 'react'
import {BsHandbag} from 'react-icons/bs';
import {VscAccount} from 'react-icons/vsc'
import {BiSearchAlt2} from 'react-icons/bi'
import logo from '../assets/logo.png'
import bag from '../assets/bag.png'
import search from '../assets/search.png'
import akun from '../assets/akun.png'

const Header = () => {
  return (
    <div className='navbar'>
      <div className='kategori1'>
        <div className='dropdown'>
          <li>Woman</li>
          <div className='dropdown-content'>
            <div className='dropdown-content-list'>
            <div className='content'>
                <li>New Arrivals</li>
                <li>Best Seller</li>
                <li>Sneaker</li>
                <li>Boots</li>
            </div>
            <div className='content'>
              <li>Sustainability</li>
              <li>Shop All</li>
              <li>Apparel</li>
              <li>Sale</li>
            </div>
            <div className='content'>
              <img src={logo} alt=''/>
              <p>Classic Wedge</p>
            </div>
            <div className='content'>
              <img src={logo} alt=''/>
              <p>Classic Wedge</p>
            </div>
            <div className='content'>
              <img src={logo} alt=''/>
              <p>Classic Wedge</p>
            </div>
          </div>
          </div>
        </div>
        <div className='dropdown'>
        <li>Man</li>
          <div className='dropdown-content'>
            <div className='dropdown-content-list'>
            <div className='content'>
                <li>New Arrivals</li>
                <li>Best Seller</li>
                <li>Sneaker</li>
                <li>Boots</li>
            </div>
            <div className='content'>
              <li>Sustainability</li>
              <li>Shop All</li>
              <li>Apparel</li>
              <li>Sale</li>
            </div>
            <div className='content'>
              <img src={logo} alt=''/>
              <p>Classic Wedge</p>
            </div>
            <div className='content'>
              <img src={logo} alt=''/>
              <p>Classic Wedge</p>
            </div>
            <div className='content'>
              <img src={logo} alt=''/>
              <p>Classic Wedge</p>
            </div>
          </div>
          </div>
        </div>
        <div className='dropdown'>
          <li>Sale</li>
        </div>
      </div>
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='kategori'>
        <li>Search</li>
        <li>Sign In</li>
        <li>My Bag (0)</li>
      </div>
    </div>
  )
}

export default Header