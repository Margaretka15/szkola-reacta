import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

import './NavMenu.css'

function  NavMenu ({children, toggleMenu}) {
  return (
    <nav className="nav-menu">
      {children}
      <div className="nav-menu__button" onClick={toggleMenu}><FontAwesomeIcon icon={faXmark} /></div>
    </nav>
  )
}

export default NavMenu;