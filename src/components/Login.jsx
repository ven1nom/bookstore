import React from 'react'
import { Link } from 'react-router'
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className='border sky-100 h-screen  items-center justify-center '>
      <h1>Please Login</h1>
      <div>
        <form>
            <p>Email</p>
            <input type="text" placeholder='Email Address' value="" name="Email"/>
            <p>Password</p>
            <input type="text" placeholder='Password' value="" name="Password"/>    
            <div>
              <button>Login</button>
            </div>
        </form>
        
      </div>
      <div>
       
           <span>Haven't an account?</span><span>Please<Link to="/register">Register</Link></span>
        
        <div>
        <button>
        <FaGoogle />Sign in with Google
        </button>
        <p>&copy; 2025 Book Store.All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Login
