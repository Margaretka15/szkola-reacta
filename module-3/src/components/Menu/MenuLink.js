import React from "react";

function MenuLink({to, children, isActive}) {
    const styles = {
        height: 30,
        lineHeight: '30px',
        backgroundColor: '#1e1e1e',
        color: 'white',
        width: 150,
        textAlign: 'center',
        display: 'block'
    }
    if(isActive){
        styles.color = "red";
    }
    return (
        <a href={to} style={styles} className="menu__link">{children}</a>
    );
}

export default MenuLink;