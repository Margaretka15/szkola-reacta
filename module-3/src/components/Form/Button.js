import React from "react";

const colorsDictionary = {
    "carrot": "#e67e22",
    "purple": "#8e44ad",
    "clouds": "#95a5a6",
    "red": "#e74c3c"
}

function Button({children, bgColor, color}) {
    const styles = {
        backgroundColor: colorsDictionary[bgColor],
        color: colorsDictionary[color]
    }

    return (
        <button style={styles}>{ children }</button>
    );
}

Button.defaultProps = {
    label: "click mee",
    bgColor: "red",
    color: "clouds"
}


export default Button;


