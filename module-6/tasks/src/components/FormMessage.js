import React from "react";

function FormMessage ({type, message}) {
  return (<div className={`form__message form__message--${type}`}>
    {message}
  </div>)
}

export default FormMessage;