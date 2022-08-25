import React, {useState} from "react";

import {NumberInputStep, TextInputStep, SelectInputStep, Summary} from "../components/MultiStepForm/Steps";
import FormButton from "../components/MultiStepForm/FormButton";

function MultiStepForm() {

  const [formValues, setFormValues] = useState({
    name: "",
    hobby: "",
    age: ""
  })

  const [stepNumber, setStepNumber] = useState(1);

  const [isFormSend, setIsFormSend] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const totalNumberOfSteps = 4;

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
   if(!isFormSend) {
     console.log("Dane zostały wysłane", formValues);
   }
    setIsFormSend(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    /// validate data
    sendData();
  }
  const stepsToDisplay = {
    1: <TextInputStep onChange={handleChange} value={formValues.name} name="name" id="name" label="Podaj imię"/>,
    2: <NumberInputStep onChange={handleChange} value={formValues.age} name="age" id="age" label="Podaj wiek" min="1" max="100"/>,
    3: <SelectInputStep onChange={handleChange} value={formValues.hobby} name="hobby" id="hobby"
                        label="Wybierz swoje zainteresowania"/>,
    4: <Summary values={formValues} isSend={isFormSend}/>
  }

  return (
    <div className="form__wrapper">
      <h2 className={"form__title"}>Krok {stepNumber}</h2>
      <form className={"multi-step-form"} onSubmit={handleSubmit}>

        {stepsToDisplay[stepNumber]}

        <div className="button__wrapper">
          {canGoToPreviousStep() &&
          <FormButton position="left" label="Wstecz" handleClick={goToPreviousStep}/>}

          {
            canGoToNextStep() ?
              <FormButton position="right" label="Dalej" handleClick={goToNextStep}/>
              :
              <FormButton position="right" label="Wyślij" handleClick={sendData}/>
          }
        </div>



      </form>

    </div>
  );

}

export default MultiStepForm;