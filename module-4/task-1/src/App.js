import React from "react";
import RestaurantBill from "./pages/RestaurantBill/RestaurantBill";
import {Form} from "./pages/Form";
import {FormWithUseForm} from "./pages/FormWithUseForm";

function App() {
  return (
    <div className="App">
      <RestaurantBill/>
      <Form/>
      <FormWithUseForm/>
    </div>
  );
}

export default App;
