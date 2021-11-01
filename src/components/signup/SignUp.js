import React from 'react';
import './SignUp.css';
const SignUp = () => {
  return (
    <div className='signUp_main_div'>
      <div className='signUp_form_div'>
        <h1 class>SignUp </h1>
        <form>
          <input placeholder='name' type='text' />
          <input placeholder='email' type='text' />
          <input placeholder='mobile Number' type='number' />
          <input placeholder='password' type='password' />
          <span className='form_button'>SignUp</span>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
