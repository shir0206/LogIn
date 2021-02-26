import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./LogIn.css";

export const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisplayPass, setIsDisplayPass] = useState(false);

  function handleLogIn() {
    props.state.getSecrets(email, password);
  }

  function handleEmailValue(e) {
    setEmail(e.target.value);
  }
  function handlePasswordValue(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="login-container">
      <h1>Please log in</h1>
      <div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleEmailValue}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={isDisplayPass ? "text" : "password"}
            name="password"
            id="password"
            onChange={handlePasswordValue}
          />
          <button
            onClick={() => {
              setIsDisplayPass((prevIsDisplayPass) => !prevIsDisplayPass);
            }}
          >
            <i className="far fa-eye"></i>
          </button>
          {props.state.error && <p>err</p>}
        </div>
      </div>
      <button onClick={handleLogIn}>Log in</button>
    </div>
  );
};
