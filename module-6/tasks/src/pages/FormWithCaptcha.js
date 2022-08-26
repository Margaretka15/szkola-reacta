import React, {useState} from "react";
import {TextInputWrapper, FormButton} from "../components/MultiStepForm"; 

function FormWithCaptcha() {

  const initialState = {
    name: "",
    lastname: ""
  }
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form className="form__wrapper fit-content" onSubmit={handleSubmit}>
      <h3 className="form__title">Formularz z reCaptcha</h3>

      <TextInputWrapper onChange={handleChange} value={formValues.name} name="name" id="name" label="Podaj imię:"/>
      <TextInputWrapper onChange={handleChange} value={formValues.lastname} name="lastname" id="lastname" label="Podaj nazwisko:"/>

      <FormButton type="submit" position="center" label="Wyślij"/>
    </form>
  )
}

export default FormWithCaptcha;