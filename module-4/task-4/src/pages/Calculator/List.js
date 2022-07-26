import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faTrash} from '@fortawesome/free-solid-svg-icons';


function List({title, array, deleteItem, updateListBalance}) {


    return (
        <div className="list">
            <div className="list__title"> {title} </div>

            {array.map((item) => <div className="list__element" key={`${item.id}-item`}>
                <div>
                    {item.name}
                </div>
                <div>
                    {`${item.amount} PLN`}
                </div>
                <div>
                    {(item.category === 'undefined') ? item.category : 'bez kategorii'}
                </div>
                <div className="icon-wrapper" onClick={() => {
                    deleteItem(item);
                    updateListBalance(item);
                }}>
                    <FontAwesomeIcon icon={faTrash}/>
                </div>
            </div>)}
        </div>

    )
}

export default List;