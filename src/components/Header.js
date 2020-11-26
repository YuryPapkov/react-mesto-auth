import React from 'react';
import logoPath from '../images/logo.svg';

function Header({ children }) {
  return (
    <header className="header" >
      <img className="logo" alt="Место в России" src={logoPath} />
      {children}
    </header>
  );
}
export default Header;
