import React from "react";

function TextInputStep({onChange, value, name, id, label}) {
  return (
    <div className="input__wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={"text"} onChange={onChange} name={name} value={value} id={id}/>
    </div>
  )
}


function NumberInputStep({onChange, value, id, label, name, min, max}) {
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

function SelectInputStep({onChange, value, label, id, name}) {
  return (
    <div className="input__wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={"text"} onChange={onChange} id={id} name={name} value={value}/>
    </div>

  )
}

function Summary({values, isSend}) {
  const {age, hobby, name} = values;

  if (isSend) {
    return <h3>Formularz został wysłany! </h3>
  }
  return <div className="summary">

    <div>
      <h3 className="summary__title">Podsumowanie:</h3>
      <div>Imię: {name}</div>
      <div>Wiek: {age}</div>
      <div>Hobby: {hobby}</div>
    </div>

  </div>
}

export {TextInputStep, NumberInputStep, SelectInputStep, Summary}