import Generator from './Generator';
import styles from "./styles";
function App(){
    return(
        <div style ={styles.container}>
            <h1>UUID generator</h1>
            <Generator/>
        </div>
    );
}

export default App;