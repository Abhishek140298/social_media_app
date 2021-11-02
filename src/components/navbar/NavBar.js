import React from 'react';
import './NavBar.css';
import { BsHouseDoor,BsPeopleFill,BsFillChatRightTextFill } from "react-icons/bs"

const NavBar = () => {
  return (
    <div className='main_navbar_div'>
      <div className='left_div'>
        <h1>Social Media</h1>
        <div className='search_bar_div'>
          <input placeholder='search' type='text' />
        </div>
      </div>
      <div className='right_div'>
        <h3><BsHouseDoor/> Home</h3>
        <h3><BsPeopleFill/>Connection</h3>
        <h3><BsFillChatRightTextFill/>Messages</h3>
        <h3>Profile</h3>
      </div>
    </div>
  );
};
export default NavBar;
