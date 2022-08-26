import React from "react";

function FormSummary({isSend, children}) {
  if (isSend) {
    return <h3>Formularz został wysłany! </h3>
  }
  return <div className="summary">
    <div>
      <h3 className="summary__title">Podsumowanie:</h3>
      {children}
    </div>

  </div>
}

export default FormSummary;