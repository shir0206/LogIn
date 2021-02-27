import axios from "axios";

const baseUrl = "https://gongfetest.firebaseio.com";

function getAllUsers() {
  return axios.get(`${baseUrl + "/users.json"}`, {
    json: true
  });
}

function getAllSecrets() {
  return axios.get(`${baseUrl + "/secrets.json"}`, {
    json: true
  });
}

export default { getAllUsers, getAllSecrets };
