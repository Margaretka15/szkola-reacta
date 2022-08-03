import React from "react";
import UsersContainer from "./components/UsersContainer";

import './global-styles/styles.css'

import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UserProfile from "./components/UserProfile";


function App() {


  return (
    <BrowserRouter>
      <div className="wrapper">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="users" className="nav-link">Użytkownicy</NavLink>
      </div>


      <div className="wrapper">
        <Routes>
          <Route path="/" element={<div>Witaj! Zobacz naszych użytkowników</div>}/>
          <Route path="users" element={<UsersContainer/>}/>
          <Route path="users/user-profile" element={<UserProfile/>}/>
        </Routes>
      </div>

    </BrowserRouter>


  )
}

export default App;
