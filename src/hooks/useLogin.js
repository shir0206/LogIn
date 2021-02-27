import React, { useState } from "react";
import apiService from "../services/apiService";
import poision from "../constants/poision";

export default () => {
  const [error, setError] = useState(null);
  const [currLoggedUserID, setCurrLoggedUserID] = useState(null);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const logIn = (email, password, navigateToHierarchy) => {
    getSecrets(email, password, navigateToHierarchy);
  };

  const getSecrets = (email, password, navigateToHierarchy) => {
    // Request to server to get the secrets
    apiService
      .getAllSecrets()
      .then(function (result) {
        // Check if the user is valid using the secrets
        validateUser(result.data, email, password, navigateToHierarchy);
      })
      .catch(function (loginError) {
        setError(loginError);
      });
  };

  const validateUser = (secrets, email, password, navigateToHierarchy) => {
    // Decode the current user ID
    let currSecretCode = encode(email, password);
    let currUserID = secrets[currSecretCode];

    // If user is valid, continue to the hieracht dashboard page
    if (currUserID) {
      setIsUserAuthenticated(true);
      setCurrLoggedUserID(currUserID);
      navigateToHierarchy();
    } else {
      setError("Invalid Email Address or Password");
    }
  };

  const logOut = (navigateToLogIn) => {
    setCurrLoggedUserID(null);
    setIsUserAuthenticated(false);
    navigateToLogIn();
  };

  const make32 = (s) => {
    let r = s;
    while (r.length < 32) {
      r += s;
    }

    r = r.substring(0, 32);
    let ret = [];
    for (let i = 0; i < r.length; i++) {
      ret.push(r.charCodeAt(i));
    }
    return ret;
  };
  const encode = (email, password) => {
    let e = make32(email);
    let p = make32(password);
    let code = "";

    for (let i = 0; i < 32; i++) {
      code += ("0" + poision[(e[i] ^ p[i]) & 0xff].toString(16))
        .slice(-2)
        .toUpperCase();
    }

    return code;
  };

  return { logIn, logOut, error, isUserAuthenticated, currLoggedUserID };
};
