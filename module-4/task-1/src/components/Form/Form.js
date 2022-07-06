import React, {useRef, useState} from "react";


import './Form.css';
import useInputHook from "../../hooks/useInputHook";

const styles = {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    marginTop: 20,

    input: {
        marginBottom: 5,
        width: '100%'
    }

}

function Form() {

    const [name, onNameChange, clearName] = useInputHook('');
    const [lastname, onLastnameChange, clearLastname] = useInputHook('');

    const [bio, onBioChange, clearBio] = useInputHook('');

    const [termsAccepted, onTermsAcceptedChange] = useState(false); /// co z tym xD
    const [gender, onGenderChange] = useState('');


    const nameInputWrapper = useRef();
    const lastnameInputWrapper = useRef();
    const genderRadioWrapper = useRef();
    const bioTextareaWrapper = useRef();
    const termsAcceptedCheckbox = useRef();

    const successMessage = useRef();

    const hiddenMessageStyle = {
        display: 'none',
        color: 'green',
        padding: 30,
        textAlign: 'center'
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
            console.log("valid");
            clearName();
            clearLastname();
            onGenderChange('');
            clearBio();
            onTermsAcceptedChange(false);
            successMessage.current.style.display = 'block';
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
            termsAcceptedCheckbox.current.className = "not-valid";
        } else {
            termsAcceptedCheckbox.current.className = "valid";
        }

        return isValid;
    }

    return (
        <form style={styles} onSubmit={handleOnSubmit}>
            <p>Witaj, powiedz nam coś o sobie!</p>

            <div ref={nameInputWrapper}>
                <input style={styles.input} type="text" placeholder="Wpisz swoje imię"
                       onChange={onNameChange} value={name}/>
            </div>

            <div ref={lastnameInputWrapper}>
                <input style={styles.input} type="text" placeholder="Wpisz swoje nazwisko" onChange={onLastnameChange} value={lastname}/>
            </div>

            <div ref={bioTextareaWrapper}>
                <textarea style={styles.input} name="bio"  rows="10" placeholder="Napisz coś o sobie!"
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
            <div ref={termsAcceptedCheckbox}>
                <input type="checkbox" id="accept_terms" onChange={(e) => onTermsAcceptedChange(e.target.checked)}
                       checked={termsAccepted}/>
                <label htmlFor="accept_terms">Wyrażam zgodę na przetwarzanie moich danych osobowych oraz akceptuję
                    warunki korzystania z serwisu.</label>
            </div>


            <button type="submit">Wyślij</button>
            <div ref={successMessage} style={hiddenMessageStyle}>
                Dziękujemy, Twój formularz został wysłany!
            </div>
        </form>
    )
}

export default Form;