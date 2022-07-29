import React, {useState} from "react";
import Dialog from "./components/Dialog";

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
    </div>
  );
}

export default App;
