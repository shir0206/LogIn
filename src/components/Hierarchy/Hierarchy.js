import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginApi from "../../connectDB/LoginApi";

import "./Hierarchy.css";

export const Hierarchy = ({ loginState }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currUser, setCurrUser] = useState(null);
  let history = useHistory();

  const navigateToLogIn = () => {
    console.log("navigateToLogIn");
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

  useEffect(() => {
    LoginApi.getAllUsers()
      .then(function (result) {
        setAllUsers(result.data);
        console.log("useAllUsers8=", result);
        console.log("useAllUsers8=", result.data);
        initCurrUser(result.data);
      })
      .catch(function (allUsersError) {
        console.log("useAllUsers8=", allUsersError);
        setError(allUsersError);
      });
  }, []);

  function initCurrUser(users) {
    console.log(users);
    const currUserID = loginState.currLoggedUserID;
    const currUserObj = users.filter((user) => user.id === currUserID);
    if (currUserObj.length > 0) {
      setCurrUser(currUserObj[0]);
      console.log(currUserObj[0]);
    }
  }

  return (
    <div className="hierarchy-container">
      <h1>hierarchy</h1>
      <h1>{loginState.currLoggedUserID}</h1>
      {currUser && (
        <h4>
          {"Hello, " + currUser.firstName + " " + currUser.lastName + "!"}
        </h4>
      )}
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};
