import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState , setsignState] = useState("Sign In")

  return (
    <div className='login'>
      <img src={logo} className='logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form> 
          {signState==="Sign Up"?<input type="text" placeholder='username' />:<></>}        
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me </label>
            </div>
            <p>Need help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"? <p>New to Netflix <span onClick={()=>{setsignState("Sign Up")}}>Sign up Now</span></p>
          :           <p>Already have account? <span onClick={()=>{setsignState("Sign In")}}>Sign In Now</span></p>
        }
        </div>
      </div>
      
    </div>
  )
}

export default Login
