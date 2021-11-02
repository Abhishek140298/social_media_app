import React ,{useState} from 'react';
import './Login.css';
import {Redirect} from 'react-router-dom';


const Login = () => {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState();
  const setName=(e)=>{
 setUserName(e.target.value);
  }
  const passwordSet=(e)=>{
  setPassword(e.target.value)
  }
 console.log(userName,password);
  return (
    
    <div className='main_login_div'>
      <div className='form_div'>
        <h1 className='login_heading'>Login</h1>
        <form>
          
          
            <input placeholder='UserName' type='text' onChange={setName} />
          
          
            
            <input placeholder='Password' type='password' onChange={passwordSet} />
          
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
