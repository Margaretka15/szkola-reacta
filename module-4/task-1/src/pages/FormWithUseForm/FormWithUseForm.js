import React from "react";
import '../../styles/Form.css';
import {useForm} from "react-hook-form";

function FormWithUseForm() {
    const {register, handleSubmit, reset, formState: {errors, isSubmitSuccessful}} = useForm();

    const onSubmit = (data) => {
        reset({name: "", lastname: "", gender: "", bio: "", terms_accepted: ""});
        console.log("Formularz wyslany");
    }
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

            <p>Formularz poniżej korzysta z react-hook-form.
                Witaj, powiedz nam coś o sobie!</p>

            {errors.name && <div className="error-message">{errors.name?.message}</div>}
            <input className="form__input"
                   placeholder="Wpisz swoje imię"
                   {...register("name",
                       {
                           required: "Imię jest wymagane",
                           minLength: {value: 2, message: "Imię musi zawierać min. 2 litery"}
                       })}/>

            {errors.lastname && <div className="error-message">{errors.lastname?.message}</div>}

            <input className="form__input"
                   placeholder="Wpisz swoje nazwisko"
                   {...register("lastname",
                       {
                           required: "Nazwisko jest wymagane",
                           minLength: {value: 2, message: "Nazwisko musi zawierać min. 2 litery"}
                       })}/>

            {errors.bio && <div className="error-message">{errors.bio?.message}</div>}

            <textarea className="form__input"
                      placeholder="Napisz coś o sobie!"
                      {...register("bio",
                          {
                              required: "To pole jest wymagane"
                          })}/>

            {errors.gender?.type === 'required' && <div className="error-message">To pole jest wymagane</div>}
            <div>
                <input type="radio"
                       value="female"
                       id="female2"
                       {...register("gender", {required: true})}/>
                <label htmlFor="female2">Kobieta</label>
            </div>

            <div>
                <input type="radio"
                       value="male"
                       id="male2"
                       {...register("gender", {required: true})}/>
                <label htmlFor="male2">Mężczyzna</label>
            </div>

            <div>
                <input type="radio"
                       value="other"
                       id="other2"
                       {...register("gender", {required: true})}/>
                <label htmlFor="other2">Inna</label>
            </div>

            <div>
                {errors.terms_accepted?.type === 'required' &&
                <div className="error-message">To pole jest wymagane</div>}
                <input type="checkbox"
                       value="other"
                       id="accept_terms2"
                       {...register("terms_accepted", {required: true})}/>
                <label htmlFor="accept_terms2">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych oraz akceptuję
                    warunki korzystania z serwisu.
                </label>
            </div>


            <input type="submit"/>
            {isSubmitSuccessful && <div className="success-message">
                Dziękujemy, Twój formularz został wysłany!
            </div>}
        </form>);
}

export default FormWithUseForm;