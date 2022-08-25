import React from "react";
import Registration from "./pages/Registration";
import MultiStepForm from "./pages/MultiStepForm";

import "./components/MultiStepForm/MultiStepForm.css"
import FormWithCaptcha from "./pages/FormWithCaptcha";

function App() {

  return (
    <div className="App">
      <Registration/>
      <MultiStepForm/>
      <FormWithCaptcha/>
    </div>
  );

}

export default App;
