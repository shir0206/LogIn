import React from "react";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
export const EmployeesHierarchy = ({ hierarchyTreeData, currentUser }) => {
  return (
    <ul className="employee-hierarchy">
      {hierarchyTreeData.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          currentUser={currentUser}
        ></EmployeeCard>
      ))}
    </ul>
  );
};
