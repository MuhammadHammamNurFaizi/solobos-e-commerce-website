import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/signin.scss'
const Register = () => {
  return (
    <div>
      <Header/>
      <div className='signin'>
        <h1>Sign Up</h1>
        <h3>Manage your orders, get free shipping, earn $$, plus early access to new styles & more</h3>
        <input type='email' placeholder='Email address'/>
        <input type='password' placeholder='Password'/>
        <button>Sign Up</button>
        <div className='text'>
        <p>Already have an account? <span>Sign in</span></p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Register