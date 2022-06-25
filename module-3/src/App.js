import {Button, Textarea, Input} from "./components/Form";
import {Card} from "./components/Card";

import paella from './assets/paella.jpg';

function App() {
    return (
        <div>
            <Button bgColor="clouds" color="green">Click me!</Button>
            <Button bgColor="purple" color="clouds">Zobacz</Button>
            <Textarea bgColor="clouds" color="purple" borderRadius="10px" borderColor="red" borderSize="2px"/>
            <Input bgColor="clouds" color="purple" borderRadius="10px" borderColor="red" borderSize="2px"/>
            <Card title="Shrim and Chorizo Paella"
                  intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                  content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
                  imgSrc={paella}/>
        </div>
    );
}

export default App;
