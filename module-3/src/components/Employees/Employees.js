import React from "react";
import './Employees.css';
import {data} from "./data";
import Employee from "./Employee";

function Employees() {
    return (
        data.map((employee) => {
            return (
                <Employee key={`employee=${employee.id}`}
                          id={employee.id}
                          age={employee.age}
                          position={employee.position}
                          firstName={employee.firstName}
                          lastName={employee.lastName}
                          salary={employee.salary}/>
            );
        })
    );
}

export default Employees;