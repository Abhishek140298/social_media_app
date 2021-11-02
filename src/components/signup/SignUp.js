import React, { useState } from 'react';
import './SignUp.css';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState();
  const [password, setPassword] = useState();
  const nameAssign = (e) => {setName(e.target.value)};
  const emailAssign = (e) => {setEmail(e.target.value)};
  const mobileNumberAssign = (e) => {setMobileNumber(e.target.value)};
  const passwordAsssign = (e) => {setPassword(e.target.value)};
console.log(name,email,mobileNumber,password)
  return (
    <div className='signUp_main_div'>
      <div className='signUp_form_div'>
        <h1 class>SignUp </h1>
        <form>
          <input placeholder='name' type='text' onChange={nameAssign} />
          <input placeholder='email' type='text' onChange={emailAssign} />
          <input
            placeholder='mobile Number'
            type='numeric's
            onChange={mobileNumberAssign}
          />
          <input
            placeholder='password'
            type='password'
            onChange={passwordAsssign}
          />
          <span className='form_button'>SignUp</span>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
