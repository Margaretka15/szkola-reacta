import React from "react";

function FormButton({position, handleClick, label}) {
  return (

    <button className={`form__navigation-button form__navigation-button--${position}`}
            type={"button"}
            onClick={handleClick}>{label}</button>

  )
}

export default FormButton;
