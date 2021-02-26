import React, { useState, useEffect } from "react";

import "./LogIn.css";

export const LogIn = (props) => {
  const [email, setEmail] = useState("anthony.xiouping@xtreet.tvl");
  const [password, setPassword] = useState("mllv9n0x");
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
            value={email}
            onChange={handleEmailValue}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={isDisplayPass ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordValue}
          />
          <button
            onClick={() => {
              setIsDisplayPass((prevIsDisplayPass) => !prevIsDisplayPass);
            }}
          >
            <i className="far fa-eye"></i>
          </button>
          {props.state.error && <p>Invalid Email Address or Password.</p>}
        </div>
      </div>
      <button onClick={handleLogIn}>Log in</button>
    </div>
  );
};
