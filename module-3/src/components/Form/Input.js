import colors from "../../styles/colors";

function Input({bgColor, color, borderSize, borderRadius, borderColor}) {

    const styles = {
        backgroundColor: colors[bgColor],
        color: colors[color],
        border: `${borderSize} solid ${colors[borderColor]}`,
        borderRadius: borderRadius
    }

    return (
        <input style={styles} type="text"/>
    );
}

export default Input;