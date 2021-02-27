import axios from "axios";

const baseUrl = "https://gongfetest.firebaseio.com";

function getAllUsers() {
  return axios.get(`${baseUrl + "/users.json"}`, {
    json: true
  });
}

function getUser(email, password) {
  return axios.get(`${baseUrl + "/.json"}`, {
    json: true
  });
}
function getAllSecrets() {
  const receiptUrl = baseUrl + "/secrets.json";
  return axios.get(`${receiptUrl}`, {
    json: true
  });
}

export default {
  getAllUsers,
  getUser,
  getAllSecrets
};
