import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Hierarchy.css";

export const Hierarchy = ({ loginState }) => {
  let history = useHistory();

  const navigateToLogIn = () => {
    console.log("navigateToLogIn");
    history.push("/LogIn");
  };

  function handleLogOut() {
    if (loginState.currLoggedUserID) {
      loginState.logOut(navigateToLogIn);
    }
  }

  return (
    <div className="hierarchy-container">
      <h1>hierarchy</h1>
      <h1>{loginState.currLoggedUserID}</h1>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};
