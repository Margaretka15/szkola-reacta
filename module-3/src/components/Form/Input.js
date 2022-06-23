import colors from "../../styles/colors";

function Input({bgColor, color, borderSize, borderRadius, borderColor}) {

    const styles = {
        backgroundColor: bgColor,
        color: color,
        border: `${borderSize} solid ${borderColor}`,
        borderRadius: borderRadius
    }

    return (
        <input style={styles} type="text"/>
    );
}

export default Input;