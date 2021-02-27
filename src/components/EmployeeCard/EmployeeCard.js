import React, { useState, useEffect } from "react";
import "./EmployeeCard.css";

export const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-container">
      <div className="employee-card">
        <img
          className="employee-img"
          alt={employee.id}
          src={employee.photo}
        ></img>
        <h4 className="employee-name">
          {employee.firstName + " " + employee.lastName}
        </h4>
      </div>

      <ul className="employee-list">
        {employee.employees &&
          employee.employees.map((employee, index) => (
            <EmployeeCard employee={employee}></EmployeeCard>
          ))}
      </ul>
    </div>
  );
};
