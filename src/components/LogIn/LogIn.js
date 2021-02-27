import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./LogIn.css";

export const LogIn = ({ loginState }) => {
  const [email, setEmail] = useState("anthony.xiouping@xtreet.tvl");
  const [password, setPassword] = useState("mllv9n0x");
  const [isDisplayPass, setIsDisplayPass] = useState(false);
  const [areFieldsEmpty, setAreFieldsEmpty] = useState();

  let history = useHistory();

  const navigateToHierarchy = () => {
    console.log("navigateToHierarchy");
    history.push("/hierarchy");
  };

  function handleLogIn() {
    if (email && password) {
      setAreFieldsEmpty(false);
      loginState.logIn(email, password, navigateToHierarchy);
    } else {
      setAreFieldsEmpty(true);
    }
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
          {areFieldsEmpty && <p>Please fill all fields.</p>}
          {loginState.error && <p>Invalid Email Address or Password.</p>}
        </div>
      </div>
      <button onClick={handleLogIn}>Log in</button>
    </div>
  );
};
