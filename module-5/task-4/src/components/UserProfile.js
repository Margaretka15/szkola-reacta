import React from "react";
import {useLocation} from "react-router-dom";

import './Users-style.css';

function UserProfile() {

  const location = useLocation();
  const {myState} = location.state;

  const {
    name, lastname, picture, gender, email
  } = myState;

  return (<div className="user-card">

    <img className="user-card__image" src={picture} alt=""/>
    <div className="user-card__header">{name} {lastname} </div>
    <div className="user-card__content">{gender}</div>
    <div className="user-card__content">{email}</div>

  </div>)
}

export default UserProfile;