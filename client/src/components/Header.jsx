import React from 'react';
import DropdownMenu from './DropdownMenu';
import '../styles/header.css';

const Header = () => (
  <nav className='navbar'>
    <a href='/'>
      <h2 style={{ padding: '0 16px' }}>SSBU TIERLIST</h2>
    </a>
    <DropdownMenu />
  </nav>
);

export default Header;
