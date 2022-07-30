import React, {useEffect} from "react";
import './Snackbar.css';

function Snackbar({title, message, time = "5", showSnackbar, type}) {

  const timeOfDisplay = parseInt(time) * 1000;


  useEffect(() => {
      const timer = setTimeout(() => {
        showSnackbar(false)
      }, timeOfDisplay)

      return () => clearTimeout(timer)
    }
  )

  return (
    <div className={`snackbar snackbar--${type}`}>
      <div className={`snackbar__title`}> {title} </div>
      <p className={`snackbar__content`}> {message} </p>
    </div>
  )
}

export default Snackbar;