import React, {useState} from "react";
import Dialog from "./components/Dialog";
import Snackbar from "./components/Snackbar";

function App() {

  const [isDialogShown, setIsDialogShown] = useState(false);

  const openDialog = () => {
    setIsDialogShown(true);
  }
  const closeDialog = () => {
    setIsDialogShown(false);
  }

  const confirmDialog = () => {
    setIsDialogShown(false);
  }

  const [isSnackbarShown, setIsSnackbarShown] = useState(false);

  const showSnackbar = () => {
    setIsSnackbarShown(() => true);
  }

  return (
    <div className="App">
      <button onClick={openDialog}>Pokaż okienko</button>
      <Dialog isShown={isDialogShown}
              title="Potwierdź cokolwiek"
              content="Potwierdzasz własnie cokolwiek. Kliknij ok, aby potwierdzić."
              handleClose={confirmDialog}
      />

      <button onClick={showSnackbar}>Click me</button>

      {isSnackbarShown && (
        <Snackbar title="Sukces!" time="3" message="To jest wiadomość!" showSnackbar={setIsSnackbarShown}/>
      )}
    </div>
  );

}

export default App;
