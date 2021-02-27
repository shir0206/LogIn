import React, { useState } from "react";
import "./EmployeeCard.css";
import user from "../../images/user.jpg";

export const EmployeeCard = ({ employee, currentUser }) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <div className="employee-container">
      <div className="employee-card">
        <img
          className="employee-img"
          alt={employee.id}
          src={employee.photo ? employee.photo : user}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = user;
          }}
        ></img>
        <div className="employee-card-details">
          <h4 className="employee-name">
            {employee.firstName + " " + employee.lastName}
            {currentUser.id === employee.id && (
              <i className="fas fa-star curr-user-icon"></i>
            )}
          </h4>

          <a href={"mailto:" + employee.email} className="employee-email">
            <i className="fas fa-envelope email-icon"></i>
            {employee.email}
          </a>
          {employee.employees.length > 0 && (
            <button
              className="display-employees-btn"
              onClick={() => {
                setIsCardExpanded((prevIsCardExpanded) => !prevIsCardExpanded);
              }}
            >
              <i
                className={
                  isCardExpanded
                    ? "fas fa-chevron-circle-down display-emp-icon"
                    : "fas fa-chevron-circle-up display-emp-icon"
                }
              ></i>
            </button>
          )}
        </div>
      </div>

      {isCardExpanded && (
        <ul className="employee-list">
          {employee.employees &&
            employee.employees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                currentUser={currentUser}
              ></EmployeeCard>
            ))}
        </ul>
      )}
    </div>
  );
};
