import React, { useState } from "react";
import LoginApi from "../connectDB/LoginApi";

export default () => {
  const [allUsers, setAllUsers] = useState([]);
  const [error, setError] = useState(null);

  function getAllUsers() {
    LoginApi.getAllUsers()
      .then(function (result) {
        setAllUsers(result.data.users);
        console.log("useAllUsers=", result);
      })
      .catch(function (loginError) {
        console.log("useAllUsers=", error);
        setError(loginError);
      });
  }

  return { getAllUsers, allUsers, error };
};