import React, {useState} from "react";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';


function App() {

  const [isMenuShown, setIsMenuShown] = useState(false);

  const toggleMenu = () => {
    setIsMenuShown(isMenuShown => !isMenuShown);
  }
  const setStyleForActive = (isActive) => {
    return isActive ? "nav-menu__link nav-menu__link--active" : "nav-menu__link";
  }

  return (
    <div>
      <BrowserRouter>
        <div className="nav-menu__button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars}/>
        </div>

        {
          isMenuShown && (<NavMenu toggleMenu={toggleMenu}>
            <NavLink to="/" className={({isActive}) => setStyleForActive(isActive)}>Home</NavLink>
            <NavLink to="about" className={({isActive}) => setStyleForActive(isActive)}>About</NavLink>
            <NavLink to="contact" className={({isActive}) => setStyleForActive(isActive)}>Contact</NavLink>
          </NavMenu>)
        }
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>

      </BrowserRouter>

    </div>


  )
}

export default App;
