import React from 'react'
import { Link } from 'react-router-dom'
import { FcHome } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { LuCakeSlice } from "react-icons/lu";


function Nav() {
  return (
    <div className='navbar'>
    <div className='nav-links'>
    <FcHome size={40} />
      <Link to="/Home">Home</Link>
    </div>
    <div className='nav-links'>
    <FcContacts  size={40}/>
      <Link to="/Contacto">Contacto</Link>
     
    </div>
    <h2 className='NavBarH2'>Happy Cake</h2>
    <LuCakeSlice size={40} />
  </div>
  );
}

export default Nav
