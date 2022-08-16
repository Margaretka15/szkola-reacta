import React from "react";

function Snackbar({title, message,  type}) {

  return (
      <div className={`snackbar snackbar--${type}`}>
        <div className={`snackbar__title`}>{title}</div>
        <p className={`snackbar__content`}>{message}</p>
      </div>
  )
}
export default Snackbar;