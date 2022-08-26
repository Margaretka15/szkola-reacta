import React, {useEffect, useState} from "react";
import {InputWrapper, FormMessage} from "../components/RegistrationForm";

import "../components/RegistrationForm/Form.css";

function Registration() {

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    repeatedPassword: ""
  })

  const {email, password, repeatedPassword} = inputValues;

  const [passwordErrors, setPasswordErrors] = useState({
    hasNoLowercaseLetterError: false,
    hasNoUppercaseLetterError: false,
    hasNoDigitError: false,
    hasNoSpecialCharacterError: false,
    isTooShortPasswordError: false,
    hasRepeatedPasswordError: false,

  })

  const [hasIncorrectEmailError, setIncorrectEmailError] = useState(false);

  const [isEmailDuplicatedError, setEmailDuplicatedError] = useState(false);

  const [isFormCorrect, setIsFormCorrect] = useState(false);

  const [isFormSent, setIsFormSent] = useState(false);

  const [isMailCheckInProgress, setIsMailCheckInProgress] = useState(false) /// moze się przydać do wyświetlenia jakiegoś kółeczka "weryfikacja adresu e-mail..."

  const {
    hasNoLowercaseLetterError,
    hasNoUppercaseLetterError,
    hasNoDigitError,
    hasNoSpecialCharacterError,
    isTooShortPasswordError,
    hasRepeatedPasswordError,
  } = passwordErrors;


  useEffect(() => {
    if (!hasIncorrectEmailError) {
      searchForDuplicatedEmail(); ///
    }
  }, [hasIncorrectEmailError]);

  const searchForDuplicatedEmail = () => {
    setIsMailCheckInProgress(true);
    fetch('./data/data.json')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(responseData => {
        const isDuplicated = (responseData.filter(user => user.email === email).length > 0);
        setEmailDuplicatedError(isDuplicated);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsMailCheckInProgress(() => false));

  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  const validatePassword = () => {

    const checkLengthPattern = /^(?=.{8,})/;
    const checkUppercasePattern = /^(?=.*[A-Z])/;
    const checkLowercasePattern = /^(?=.*[a-z])/;
    const checkDigitPattern = /(?=.*[0-9])/;
    const checkSpecialCharacterPattern = /(?=.*[!@#$%^&*])/

    const isRepeatedPasswordCorrect = (password === repeatedPassword);
    // tak dziala, ale chyba fajnie byłoby tu wywołać istniejącą już validateRepeatedPassword, skoro ma robić to samo
    // tyle że wtedy nie działa. Podejrzewam że stan się nie zdąży zmienić i przez to tracimy część informacji?
    /// może podejście do stanu (i tego gdzie i jak się on zmienia) w tym zadaniu od początku nie było dobre? :(

    setPasswordErrors({
      ...passwordErrors,
      hasNoLowercaseLetterError: !validateWithPattern(password, checkLowercasePattern),
      hasNoUppercaseLetterError: !validateWithPattern(password, checkUppercasePattern),
      hasNoDigitError: !validateWithPattern(password, checkDigitPattern),
      hasNoSpecialCharacterError: !validateWithPattern(password, checkSpecialCharacterPattern),
      isTooShortPasswordError: !validateWithPattern(password, checkLengthPattern),
      hasRepeatedPasswordError: !isRepeatedPasswordCorrect
    })

  }
  const validateWithPattern = (value, pattern) => {
    return pattern.test(value);
  }

  const validateRepeatedPassword = () => {
    const isRepeatedPasswordCorrect = (password === repeatedPassword);
    setPasswordErrors({
      ...passwordErrors,
      hasRepeatedPasswordError: !isRepeatedPasswordCorrect
    })
  }

  const validateEmail = () => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setIncorrectEmailError(!validateWithPattern(email, emailPattern))

    if (!hasIncorrectEmailError) {
      searchForDuplicatedEmail();
    }
  }

  useEffect(() => {
    let isCorrect;
    if (Object.values(inputValues).includes("")) {
      // w ten sposób zabezpieczam się przed wysłaniem pustego formularza w który użytkownik nie kliknął, jako że wszystkie walidacje są dopiero onBlur
      isCorrect = false;
    } else {
      isCorrect = !Object.values(passwordErrors).includes(true) && !hasIncorrectEmailError && !isEmailDuplicatedError;
    }
    setIsFormCorrect(isCorrect)
  }, [passwordErrors, hasIncorrectEmailError, isEmailDuplicatedError])

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormCorrect) {
      ///send form
      setIsFormSent(true);

      setInputValues({
        email: "",
        password: "",
        repeatedPassword: ""
      });

    } else {
      /// do sth else
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {hasIncorrectEmailError && <FormMessage type="warning" message={"Niepoprawny adres email"}/>}
      {isEmailDuplicatedError &&
      <FormMessage type="warning" message={"Użytkownik o takim adresie email już istnieje"}/>}
      <InputWrapper
        type="text"
        label="Email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        handleValidation={validateEmail}/>

      {hasNoDigitError &&
      <FormMessage type="warning" message={"Hasło powinno zawierać przynajmniej jedną cyfrę"}/>}
      {hasNoLowercaseLetterError &&
      <FormMessage type="warning" message={"Hasło powinno zawierać przynajmniej jedną małą literę"}/>}
      {hasNoUppercaseLetterError &&
      <FormMessage type="warning" message={"Hasło powinno zawierać przynajmniej jedną wielką literę"}/>}
      {hasNoSpecialCharacterError &&
      <FormMessage type="warning" message={"Hasło powinno zawierać przynajmniej jeden znak specjalny"}/>}
      {isTooShortPasswordError &&
      <FormMessage type="warning" message={"Hasło powinno zawierać przynajmniej osiem znaków"}/>}

      <InputWrapper
        type="text"
        label="Hasło"
        id="password"
        value={password}
        name="password"
        handleValidation={validatePassword}
        onChange={handleChange}/>

      {hasRepeatedPasswordError && <FormMessage type="warning" message={"Hasła nie są identyczne"}/>}
      <InputWrapper
        type="text"
        label="Powtórz hasło"
        id="password-repeat"
        name="repeatedPassword"
        handleValidation={validateRepeatedPassword}
        value={repeatedPassword}
        onChange={handleChange}/>

      <button type="submit">Send</button>
      {isFormSent && <FormMessage type={"correct"} message={"Formularz został wysłany"}/>}

    </form>
  )
}

export default Registration;