import colors from "../../styles/colors";

function Textarea({bgColor, color, borderSize, borderRadius, borderColor}) {

    const styles = {
        backgroundColor: bgColor,
        color: color,
        border: `${borderSize} solid ${borderColor}`,
        borderRadius: borderRadius
    }

    return (
        <textarea style={styles}></textarea>
    )
}

export default Textarea;