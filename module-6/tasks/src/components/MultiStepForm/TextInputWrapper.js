import React from "react";

function TextInputWrapper({onChange, value, name, id, label}) {
  return (
    <div className="input__wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={"text"} onChange={onChange} name={name} value={value} id={id}/>
    </div>
  )
}

export default TextInputWrapper;