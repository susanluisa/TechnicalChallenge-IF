import React from 'react';
import Boards from './Boards';
import './Main.css';


function Main() {
  return (
    <div className="main__content">
      <h1>My Boards</h1>
      <Boards />
    </div>
  );
}

export default Main;
