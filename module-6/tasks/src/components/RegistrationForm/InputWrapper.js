import React from "react";

function InputWrapper(props) {

  const {
    type,
    label,
    name,
    handleValidation,
    id,
    value,
    onChange
  } = props;


  return (
    <div>
      <label className="form__label" htmlFor={id}>{label}</label>
      <input type={type}
             id={id}
             onBlur={handleValidation}
             onChange={onChange}
             name={name}
             value={value}
             className="form__input"/>
    </div>
  )
}

export default InputWrapper;