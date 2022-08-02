import React from "react";

function User({userData}) {
  const {
    name,
    lastname,
    age,
    ...otherProps
  } = userData;

  return (
      <div className="users-list__item">{name} {lastname}, wiek: {age}</div>
  )
}

export default User;