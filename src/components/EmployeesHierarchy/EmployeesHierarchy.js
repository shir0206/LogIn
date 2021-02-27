import React, { useState, useEffect } from "react";
import "./EmployeesHierarchy.css";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
export const EmployeesHierarchy = ({ hierarchyTreeData }) => {
  return (
    <ul className="employee-hierarchy">
      {hierarchyTreeData &&
        hierarchyTreeData.map((employee, index) => (
          <EmployeeCard employee={employee}></EmployeeCard>
        ))}
    </ul>
  );
};
