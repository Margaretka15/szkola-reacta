import React, {useState} from "react";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';


function App() {

  const [isMenuShown, setIsMenuShown] = useState(false);

  const toggleMenu = () => {
    setIsMenuShown(isMenuShown => !isMenuShown);
  }

  return (
    <div>
      <BrowserRouter>
        <div className="nav-menu__button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars}/>
        </div>

        {
          isMenuShown && (<NavMenu>
            <Link to="/" className="nav-menu__link">Home</Link>
            <Link to="about" className="nav-menu__link">About</Link>
            <Link to="contact" className="nav-menu__link">Contact</Link>
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
