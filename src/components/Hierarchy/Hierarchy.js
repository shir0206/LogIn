import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import "./Hierarchy.css";

export const Hierarchy = (props) => {
  let history = useHistory();

  const navigateToLogIn = () => {
    console.log("navigateToLogIn");
    history.push("/LogIn");
  };

  function handleLogOut(navigateToLogIn) {
    if (props.state.currLoggedUserID) {
      //props.state.logOut(navigateToLogIn);
      // navigateToLogIn();
    }
  }

  return (
    <div className="hierarchy-container">
      <h1>hierarchy</h1>
      <h1>{props.state.currLoggedUserID}</h1>
      <button onClick={handleLogOut(navigateToLogIn)}>Log out</button>
    </div>
  );
};
