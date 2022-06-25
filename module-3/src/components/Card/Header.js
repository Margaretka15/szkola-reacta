import React from "react";
import Avatar from "./Avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";

function Header({title}) {
    return (
        <div className="card__header">
            <Avatar/>
            <div className="card__header--title-wrapper">
                <span className="text--white">{title}</span>
                <span className="text--grey">September 14, 2016</span>
            </div>
            <div className="card__icon--details">
                <FontAwesomeIcon icon={faEllipsisV}/>
            </div>
        </div>
    );
}
export default Header;