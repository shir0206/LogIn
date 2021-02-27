import React, { useState, useEffect } from "react";
import "./EmployeeCard.css";
export const EmployeeCard = ({ employee, currUser }) => {
  console.log("currUser=", currUser, " employee=", employee);

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
        <div className="employee-card-details">
          <h4 className="employee-name">
            {employee.firstName + " " + employee.lastName}
            {currUser.id === employee.id && (
              <i className="far fa-star curr-user-icon"></i>
            )}
          </h4>

          <a href={"mailto:" + employee.email} className="employee-email">
            <i className="fas fa-envelope email-icon"></i>
            {employee.email}
          </a>
          <button><i className="fas fa-chevron-circle-down"></i></button>
        </div>
      </div>

      <ul className="employee-list">
        {employee.employees &&
          employee.employees.map((employee, index) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              currUser={currUser}
            ></EmployeeCard>
          ))}
      </ul>
    </div>
  );
};
