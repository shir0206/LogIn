import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./LogIn.css";

export const LogIn = (props) => {
  const [isDisplayPass, setIsDisplayPass] = useState(false);

  function handleLogIn() {
    props.state.getSecrets();
  }

  // useEffect(() => {
  //   if (props.state.secrets.length === 0) return;

  //   console.log("secrets=", props.state.secrets);
  //   isValidUser();
  // }, [props.state.secrets]);

  // function isValidUser() {
  //   if (true) {
  //     let history = useHistory();
  //     history.push("/hierarchy");
  //   }
  // }

  return (
    <div className="login-container">
      <h1>Please log in</h1>
      <div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="text" id="email" name="email"></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={isDisplayPass ? "text" : "password"}
            name="password"
            id="password"
          />
          {props.state.error && <p>err</p>}
          <button
            onClick={() => {
              setIsDisplayPass((prevIsDisplayPass) => !prevIsDisplayPass);
            }}
          >
            <i className="far fa-eye"></i>
          </button>
        </div>
      </div>
      <button onClick={handleLogIn}>Log in</button>
    </div>
  );
};
