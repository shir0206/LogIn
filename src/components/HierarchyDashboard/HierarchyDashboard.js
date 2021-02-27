import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginApi from "../../connectDB/LoginApi";
import { EmployeesHierarchy } from "../EmployeesHierarchy/EmployeesHierarchy";

import "./HierarchyDashboard.css";

export const HierarchyDashboard = ({ loginState }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currUser, setCurrUser] = useState(null);
  const [hierarchyTreeData, setHierarchyTreeData] = useState(null);

  let history = useHistory();

  const navigateToLogIn = () => {
    //console.log("navigateToLogIn");
    history.push("/LogIn");
  };

  if (!loginState.currLoggedUserID) {
    navigateToLogIn();
  }

  function handleLogOut() {
    if (loginState.currLoggedUserID) {
      loginState.logOut(navigateToLogIn);
    }
  }

  function initCurrUser(users) {
    //console.log(users);
    const currUserID = loginState.currLoggedUserID;
    const currUserObj = users.filter((user) => user.id === currUserID);
    if (currUserObj.length > 0) {
      setCurrUser(currUserObj[0]);
      //console.log(currUserObj[0]);
    }
  }

  function buildHierarchyTree(empList) {
    //console.log("empList=", empList);

    let map = {};
    let node;
    let hierarchyTree = [];
    let i;

    //Prepare data
    for (i = 0; i < empList.length; i++) {
      //Init map Key=ID, Value=index of empList
      map[empList[i].id] = i;
      //Init employee array to each employee
      empList[i].employees = [];
    }

    //Create tree
    for (i = 0; i < empList.length; i++) {
      node = empList[i];

      if (node.managerId) {
        // Insert employee to relevant manager
        empList[map[node.managerId]].employees.push(node);
      } else {
        // Set employee as prime manager
        hierarchyTree.push(node);
      }
    }
    return hierarchyTree;
  }

  useEffect(() => {
    LoginApi.getAllUsers()
      .then(function (result) {
        setAllUsers(result.data);
        //console.log("result=", result);
        //console.log("result.data=", result.data);
        initCurrUser(result.data);

        let hierarchyTree = buildHierarchyTree(result.data);
        //console.log("list_to_tree=", hierarchyTree);
        setHierarchyTreeData(hierarchyTree);
      })
      .catch(function (allUsersError) {
        //console.log("allUsersError=", allUsersError);
        setError(allUsersError);
      });
  }, []);
  return (
    <div className="hierarchy-container">
      <nav className="hierarchy-nav">
        {currUser && (
          <h4 className="hierarchy-nav-greeting">
            {"Hello, " + currUser.firstName + " " + currUser.lastName + "!"}
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
          currUser={currUser}
        />
      )}
    </div>
  );
};
