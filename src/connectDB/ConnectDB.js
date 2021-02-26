import React from "react";
import { useCallback } from "react";

import axios from "axios";
//<button onClick={getData}>BTN</button>

export const ConnectDB = (props) => {
  console.log("inside connect db");
  const baseUrl = "https://gongfetest.firebaseio.com/.json";

  const getData = useCallback(async () => {
    try {
      // Get result from server
      const result = await axios.get(`${baseUrl}`, {
        json: true
      });

      // Get next children nodes to the state
      const resultData = result; //result.data.data;
      console.log(resultData);
    } catch (err) {
      // Request fail
      console.log(err.message);
    }
  });
};
