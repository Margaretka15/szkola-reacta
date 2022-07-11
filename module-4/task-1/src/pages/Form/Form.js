import React, {useRef, useState} from "react";


import './Form.css';
import useInputHook from "../../hooks/useInputHook";

function Form() {

    const [name, onNameChange, clearName] = useInputHook('');
    const [lastname, onLastnameChange, clearLastname] = useInputHook('');

    const [bio, onBioChange, clearBio] = useInputHook('');

    const [termsAccepted, onTermsAcceptedChange] = useState(false);
    const [gender, onGenderChange] = useState('');

    const [formIsValid, setFormIsValid] = useState(false);

    const nameInputWrapper = useRef();
    const lastnameInputWrapper = useRef();
    const genderRadioWrapper = useRef();
    const bioTextareaWrapper = useRef();
    const termsAcceptedCheckboxWrapper = useRef();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            setFormIsValid(true);
            clearName();
            clearLastname();
            onGenderChange('');
            clearBio();
            onTermsAcceptedChange(false);
        }
    }

    const isFormValid = () => {
        let isValid = true;

        const validateInput = (input, wrapper) => {
            if (input === "") {
                wrapper.current.className = "not-valid";
                isValid = false;
            } else {
                wrapper.current.className = "valid";
            }
        }

        validateInput(name, nameInputWrapper);
        validateInput(lastname, lastnameInputWrapper);
        validateInput(gender, genderRadioWrapper);
        validateInput(bio, bioTextareaWrapper);

        if (!termsAccepted) {
            isValid = false;
            termsAcceptedCheckboxWrapper.current.className = "not-valid";
        } else {
            termsAcceptedCheckboxWrapper.current.className = "valid";
        }

        return isValid;
    }

    return (
        <form className="form" onSubmit={handleOnSubmit}>
            <p>Witaj, powiedz nam coś o sobie!</p>

            <div ref={nameInputWrapper}>
                <input className="form__input" type="text" placeholder="Wpisz swoje imię"
                       onChange={onNameChange} value={name}/>
            </div>

            <div ref={lastnameInputWrapper}>
                <input className="form__input" type="text" placeholder="Wpisz swoje nazwisko"
                       onChange={onLastnameChange}
                       value={lastname}/>
            </div>

            <div ref={bioTextareaWrapper}>
                <textarea className="form__input" name="bio" rows="10" placeholder="Napisz coś o sobie!"
                          onChange={onBioChange} value={bio}/>
            </div>


            <div ref={genderRadioWrapper}>
                <div>
                    <input type="radio" id="female" name="gender_selection"
                           checked={gender === "female"}
                           onChange={() => onGenderChange("female")}/>
                    <label htmlFor="female">Kobieta</label>
                </div>

                <div>
                    <input ref={genderRadioWrapper} type="radio" id="male" name="gender_selection"
                           checked={gender === "male"}
                           onChange={() => onGenderChange("male")}/>
                    <label htmlFor="male">Mężczyzna</label>
                </div>

                <div>
                    <input ref={genderRadioWrapper} type="radio" id="other" name="gender_selection"
                           checked={gender === "other"}
                           onChange={() => onGenderChange("other")}/>
                    <label htmlFor="other">Inna</label>
                </div>
            </div>
            <div ref={termsAcceptedCheckboxWrapper}>
                <input type="checkbox" id="accept_terms" onChange={(e) => onTermsAcceptedChange(e.target.checked)}
                       checked={termsAccepted}/>
                <label htmlFor="accept_terms">Wyrażam zgodę na przetwarzanie moich danych osobowych oraz akceptuję
                    warunki korzystania z serwisu.</label>
            </div>


            <button type="submit">Wyślij</button>
            {formIsValid && <div className="success-message">
                Dziękujemy, Twój formularz został wysłany!
            </div>}
        </form>
    )
}

export default Form;