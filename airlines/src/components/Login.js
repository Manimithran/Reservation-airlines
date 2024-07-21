import React from 'react';
import './Login.css';
const Login = () => {
  return (
    <>
    
    <div className='container1'>
        <div className='LoginBox'>
         
          <form action=''>
          <h3>Sign Up</h3>
          <label htmlFor='userName'>
            <input type='text' placeholder='Enter the User Name' required/>
          </label>
          <label htmlFor='password'>
            <input type='password' placeholder='Enter the Password' required/>
            </label>  
            <button className='submitButton' type='submit'>Submit</button>  
            <p>Already have account?&nbsp;<a>Login</a></p>
            </form>
        </div>
    </div>
    
    </>
  )
};

export default Login;
