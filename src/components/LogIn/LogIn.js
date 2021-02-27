import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./LogIn.css";

export const LogIn = ({ loginState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisplayPass, setIsDisplayPass] = useState(false);
  const [areFieldsEmpty, setAreFieldsEmpty] = useState();

  let history = useHistory();

  const navigateToHierarchy = () => {
    history.push("/hierarchy");
  };

  const handleLogIn = () => {
    if (email && password) {
      setAreFieldsEmpty(false);
      loginState.logIn(email, password, navigateToHierarchy);
    } else {
      setAreFieldsEmpty(true);
    }
  };

  const handleEmailValue = (e) => {
    setEmail(e.target.value.toLowerCase());
  };
  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Please log in</h1>
        <div>
          <div className="login-field-container">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailValue}
              className="login-input"
            ></input>
          </div>
          <div className="login-field-container">
            <label htmlFor="password">Password</label>
            <input
              type={isDisplayPass ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordValue}
              className="login-input"
            />
            <button
              onClick={() => {
                setIsDisplayPass((prevIsDisplayPass) => !prevIsDisplayPass);
              }}
            >
              <i className="far fa-eye display-passwprd-icon"></i>
            </button>
          </div>
        </div>

        {areFieldsEmpty ? (
          <p className="error-msg">Please fill all fields.</p>
        ) : (
          loginState.error && (
            <p className="error-msg">Invalid Email Address or Password.</p>
          )
        )}
        <button className="login-btn" onClick={handleLogIn}>
          Log in
        </button>
      </div>
      <div className="login-decoration"></div>
    </div>
  );
};
