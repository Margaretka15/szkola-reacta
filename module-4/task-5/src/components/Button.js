import React, {forwardRef} from "react";

const style = {
    "width": 100,
    "color": "black",
    "backgroundColor": "blue"
}

const Button = forwardRef((props, ref) =>  {
    return (
        <button ref={ref} style={style}>Hey ya</button>
    );
});

export default Button;