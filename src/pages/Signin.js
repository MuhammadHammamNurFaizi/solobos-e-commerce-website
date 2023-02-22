import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/signin.scss'
const Signin = () => {
  return (
    <div>
      <Header/>
      <div className='signin'>
        <h1>Welcome Back</h1>
        <h3>Log in to view your account and your rewards balance.</h3>
        <input type='email' placeholder='Email address'/>
        <input type='password' placeholder='Password'/>
        <button>Sign In</button>
        <div className='text'>
        <p>Forgot your password?</p>
        <p>Don’t have an account? <span>Sign up</span></p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Signin