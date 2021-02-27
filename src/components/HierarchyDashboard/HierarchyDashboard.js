import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import apiService from "../../services/apiService";
import { EmployeesHierarchy } from "../EmployeesHierarchy/EmployeesHierarchy";

import "./HierarchyDashboard.css";

export const HierarchyDashboard = ({ loginState }) => {
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [hierarchyTreeData, setHierarchyTreeData] = useState(null);

  let history = useHistory();

  const navigateToLogIn = () => {
    history.push("/LogIn");
  };

  function handleLogOut() {
    if (loginState.currLoggedUserID) {
      loginState.logOut(navigateToLogIn);
    }
  }

  function initCurrUser(users) {
    const currUserID = loginState.currLoggedUserID;
    const newCurrentUser = users.find((user) => user.id === currUserID);
    if (newCurrentUser) {
      setCurrentUser(newCurrentUser);
    }
  }

  // function buildHierarchyTree(empList) {
  const buildHierarchyTree = (empList) => {
    let empMap = {};
    let node;
    let hierarchyTree = [];
    let i;

    //Prepare data
    for (i = 0; i < empList.length; i++) {
      //Init map: Key=ID, Value=index of empList
      empMap[empList[i].id] = i;
      //Init employee array to each employee
      empList[i].employees = [];
    }

    //Create tree
    for (i = 0; i < empList.length; i++) {
      node = empList[i];
      if (node.managerId) {
        // Insert employee to relevant manager
        empList[empMap[node.managerId]].employees.push(node);
      } else {
        // Set employee as prime manager
        hierarchyTree.push(node);
      }
    }
    return hierarchyTree;
  };

  useEffect(() => {
    apiService
      .getAllUsers()
      .then(function (result) {
        initCurrUser(result.data);

        let hierarchyTree = buildHierarchyTree(result.data);
        setHierarchyTreeData(hierarchyTree);
      })
      .catch(function (allUsersError) {
        setError(allUsersError);
      });
  });

  // Avoid entering a direct link
  if (!loginState.currLoggedUserID) {
    return <Redirect to="/" />;
  }

  // Handle error on load all users
  if (error) {
    return (
      <div className="hierarchy-container">
        <h4>Error loading hierarchy page.</h4>
        <button className="login-btn" onClick={navigateToLogIn}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="hierarchy-container">
      <nav className="hierarchy-nav">
        {currentUser && (
          <h4 className="hierarchy-nav-greeting">
            {"Hello, " +
              currentUser.firstName +
              " " +
              currentUser.lastName +
              "!"}
          </h4>
        )}

        <button onClick={handleLogOut} className="logout-btn">
          Log out <i className="fas fa-sign-out-alt logout-icon"></i>
        </button>
      </nav>
      <h1>Hierarchy</h1>

      {hierarchyTreeData && (
        <EmployeesHierarchy
          hierarchyTreeData={hierarchyTreeData}
          currentUser={currentUser}
        />
      )}
    </div>
  );
};
