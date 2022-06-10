import { v4 as uuidv4 } from 'uuid';
import styles from "./styles";

function Generator(){
    return(
        <div style={styles.code}>{uuidv4()}</div>
    );
}

export default Generator;