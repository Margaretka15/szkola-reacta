import React, {useRef} from "react";

import Button from './components/Button';

function App() {
    const ref = useRef();

    const onMouseEnter = () => {
        ref.current.style.backgroundColor = "red";
        ref.current.style.color = "white";
    }
    const onMouseLeave = () => {
        ref.current.style.backgroundColor = "blue";
        ref.current.style.color = "black";
    }

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Button ref={ref}/>
        </div>
    );
}

export default App;
