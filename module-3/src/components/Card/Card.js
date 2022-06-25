import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faShareNodes, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Header from "./Header";
import './Card.css';

function Card({title, content, intro, imgSrc}) {
    const [isActive, setActive] = useState(false);
    return (
        <div className="card">
            <Header title={title}/>
            <img src={imgSrc}/>

            <div className="card__text-content">
                <p> {intro} </p>
            </div>

            <div className="card__icons">

                <div className="card__icons--social">
                    <FontAwesomeIcon icon={faHeart}/>
                </div>

                <div className="card__icons--social">
                    <FontAwesomeIcon icon={faShareNodes}/>
                </div>

                <div className="card__icon--show-more" onClick={() => setActive(!isActive)}>
                    <FontAwesomeIcon icon={faChevronDown}/>
                </div>

            </div>
            {
                isActive && (
                    <div className="card__text-content">
                        <p> {content} </p>
                    </div>
                )
            }
        </div>
    )
}

export default Card;