import React, {useState} from "react";

function Employee({id, age, position, firstName, lastName, salary}) {
    const [isShown, setIsShown] = useState(false);
    const handleClick = () => {
        setIsShown(isShown => !isShown);

    }
    const showMore = () => {
        if (isShown) {
            return (
                <div className="employee__details">
                    <p>Position: {position}</p>
                    <p>Salary: {salary}</p>
                    <p>Age: {age}</p>
                </div>
            );
        }
    }
    return (
        <div className="employee" onClick={() => handleClick()}>
            <div className="employee__name">{id} {firstName} {lastName} </div>
            {showMore()}
        </div>
    );
}

export default Employee;