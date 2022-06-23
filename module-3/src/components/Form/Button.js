import React from "react";

import colors from "../../styles/colors";

function Button({children, bgColor, color}) {
    const styles = {
        backgroundColor: colors[bgColor],
        color: colors[color]
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


