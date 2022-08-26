import styles from './RegistrationForm.module.css';
import {useState} from "react";

function RegistrationForm() {

  /// inne podejście:
  /*
  * const nameRef = useRef(null); (podpiąć do propsa ref do inputów)
  *
  *
  *  */

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    hobby: ''
    /// czary, bo można tu nie dawać wszystkich kluczy, a i tak się ustawią w naszej super funkcji!!
  })

  const {name, email, hobby} = formValues;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormValues({
      ...formValues,
      [name]: value
    })

    console.log(event.target.value);
    console.log(event.target.name);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);

    const { name, email, hobby } = event.target.elements;
    // console.log(event.target.elements.name.value)
    // console.log(event.target.elements.email.value) // bierze to po IDkach

    const data = {
      name: name.value,
      email: email.value,
      hobby: hobby.value
    } /// <--- i teraz można wziąć dane, nie trzymać w stanie.

    console.log(data)

    //validation

    //send data
    // fetch('http://example.com', {
    //   method: 'POST',
    //   body: JSON.stringify(formValues),
    //   headers: {
    //     'Content-type': 'application/json'
    //   }
    // })
  }
  return (
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <h2>Registration form </h2>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" onChange={handleChange}/>
      </div>
      <div>
        <select name="hobby" id="hobby" onChange={handleChange}>
          <option value="sport">sport</option>
          <option value="art">art</option>
          <option value="books">books</option>
          <option value="cooking">cooking</option>
        </select>
      </div>
      <div>
        <input className={styles["button"]} type="submit" value="Send"/>
      </div>
      <p>{name} {email} {hobby}</p>
    </form>
  );

}

export {RegistrationForm};