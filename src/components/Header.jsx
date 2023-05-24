import React from 'react';

const Header = () => {


  return (
    <>
    <header>
      <nav className="navbar">
        <a href="#home" className="logo">CryptoExtension</a>
        <ul>
          <li><a href="./Wallet/Wallet.jsx">Wallet</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;