import axios from "axios";

const baseUrl = "https://gongfetest.firebaseio.com";

const getAllUsers = () => {
  return axios.get(`${baseUrl + "/users.json"}`, {
    json: true
  });
};

const getAllSecrets = () => {
  return axios.get(`${baseUrl + "/secrets.json"}`, {
    json: true
  });
};

export default { getAllUsers, getAllSecrets };
