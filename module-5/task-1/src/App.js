import React, {useState} from "react";
import Dialog from "./components/Dialog/Dialog";
import SnackbarComponent from "./components/Snackbar/SnackbarComponent";

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

  return (
    <div className="App">
      <button onClick={openDialog}>Pokaż okienko</button>
      <Dialog isShown={isDialogShown}
              title="Potwierdź cokolwiek"
              content="Potwierdzasz własnie cokolwiek. Kliknij ok, aby potwierdzić."
              handleClose={confirmDialog}
      />

      <SnackbarComponent title="Sukces!"
                         time="2"
                         type="success"
                         message="To jest wiadomość!" />
    </div>
  );

}

export default App;
