import axios from "axios";

const JwtToken = sessionStorage.getItem("Jwt_token"); // Replace with the actual session token value

const apiServer = axios.create({
  // baseURL: "https://systemize-api.onrender.com", // Replace with your Rails API server URL
  baseURL: "http://127.0.0.1:3000", // Replace with your Rails API server URL
  // withCredentials: false,
});

if (JwtToken) {
  apiServer.defaults.headers.common['Authorization'] = 'Bearer ' + JwtToken;
}

export default apiServer;
