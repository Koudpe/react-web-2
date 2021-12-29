import React from "react";
import { Link } from "react-router-dom";

import "./../App.css"

const Nav = () => {
  return (
    <div className='nav-link-wrap'>
      <div className='nav-link'>
        <Link to='/'>Home</Link>
      </div>
      <div className='nav-link'>
        <Link to='/page1'>Page1</Link>
      </div>
    </div>
  );
};

export default Nav;
