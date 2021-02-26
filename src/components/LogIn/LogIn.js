import React, { useState } from "react";
import { ConnectDB } from "../../connectDB/ConnectDB";

import "./LogIn.css";

export const LogIn = (props) => {
  const [isDisplayPass, setIsDisplayPass] = useState(false);

  function handleLogIn() {
    let db = ConnectDB();

    db.getData()
      .then(function (result) {
        console.log("handleLogIn", result);
      })
      .catch(function (error) {
        console.log("handleLogIn", error);
      });
  }

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
