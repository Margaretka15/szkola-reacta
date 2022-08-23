import React from "react";

function TextInputStep({onChange, value, name, id, label}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={"text"} onChange={onChange} name={name} value={value} id={id}/>
    </div>
  )
}


function AgeStep({onChange, value}) {
  return (
    <input type={"number"} onChange={onChange} name="age" value={value}/>
  );
}

function HobbyStep({onChange, value}) {
  return (
    <input type={"text"} onChange={onChange} name="hobby" value={value}/>
  )
}

function Summary({values, sendData}) {
  const {age, hobby, name} = values;

  return <div>
    <h3>Podsumowanie:</h3>
    <div>Imię: {name}</div>
    <div>Wiek: {age}</div>
    <div>Hobby: {hobby}</div>
    <button onClick={sendData}>Wyślij</button>
  </div>
}

export {TextInputStep, AgeStep, HobbyStep, Summary}