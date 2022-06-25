import colors from "../../styles/colors";

function Textarea({bgColor, color, borderSize, borderRadius, borderColor}) {

    const styles = {
        backgroundColor: colors[bgColor],
        color: colors[color],
        border: `${borderSize} solid ${colors[borderColor]}`,
        borderRadius: borderRadius
    }

    return (
        <textarea style={styles}></textarea>
    )
}

export default Textarea;