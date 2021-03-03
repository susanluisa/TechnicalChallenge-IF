import React from 'react';
import './Header.css';


function Header() {
  return (
    <div className="main__header">
      <div className="icon-bar">
        <i className="far fa-home-lg-alt"></i>
        <div className="icon-bar__small icon-bar__long" ></div>
        <div className="icon-bar__small "></div>
      </div>
      <div className="icon__circle "></div>
     
    </div>
  );
}

export default Header;
