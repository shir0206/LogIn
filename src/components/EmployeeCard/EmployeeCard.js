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
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://www.jing.fm/clipimg/detail/384-3841744_person-generic-clipart-image-person.png";
          }}
        ></img>

        <h4 className="employee-name">
          {employee.firstName + " " + employee.lastName}
        </h4>
      </div>

      <ul className="employee-list">
        {employee.employees &&
          employee.employees.map((employee, index) => (
            <EmployeeCard key={employee.id} employee={employee}></EmployeeCard>
          ))}
      </ul>
    </div>
  );
};
