import React, { useState } from "react";
import LoginApi from "../connectDB/LoginApi";

export default () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  function getUsers() {
    LoginApi.getUsers()
      .then(function (result) {
        setUsers(result.data.users);
        console.log("handleLogIn", result);
      })
      .catch(function (loginError) {
        console.log("handleLogIn", error);
        setError(loginError);
      });
  }

  return { getUsers, users, error };
};
