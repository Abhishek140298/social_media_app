import React from 'react';
import './Login.css';
import {Redirect} from 'react-router-dom';


const Login = () => {

  return (
    
    <div className='main_login_div'>
      <div className='form_div'>
        <h1 className='login_heading'>Login</h1>
        <form>
          
          
            <input placeholder='UserName' type='text' />
          
          
            
            <input placeholder='Password' type='password' />
          
          <div className='button_div'>
            <span className='form_button' >Login</span>
            <span className='form_button'>SignUp</span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
