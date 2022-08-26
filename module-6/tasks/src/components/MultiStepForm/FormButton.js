import React from "react";

function FormButton({position, handleClick, label}) {
  return (

    <button className={`form__button form__button--${position}`}
            type={"button"}
            onClick={handleClick}>{label}</button>

  )
}

export default FormButton;
