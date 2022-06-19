import styles from "./styles";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
    const [uuid, setUuid] = useState('');

    const generateUuid = () => {
        setUuid(() => uuidv4());
    }

    return (
        <div style={styles.container}>
            <h1>UUID generator</h1>
            <div style={styles.uuid}>{uuid}</div>
            <button onClick={generateUuid} style={styles.button}>Generate UUID</button>
        </div>
    );
}

export default App;