import React, {useState} from "react";
import InputWrapper from "../components/InputWrapper";
import FormMessage from "../components/FormMessage";

import "../components/Form.css";

function Registration() {


  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    repeatedPassword: ""
  })

  const {email, password, repeatedPassword} = inputValues;

  const [errors, setErrors] = useState({
    hasNoLowercaseLetterError: false,
    hasNoUppercaseLetterError: false,
    hasNoDigitError: false,
    hasNoSpecialCharacterError: false,
    isTooShortPasswordError: false,
    hasRepeatedPasswordError: false,
    hasIncorrectEmailError: false

  })

  const [isFormCorrect, setIsFormCorrect] = useState(false);

  const {
    hasNoLowercaseLetterError,
    hasNoUppercaseLetterError,
    hasNoDigitError,
    hasNoSpecialCharacterError,
    isTooShortPasswordError,
    hasRepeatedPasswordError,
    hasIncorrectEmailError
  } = errors;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  const validateInput = (event) => {

    const {name, value} = event.target;
    console.log(name)
    const checkLengthPattern = /^(?=.{8,})/;
    const checkUppercasePattern = /^(?=.*[A-Z])/;
    const checkLowercasePattern = /^(?=.*[a-z])/;
    const checkDigitPattern = /(?=.*[0-9])/;
    const checkSpecialCharacterPattern = /(?=.*[!@#$%^&*])/

    const isRepeatedPasswordCorrect = (password === repeatedPassword);

    setErrors({
      ...errors,
      hasNoLowercaseLetterError: !validateWithPattern(value, checkLowercasePattern),
      hasNoUppercaseLetterError: !validateWithPattern(value, checkUppercasePattern),
      hasNoDigitError: !validateWithPattern(value, checkDigitPattern),
      hasNoSpecialCharacterError: !validateWithPattern(value, checkSpecialCharacterPattern),
      isTooShortPasswordError: !validateWithPattern(value, checkLengthPattern),
      hasRepeatedPasswordError: !isRepeatedPasswordCorrect
    })


  }
  const validateWithPattern = (value, pattern) => {
    return pattern.test(value);
  }

  const validateRepeatedPassword = () => {
    const isRepeatedPasswordCorrect = (password === repeatedPassword);
    setErrors({
      ...errors,
      hasRepeatedPasswordError: !isRepeatedPasswordCorrect
    })
  }

  const validateEmail = () => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setErrors({
      ...errors,
      hasIncorrectEmailError: !validateWithPattern(email, emailPattern)
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    setIsFormCorrect(!Object.values(errors).includes(true)); /// sprawdzam czy w errorach jest jakieś true, czyli czy jest błąd

    if (isFormCorrect) {
      ///send form
    } else {
      /// do sth else
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {hasIncorrectEmailError && <FormMessage type="warning" message={"Niepoprawny adres email"}/>}
      <InputWrapper
        type="text"
        label="Email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        handleValidation={validateEmail}/>

      {hasNoDigitError && <FormMessage type="warning" message={"Hasło powinno zawierać przynajmniej jedną cyfrę"}/>}
      {hasNoLowercaseLetterError &&  <FormMessage type="warning" message={"Hasło powinno zawierać przynajmniej jedną małą literę"}/>}
      {hasNoUppercaseLetterError &&  <FormMessage type="warning" message={"Hasło powinno zawierać przynajmniej jedną wielką literę"}/>}
      {hasNoSpecialCharacterError &&  <FormMessage type="warning" message={"Hasło powinno zawierać przynajmniej jeden znak specjalny"}/>}
      {isTooShortPasswordError &&  <FormMessage type="warning" message={"Hasło powinno zawierać przynajmniej osiem znaków"}/>}

      <InputWrapper
        type="password"
        label="Hasło"
        id="password"
        value={password}
        name="password"
        handleValidation={validateInput}
        onChange={handleChange}/>

      {hasRepeatedPasswordError && <FormMessage type="warning" message={"Hasła nie są identyczne"}/>}
      <InputWrapper
        type="password"
        label="Powtórz hasło"
        id="password-repeat"
        name="repeatedPassword"
        handleValidation={validateRepeatedPassword}
        value={repeatedPassword}
        onChange={handleChange}/>

      <button type="submit">Send</button>
      {isFormCorrect && <div>Formularz został wysłany</div>}

    </form>
  )
}

export default Registration;