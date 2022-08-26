import React from "react";

function SelectInputWrapper({onChange, value, label, id, name, children}) {
  return (
    <div className="input__wrapper">
      <label htmlFor={id}>{label}</label>
      <select onChange={onChange} id={id} name={name} value={value}>
        {children}
      </select>
    </div>

  )
}
export default SelectInputWrapper;