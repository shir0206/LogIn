import React from "react";
import { useCallback } from "react";

import axios from "axios";
//<button onClick={getData}>BTN</button>

export function ConnectDB(props) {
  console.log("inside connect db");

  const baseUrl = "https://gongfetest.firebaseio.com/.json";

  function getData() {
    return axios.get(`${baseUrl}`, {
      json: true
    });
  }

  return { getData };
}
