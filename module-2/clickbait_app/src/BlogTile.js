import styles from "./styles";

function BlogTile({title, intro}) {
    return (
        <div style={styles.news}>
            <h1 style={styles.h1}>{title}</h1>
            <p style={styles.p}>{sliceText(intro, 25)}</p>
        </div>
    );
}

function sliceText(intro, n) {
    if (intro.length > n) {
        return `${intro.slice(0, n)}...`;
    }
    return intro;
}

export default BlogTile;