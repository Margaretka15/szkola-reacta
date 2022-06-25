import React from "react";

const styles = {
    avatar: {
        borderRadius: '50%',
        width: 40,
        height: 40,
        backgroundColor: '#f44336'
    }
}
function Avatar(){
    return(
        <div style={styles.avatar}/>
    )
}
export default Avatar;