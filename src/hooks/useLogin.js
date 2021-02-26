import React, { useState } from "react";
import LoginApi from "../connectDB/LoginApi";

export default () => {
  const [secrets, setSecrets] = useState([]);
  const [error, setError] = useState(null);
  const [isValidUser, setIsValidUser] = useState(false);

  function getSecrets() {
    LoginApi.getAllSecrets()
      .then(function (result) {
        setSecrets(result.data.secrets);
        console.log("getSecrets=", result);
      })
      .catch(function (loginError) {
        console.log("getSecrets=", error);
        setError(loginError);
      });
  }

  return { getSecrets, secrets, isValidUser, error };
};
