import React, {useEffect, useState} from "react";
import "./Snackbar.css";
import Snackbar from "./Snackbar";

function SnackbarComponent({title, message, time = "5", type}) {

  const [isShown, setIsShown] = useState(false);

  const handleOpen = () => {
    setIsShown((() => true))
  }
  useEffect(() => {
      const timer = setTimeout(() => {
        setIsShown(false)
      }, timeOfDisplay)

      return () => clearTimeout(timer)
    }
  )

  const timeOfDisplay = parseInt(time) * 1000;
  return (
    <>
      <button onClick={handleOpen}>Pokaż snackbar</button>

      {isShown && (
       <Snackbar title={title}
                 type={type}
                 message={message}/>
      )}
    </>
  )
}

export default SnackbarComponent;