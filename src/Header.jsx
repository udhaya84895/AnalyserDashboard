import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        {/* <BsJustify className='icon' onClick={OpenSidebar} /> */}
      </div>
      <div className='header-left'>
        {/* Uncomment the line below if you want to include a search icon in the future */}
        {/* <BsSearch className='icon' /> */}
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        {/* <BsFillEnvelopeFill className='icon' /> */}
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

export default Header;
