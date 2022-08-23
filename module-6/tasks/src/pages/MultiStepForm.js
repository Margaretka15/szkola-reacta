import React, {useState} from "react";

import {AgeStep, TextInputStep, HobbyStep, Summary} from "../components/MultiStepForm/Steps";

function MultiStepForm() {

  const [formValues, setFormValues] = useState({
    name: "",
    hobby: "",
    age: ""
  })

  const [stepNumber, setStepNumber] = useState(1);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const totalNumberOfSteps = 4;

  /// a może lepiej canGoToNextStep i canGoToPreviousStep trzymać w stanie?
  const canGoToNextStep = () => {
    return (stepNumber < totalNumberOfSteps)
  }
  const canGoToPreviousStep = () => {
    return (stepNumber > 1)
  }
  const goToNextStep = () => {
    if (canGoToNextStep()) {
      setStepNumber((step) => step + 1)
    }
  }
  const goToPreviousStep = () => {
    if (canGoToPreviousStep()) {
      setStepNumber((step) => step - 1)
    }
  }
  const sendData = () => {
    console.log("Dane zostały wysłane", formValues)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    /// validate data
    sendData();
  }
  const stepsToDisplay = {
    1: <TextInputStep onChange={handleChange} value={formValues.name} name="name" id="name" label="Podaj imię"/>,
    2: <AgeStep onChange={handleChange} value={formValues.age}/>,
    3: <HobbyStep onChange={handleChange} value={formValues.hobby}/>,
    4: <Summary sendData={sendData} values={formValues}/>
  }

  return (
    <div className="form__wrapper">
      <h2>Step {stepNumber}</h2>
      <form className={"multi-step-form"} onSubmit={handleSubmit}>

        {stepsToDisplay[stepNumber]}

        <div className="button__wrapper">
          {canGoToPreviousStep() &&
          <button className={"form__navigation-button form__navigation-button--back"}
                  type={"button"}
                  onClick={goToPreviousStep}>Wstecz</button>}

          {canGoToNextStep() &&
          <button className={"form__navigation-button form__navigation-button--next"}
                  type={"button"} onClick={goToNextStep}>Dalej</button>}

        </div>


      </form>

    </div>
  );

}

export default MultiStepForm;