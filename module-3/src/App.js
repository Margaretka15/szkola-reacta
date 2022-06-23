import {Button, Textarea, Input} from "./components/Form";

function App() {
    return (
        <div>
            <Button bgColor="clouds" color="green">Click me!</Button>
            <Button bgColor="purple" color="clouds">Zobacz</Button>
            <Textarea bgColor="clouds" color="purple" borderRadius="10px" borderColor="red" borderSize="2px"/>
            <Input bgColor="clouds" color="purple" borderRadius="10px" borderColor="clouds" borderSize="2px"/>

        </div>
    );
}


export default App;
