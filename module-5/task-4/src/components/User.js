import React from "react";
import {NavLink} from "react-router-dom";

function User({userData}) {
  const {
    name,
    lastname,
    ...otherProps
  } = userData;

  return (
    <NavLink to="user-profile" state={{myState: userData}} className="users-list__item">
      {name} {lastname}
    </NavLink>
  )
}

export default User;