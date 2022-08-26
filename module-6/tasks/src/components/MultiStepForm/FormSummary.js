import React from "react";


function FormSummary({values, isSend}) {
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

export default FormSummary;