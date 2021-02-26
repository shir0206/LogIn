import React, { useState } from "react";

import "./LogIn.css";

export const LogIn = (props) => {
  const [isDisplayPass, setIsDisplayPass] = useState(false);

  return (
    <div className="login-container">
      <h1>Please log in</h1>
      <div>
        <h6>Email Address:</h6>
        <input></input>
      </div>
      <div>
        <h6>Password:</h6>
        <input
          type={isDisplayPass ? "text" : "password"}
          name="password"
          id="password"
        />

        <button
          onClick={() => {
            setIsDisplayPass(true);
          }}
        >
          <i className="far fa-eye"></i>
        </button>
      </div>
    </div>
  );
};
