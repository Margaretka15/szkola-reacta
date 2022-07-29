import React from "react";

import './Dialog.css';

function Dialog({isShown, handleClose, title, content}) {
  if (isShown)
  {
    return (
      <div className="dialog">
        <h1 className="dialog__title">{title}</h1>
        <div>{content}</div>
        <button className="dialog__button" onClick={handleClose}>OK</button>
      </div>
    )
  }

}


export default Dialog;