import axios from "axios";

const baseUrl = "https://gongfetest.firebaseio.com/.json";

function getAllUsers() {
  return axios.get(`${baseUrl}`, {
    json: true
  });
}

function getUser(email, password) {
  return axios.get(`${baseUrl}`, {
    json: true
  });
}
function getSecrets() {
  return axios.get(`${baseUrl}`, {
    json: true
  });
}

export default {
  getAllUsers,
  getUser,
  getSecrets
};
