import React, {useState} from "react";

import {NumberInputStep, TextInputStep, SelectInputStep, Summary} from "../components/MultiStepForm/Steps";
import FormButton from "../components/MultiStepForm/FormButton";

function MultiStepForm() {

  const initialState = {
    name: "",
    hobby: "",
    age: ""
  }

  const [formValues, setFormValues] = useState(initialState);

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
    if (!isFormSend) {
      console.log("Dane zostały wysłane", formValues);
    }
    setIsFormSend(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    /// validate data
    sendData();
  }

  const resetForm = () => {
    setStepNumber(1);
    setFormValues(initialState);
    setIsFormSend(false);
  }

  const stepsToDisplay = {
    1: <TextInputStep onChange={handleChange} value={formValues.name} name="name" id="name" label="Podaj imię"/>,
    2: <NumberInputStep onChange={handleChange} value={formValues.age} name="age" id="age" label="Podaj wiek" min="1"
                        max="100"/>,
    3: <SelectInputStep onChange={handleChange} value={formValues.hobby} name="hobby" id="hobby"
                        label="Wybierz swoje zainteresowania"/>,
    4: <Summary values={formValues} isSend={isFormSend}/>
  }

  const displayButtons = () => {
    /// ta funkcja jest trochę nieczytelna, ale w sumie nwm jak to lepiej zrobić,
    // bo trochę warunków jednak jest tu potrzebnych :/
    if (canGoToNextStep()) {
      if (canGoToPreviousStep()) {
        return (<>
          <FormButton position="left" label="Wstecz" handleClick={goToPreviousStep}/>
          <FormButton position="right" label="Dalej" handleClick={goToNextStep}/>
        </>)

      }
      return <FormButton position="right" label="Dalej" handleClick={goToNextStep}/>;
    } else {
      if (isFormSend) {
        return <FormButton position="right" label="Wypełnij ponownie" handleClick={resetForm}/>;
      }
      if (canGoToPreviousStep()) {
        return (<>
            <FormButton position="left" label="Wstecz" handleClick={goToPreviousStep}/>
            <FormButton position="right" label="Wyślij" handleClick={sendData}/>
          </>
        )
      }
    }

  }

  return (
    <div className="form__wrapper">
      <h2 className={"form__title"}>Krok {stepNumber}</h2>
      <form className={"multi-step-form"} onSubmit={handleSubmit}>

        {stepsToDisplay[stepNumber]}

        <div className="button__wrapper">
          {displayButtons()}
        </div>


      </form>

    </div>
  );

}

export default MultiStepForm;