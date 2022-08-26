import React from "react";

function NumberInputWrapper({onChange, value, id, label, name, min, max}) {
  // dałam min max, ale dalej można wpisać ręcznie np. -5, więc średnio,
  // ale nie chcialam się jakoś skupiać na walidacji w tym zadaniu,
  // bo miałam dość innych problemów ;)
  return (
    <div className="input__wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={"number"} onChange={onChange} id={id} name={name} value={value} min={min} max={max}/>
    </div>
    );
}



export default NumberInputWrapper;