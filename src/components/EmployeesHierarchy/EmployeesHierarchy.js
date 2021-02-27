import React, { useState, useEffect } from "react";
import "./EmployeesHierarchy.css";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
export const EmployeesHierarchy = ({ hierarchyTreeData }) => {
  return (
    <ul className="employee-hierarchy">
      {hierarchyTreeData &&
        hierarchyTreeData.map((employee, index) => (
          <EmployeeCard key={employee.id} employee={employee}></EmployeeCard>
        ))}
    </ul>
  );
};
