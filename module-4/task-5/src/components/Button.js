import React, {forwardRef} from "react";

const style = {
    "width": 100,
    "color": "black",
    "backgroundColor": "blue"
}

const Button = forwardRef(({onMouseEnter, onMouseLeave}, ref) =>  {
    return (
        <button ref={ref} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Hey ya</button>
    );
});

export default Button;