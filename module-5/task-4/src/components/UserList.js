import React from "react";

import './Users-style.css'
import User from "./User";

function UserList ({data, search}) {

  return (
    <div className="users-list">
      <div className="users-list__title">Użytkownicy: </div>
      {search(data).map((item, index) => <User key={index} userData={item}/>)}
    </div>
  )
}

export default UserList;